import { urlUser } from "./src/api.js";
import displayButton from "./src/displayButton.js";
import displayUser from "./src/displayUser.js";
import fetchUser from "./src/fetchUser.js";
const title = document.querySelector("h1");
fetchUser(urlUser).then((data) => {
  displayUser(data);
  title.textContent = "pagination";
  displayButton();
});
