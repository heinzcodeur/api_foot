// fetchRankings.js

export const fetchRankings = async ('atpRanking.json') => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.rankings[Math.ceil(Math.random()*data.rankings.length)];
    } catch (error) {
      console.error("Error fetching data: ", error);
      throw error; // Rethrow the error so the calling function can handle it if needed
    }
  };
  