const base_url = "https://api.rawg.io/api/";
// const api_key = process.env.REACT_APP_API_URL;

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate() + 1;
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_games = `${base_url}games?key=613dfaaa9a2244a3bd36740b8bfb57e0&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `${base_url}games?key=613dfaaa9a2244a3bd36740b8bfb57e0&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `${base_url}games?key=613dfaaa9a2244a3bd36740b8bfb57e0&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => popular_games;
export const upcomingGamesURL = () => upcoming_games;
export const newGamesURL = () => new_games;
