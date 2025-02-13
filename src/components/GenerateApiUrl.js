const GenerateApiUrl = ({apiKey}) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const dateStart = formatDate(today);
    const dateStop = formatDate(tomorrow);

    return `https://api.api-tennis.com/tennis/?method=get_fixtures&APIkey=${apiKey}&date_start=${dateStart}&date_stop=${dateStop}`;
};

export default GenerateApiUrl;
