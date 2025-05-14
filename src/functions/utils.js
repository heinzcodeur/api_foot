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
        let first = string.split('.');
        let second = first[first.length-1];
        if(string === "D. Medvedev"){
            console.log(second.trim());
        }
        return second.trim();
    }

    const calculateAge = (birthdateString) => {
        // Vérifier si le paramètre est valide
        if (!birthdateString || typeof birthdateString !== "string" || birthdateString.trim() === "") {
            return 
            throw new Error("La date de naissance est invalide.");
        }
    
        // Convertir la date de naissance de la chaîne de texte en un objet Date
        const [day, month, year] = birthdateString.split('.').map(Number);
    
        // Vérifier que les valeurs sont des nombres valides
        if (isNaN(day) || isNaN(month) || isNaN(year)) {
            throw new Error("Format de date invalide. Utilisez JJ.MM.AAAA.");
        }
    
        const birthdate = new Date(year, month - 1, day); // Les mois en JavaScript sont indexés à partir de 0
    
        // Vérifier que la date est valide
        if (birthdate.toString() === "Invalid Date") {
            throw new Error("Date invalide.");
        }
    
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
    };
    
    // Exemple d'utilisation
    // try {
    //     console.log(calculateAge("29.02.2000")); // Test avec une date valide
    //     console.log(calculateAge("")); // Test avec une chaîne vide
    //     console.log(calculateAge(null)); // Test avec null
    // } catch (error) {
    //     console.error(error.message);
    // }

    // const checkItf = (inputString) => {
    //     const regex = /Itf/; // Expression régulière pour rechercher le symbole "/"
    //     //console.log(regex.test(inputString))
    //     return regex.test(inputString); // Vérifie si la chaîne contient "/"
    // };

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
    const checkItf = (inputString) => {
        const regex = /Itf/; // Expression régulière pour rechercher le symbole "/"
        return regex.test(inputString); // Vérifie si la chaîne contient "/"
    };
    const checkChallenger = (inputString) => {
        const regex = /Challenger/; // Expression régulière pour rechercher le symbole "/"
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
        return chaine.slice(0, 10);
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

      const formatDateToFrench = (dateString) => {
        // Créer un objet Date à partir de la chaîne ISO
        const date = new Date(dateString);
    
        // Utiliser Intl.DateTimeFormat pour formater la date en français
        const options = {
            weekday: 'long',    // Affiche le jour de la semaine (ex: dimanche)
            year: 'numeric',    // Affiche l'année (ex: 2024)
            month: 'long',      // Affiche le mois en toutes lettres (ex: août)
            day: 'numeric',     // Affiche le jour du mois (ex: 4)
            hour: '2-digit',    // Affiche l'heure (ex: 09)
            minute: '2-digit',  // Affiche les minutes (ex: 00)
            second: '2-digit',  // Affiche les secondes (ex: 00)
            timeZoneName: 'short' // Affiche le fuseau horaire (ex: GMT+2)
        };
    
        const formatter = new Intl.DateTimeFormat('fr-FR', options);
    
        return formatter.format(date);
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

    const apiKey = process.env.REACT_APP_TENNIS_KEY;

    // Fonction pour récupérer les classements ATP et WTA
    const fetchRankings = async () => {
      const urls = [
        `https://api.api-tennis.com/tennis/?method=get_standings&event_type=WTA&APIkey=${apiKey}`,
        `https://api.api-tennis.com/tennis/?method=get_standings&event_type=ATP&APIkey=${apiKey}`,
      ];
    
      try {
        const [wtaResponse, atpResponse] = await Promise.all(urls.map(url => axios.get(url)));
    
        const wtaData = wtaResponse.data.error ? { error: wtaResponse.data.error } : wtaResponse.data.result;
        const atpData = atpResponse.data.error ? { error: atpResponse.data.error } : atpResponse.data.result;
    
        if (wtaData.error || atpData.error) {
          return { error: wtaData.error || atpData.error };
        }
    
        return { rankings: [...wtaData, ...atpData] };
      } catch (error) {
        console.error("Erreur lors de la récupération des classements:", error);
        return { error: error.message || "Une erreur inconnue est survenue" };
      }
    };

export {
    fetchRankings,
    fetchTournois,
    checkBackSlash,
    reverseDate,
    checkItf,
    checkGirlsBoys,
    checkAtp,
    checkWta,
    checkChallenger,
    checkOlympics,
    today,
    createDateFromString,
    handleFilterChange,
    shortName,
    rankingsCombiner, 
    get_lastName,
    formatDateToFrench
}