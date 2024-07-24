import axios from 'axios';



    const fetchTournois = (setTournois) => {
        axios.get('/tournament.json')
            .then((res) => {
                console.log(Math.floor(Math.random() * res.data.result.length));
                setTournois(res.data)
            })
            .catch(error => {
                console.warn(error)
            })
    }

    const checkBackSlash = (inputString) => {
        const regex = /\//; // Expression régulière pour rechercher le symbole "/"
        return regex.test(inputString); // Vérifie si la chaîne contient "/"
    };

    const reverseDate = (string) => {
        return string.split('-').reverse().join('-');
    }
    

export {
    fetchTournois,
    checkBackSlash,
    reverseDate
}