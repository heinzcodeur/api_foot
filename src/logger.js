const logLevels = {
  INFO: "info",
  WARN: "warn",
  ERROR: "error",
};

const log = (level, message, error = null) => {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}`;

  switch (level) {
    case logLevels.INFO:
      console.info(logEntry);
      break;
    case logLevels.WARN:
      console.warn(logEntry);
      break;
    case logLevels.ERROR:
      console.error(logEntry, error);
      break;
    default:
      console.log(logEntry);
  }

  // 📨 Tu peux ici envoyer l'erreur à un serveur via fetch/Axios
  // sendLogToServer({ timestamp, level, message, error });
};

export const Logger = {
  info: (msg) => log(logLevels.INFO, msg),
  warn: (msg) => log(logLevels.WARN, msg),
  error: (msg, err) => log(logLevels.ERROR, msg, err),
};