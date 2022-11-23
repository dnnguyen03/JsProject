const container = document.querySelector(".container");
function displayUser(data) {
  container.innerHTML = data
    .map((person) => {
      const { avatar_url, login, html_url } = person;
      return `
    <article class='card'>
      <img src="${avatar_url}" alt='person' />
        <h4>${login}</h4>
      <a href="${html_url}" class="btn">view profile</a>
    </article>
    `;
    })
    .join("");
}

export default displayUser;
