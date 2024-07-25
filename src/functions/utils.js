import axios from 'axios';



    const fetchTournois = (setTournois) => {
        let d = new Date();
        console.log(d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate())
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
    
    const today = () => {
        let d = new Date();
        const year = d.getFullYear();
        const month = d.getMonth();
        const day = d.getDate();

        return year+'-'+month+'-'+day;
    }

    // const handleDebuted = (e) => {
    //     console.log(e)
    //     // setIsDebuted(e.target.checked);
    // };


    const checkItf = (inputString) => {
        const regex = /Itf/; // Expression régulière pour rechercher le symbole "/"
        //console.log(regex.test(inputString))
        return regex.test(inputString); // Vérifie si la chaîne contient "/"
    };

    const checkGirlsBoys = string => {
        // Expression régulière pour rechercher "Girls" ou "Boys"
        const regex = /Girls|Boys/;
        // Vérifie si la chaîne contient "Girls" ou "Boys"
        return regex.test(string);
    };
  

    const checkAtp = (inputString) => {
        const regex = /Atp/; // Expression régulière pour rechercher le symbole "/"
        return regex.test(inputString); // Vérifie si la chaîne contient "/"
    };
    const checkWta = (inputString) => {
        const regex = /Wta/; // Expression régulière pour rechercher le symbole "/"
        return regex.test(inputString); // Vérifie si la chaîne contient "/"
    };

export {
    fetchTournois,
    checkBackSlash,
    reverseDate,
    checkItf,
    checkGirlsBoys,
    checkAtp,
    checkWta,
    today
}