const calculateAge = (birthdateString) => {
    // Convertir la date de naissance de la chaîne de texte en un objet Date
    const [day, month, year] = birthdateString.split('.').map(Number);
    const birthdate = new Date(year, month - 1, day); // Les mois en JavaScript sont indexés à partir de 0

    // Obtenir la date actuelle
    const today = new Date();

    // Calculer l'âge
    let age = today.getFullYear() - birthdate.getFullYear();

    // Ajuster l'âge si l'anniversaire n'a pas encore eu lieu cette année
    const hasHadBirthdayThisYear =
        today.getMonth() > birthdate.getMonth() ||
        (today.getMonth() === birthdate.getMonth() && today.getDate() >= birthdate.getDate());

    if (!hasHadBirthdayThisYear) {
        age--;
    }

    return age;
}

const checkInternetConnection = () => {
    // Vérifier l'état initial de la connexion
    if (navigator.onLine) {
        console.log("Connecté à Internet");
    } else {
        console.log("Déconnecté d'Internet");
    }

    // Écouter l'événement 'online' pour détecter la connexion
    window.addEventListener('online', () => {
        console.log("Connecté à Internet");
    });

    // Écouter l'événement 'offline' pour détecter la déconnexion
    window.addEventListener('offline', () => {
        console.log("Déconnecté d'Internet");
    });
}

export {
    calculateAge,
    checkInternetConnection
}