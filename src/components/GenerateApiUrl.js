// generateApiUrl.js

const GenerateApiUrl = () => {
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

    // const apiKey = '7b2b2c63e9ff413388c8ca25249f24e4efe31b3f38c5cd3e432ea373cd3e710a';
    const apiKey = 'd1d5e28f7576f2ba4c75e6ed53ddfd7e01f162f10b6b4b25bad23e0104255a06';

    // Construction de l'URL avec des backticks pour utiliser l'interpolation de chaîne
    const url = `https://api.api-tennis.com/tennis/?method=get_fixtures&APIkey=${apiKey}&date_start=${dateStart}&date_stop=${dateStop}`;

    console.log(url);

    return url;
};

export default GenerateApiUrl;
