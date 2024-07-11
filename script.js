// Resource Toggle
let subMenu = document.getElementById("subMenu");

function toggleMenu() {
  subMenu.classList.toggle("open-box");
}

// Search bar
document
  .getElementById("btn-search-bar")
  .addEventListener("click", function () {
    document.querySelector(".search-outer").classList.add("active");
    document.querySelector(".overlay").classList.add("active");
  });

document
  .getElementById("btn-close-search")
  .addEventListener("click", function () {
    document.querySelector(".search-outer").classList.remove("active");
    document.querySelector(".overlay").classList.remove("active");
  });

document.querySelector(".overlay").addEventListener("click", function () {
  document.querySelector(".search-outer").classList.remove("active");
  document.querySelector(".overlay").classList.remove("active");
});

// Fetching api
async function fetchAndDisplayNews() {
  const response = await fetch(
    "https://raw.githubusercontent.com/younginnovations/internship-challenges/master/front-end/news_list.json"
  );
  const data = await response.json();

  const newsContainer = document.querySelector(".resources-card-outer");
  newsContainer.innerHTML = data.news
    .map(
      (news) => `
                <div class="resources-card">
                <div class="resource-icon">
                    <img src="${news.image}" alt="${news.title}">
                </div>
                <h3 class="title">${news.title}</h3>
                <p class="paragraph">${news.content}</p>
                <div class="news-details">
                    <p><strong>Date:</strong> ${news.date}</p>
                    <p><strong>Author:</strong> ${news.author}</p>
                    <p><strong>Category:</strong> ${news.category}</p>
                </div>
                <div class="learn-more">
                    <p>Learn more</p>
                    <img src="./Assets/Campaigns/Outline.svg" alt="Arrow_learn_more">
                </div>
                </div>
    `
    )
    .join("");
}

fetchAndDisplayNews();
