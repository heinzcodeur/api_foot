const fs = require('fs');

const data = {
  name: "John Doe",
  age: 30,
  job: "Developer"
};

// Convertir l'objet en chaîne JSON
const jsonData = JSON.stringify(data, null, 2);

// Écrire dans le fichier `data.json`
fs.writeFile('data.json', jsonData, (err) => {
  if (err) {
    console.error('Erreur lors de l\'écriture dans le fichier', err);
  } else {
    console.log('Données JSON écrites avec succès dans data.json');
  }
});
