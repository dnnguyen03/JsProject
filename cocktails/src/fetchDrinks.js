import { hideLoading } from "./loader.js";

const fetchDrinks = async (url) => {
  try {
    const reps = await fetch(url);
    const data = await reps.json();
    hideLoading();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default fetchDrinks;
