// generateApiUrl.js

const JoUrl = () => {
    const today = new Date();
    const tomorrow = new Date(today);

    // Calculer le lendemain
    tomorrow.setDate(today.getDate() + 1);

    // Convertir les dates au format 'YYYY-MM-DD'
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Ajoute un 0 devant si besoin
        const day = String(date.getDate()).padStart(2, '0'); // Ajoute un 0 devant si besoin
        return `${year}-${month}-${day}`;
    };

    // Dates formatées
    const dateStart = formatDate(today);
    const dateStop = formatDate(tomorrow);


    // Construction de l'URL avec des backticks pour utiliser l'interpolation de chaîne
    // const url = `https://api.api-tennis.com/tennis/?method=get_fixtures&APIkey=${apiKey}&date_start=${dateStart}&date_stop=${dateStop}`;
const url = `https://sph-s-api.olympics.com/summer/schedules/api/FRA/schedule/day/${dateStart}`;
    //console.log(url);

    return url;
};

export default JoUrl;
