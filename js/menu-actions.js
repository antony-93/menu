import "./menu-filter";
import "./menu-navigation";

const onResizeMenuActions = (entries) => {
  const height = entries[0].target.offsetHeight;
  document.documentElement.style.setProperty("--actions-height", `${height}px`);
};

const observer = new ResizeObserver(onResizeMenuActions);

const actionsEl = document.getElementById("menu-actions");
observer.observe(actionsEl);
