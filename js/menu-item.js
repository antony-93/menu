import { moneyFormat } from "./utils/moneyFormat";

const createDescription = (description) => {
  const paragraphEl = document.createElement("p");
  paragraphEl.textContent = description;
  return paragraphEl;
};

export const createMenuItem = (item) => {
  const articleEl = document.createElement("article");

  articleEl.classList.add("menu-item");
  articleEl.innerHTML = `
    <header>
      <h4>${item.name}</h4>

      <div class="division"></div>
      
      <strong>
        <data value="${item.price}">
          ${moneyFormat(item.price)}
        </data>
      </strong>
    </header>
  `;

  if (item.description) {
    articleEl.appendChild(createDescription(item.description));
  }

  return articleEl;
};
