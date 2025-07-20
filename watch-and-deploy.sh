#!/bin/bash

# === CONFIGURATION ===
REMOTE_USER="a2181947"
REMOTE_HOST="access-5017179262.webspace-host.com"
REMOTE_PATH="api_foot"
BUILD_DIR="build"
WATCH_DIRS="./src"   # <-- On surveille uniquement ./src pour éviter boucle infinie

LOG_FILE="./deploy.log"

# === Fonction pour logger avec timestamp ===
log() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" | tee -a "$LOG_FILE"
}

# === FONCTION BUILD + DEPLOIEMENT ===
build_and_deploy() {
  log "📦 Build en cours..."
  if npm run build >> "$LOG_FILE" 2>&1; then
    log "🚀 Déploiement avec rsync..."
    if rsync -avz --delete --exclude='pictures/' "$BUILD_DIR/" "$REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH" >> "$LOG_FILE" 2>&1; then
      log "✅ Build + déploiement terminé avec succès"
    else
      log "❌ Erreur lors du déploiement rsync"
    fi
  else
    log "❌ Erreur lors du build npm"
  fi
  log "------------------------------------------------------"
}

# === TIMER DE SURVEILLANCE (30 secondes d’inactivité) ===
log "👀 Surveillance des fichiers dans $WATCH_DIRS (30s d'inactivité)..."

last_change=$(date +%s)
triggered=false

monitor_timeout() {
  while :; do
    now=$(date +%s)
    diff=$((now - last_change))
    if [ $diff -ge 30 ]; then
      build_and_deploy
      triggered=false
    fi
    sleep 1
  done
}

# === SURVEILLANCE DES CHANGEMENTS ===
fswatch -o $WATCH_DIRS | while read change; do
  last_change=$(date +%s)
  if [ "$triggered" = false ]; then
    triggered=true
    monitor_timeout &
  fi
done