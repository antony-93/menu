import { moneyFormat } from "./utils/moneyFormat";

const createMenuItemDescription = (description) => {
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

            <data value="${item.price}">
                <strong>${moneyFormat(item.price)}</strong>
            </data>
        </header>
    `;

  if (item.description) {
    articleEl.appendChild(createMenuItemDescription(item.description));
  }

  return articleEl;
};
