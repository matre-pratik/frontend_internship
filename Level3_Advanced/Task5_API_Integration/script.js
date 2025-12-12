const baseURL = "https://randomuser.me/api/?results=6";

const loadBtn = document.querySelector(".btn");
const userContainer = document.querySelector(".user-container");

//fetch data
async function fetchUsers() {
  try {
    const response = await fetch(baseURL);
    const data = await response.json();
    const users = data.results;

    // Clear old data
    userContainer.innerHTML = "";

    users.forEach(user => {
      const card = document.createElement("div");
      card.classList.add("user-card");

      card.innerHTML = `
        <img src="${user.picture.medium}" alt="User Image">
        <h3>${user.name.first} ${user.name.last}</h3>
        <p><b>Country:</b> ${user.location.country}</p>
        <p><b>Email:</b> ${user.email}</p>
      `;

      userContainer.appendChild(card);
    });
  } catch (error) {
    userContainer.innerHTML = "<p style='color:red;'>Failed to load data. Please try again later.</p>";
    console.error("Error fetching users:", error);
  }
}

loadBtn.addEventListener("click", fetchUsers);
