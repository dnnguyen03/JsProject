const fetchUser = async (url) => {
  try {
    const reps = await fetch(url);
    const data = await reps.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default fetchUser;
