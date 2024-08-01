import axios from 'axios';


    const fetchTournois = (setTournois) => {
        let d = new Date();
        console.log(d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate())
        axios.get('/tournament.json')
            .then((res) => {
               // console.log(Math.floor(Math.random() * res.data.result.length));
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

    const today = () => {
        let d = new Date();
        const year = d.getFullYear();
        const month = d.getMonth();
        const day = d.getDate();

        return year+'-'+month+'-'+day;
    }

    const get_lastName = string => {
        console.log(string)
        let first = string.split('.');
        let second = first[first.length-1];
        if(string === "D. Medvedev"){
            console.log(second.trim());
        }
        return second.trim();
    }

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
    const checkOlympics = (inputString) => {
        const regex = /Olympic/; // Expression régulière pour rechercher le symbole "/"
        return regex.test(inputString); // Vérifie si la chaîne contient "/"
    };

    const reverseDate = (string) => {
        return string.split('-').reverse().join('-');
    }
    
    const shortName = chaine => {
        return chaine.slice(0, 12);
    }

    const createDateFromString = (dateString, timeString) => {
        // Séparer les parties de la date
        const [year, month, day] = dateString.split('-').map(Number);
        // Séparer les parties de l'heure
        const [hour, minute] = timeString.split(':').map(Number);
      
        // Créer l'objet Date (le mois est indexé à partir de 0 en JavaScript)
        const date = new Date(year, month - 1, day, hour, minute);
      
        return date;
      }

      const handleFilterChange = (e,setFilterLive, setFilterAtp, setFilterWta, setPreview) => {
        const { name, checked } = e.target;

        switch (name) {
            case 'live':
                setFilterLive(checked);
                break;
            case 'preview':
                setPreview(checked);
                break;
            case 'atp':
                setFilterAtp(checked);
                break;
            case 'wta':
                setFilterWta(checked);
                break;
            default:
                break;
        }
    };

    const rankingsCombiner = ({ wtaRankings, atpRankings, setRankings, setError }) => {

        let combineRankings = [];
        console.log(combineRankings.length);
            try {
                if (Array.isArray(wtaRankings) && Array.isArray(atpRankings)) {
                    const combinedRankings = [...wtaRankings, ...atpRankings];
                    console.log('combinedRankings length:', combinedRankings.length); // Log the length here
                    
                    setRankings(combinedRankings);
                } else {
                    alert('tito')
                    setError('Error: Invalid data format for rankings');
                }
            } catch (error) {
                setError('Error combining rankings:', error);
            }
        

        return null;
    }

export {
    fetchTournois,
    checkBackSlash,
    reverseDate,
    checkItf,
    checkGirlsBoys,
    checkAtp,
    checkWta,
    checkOlympics,
    today,
    createDateFromString,
    handleFilterChange,
    shortName,
    rankingsCombiner, 
    get_lastName
}