const URL = "https://randomuser.me/api/";
const getUser = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  const person = data.results[0];
  const { age } = person.dob;
  const { email, phone } = person;
  const { first, last } = person.name;
  const { large: img } = person.picture;
  const { password } = person.login;
  const { number, name } = person.location.street;
  return {
    phone,
    email,
    img,
    street: `${number} ${name}`,
    password,
    name: `${first} ${last}`,
    age,
  };
};

export default getUser;
