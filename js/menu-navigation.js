import { menuSections } from "./const/menu";
import { slugify } from "./utils/slugify";

let activeLinkEl;

const setActiveLink = (linkEl) => {
  if (linkEl === activeLinkEl) return;

  if (activeLinkEl) activeLinkEl.classList.remove("active");

  activeLinkEl = linkEl;
  activeLinkEl.classList.add("active");
  activeLinkEl.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "center",
  });
};

const onClickLink = (event) => {
  const linkEl = event.target;
  const sectionName = linkEl.dataset.sectionName;

  if (!document.getElementById(sectionName)) {
    event.preventDefault();
    return;
  }

  setActiveLink(linkEl);
};

const createLink = (section) => {
  const linkEl = document.createElement("a");
  const sectionName = slugify(section.name);

  linkEl.href = "#" + sectionName;
  linkEl.dataset.sectionName = sectionName;
  linkEl.textContent = `${section.icon} ${section.name}`;

  linkEl.addEventListener("click", onClickLink);

  return linkEl;
};

const linksEl = document.createDocumentFragment();

for (let idx = 0; idx < menuSections.length; idx++) {
  const linkEl = createLink(menuSections[idx]);

  if (idx === 0) setActiveLink(linkEl);

  linksEl.appendChild(linkEl);
}

document.getElementById("menu-navigation-links-list").appendChild(linksEl);
