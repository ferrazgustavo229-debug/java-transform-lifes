import { router } from "./router.js";

window.onload = () => {
    router();
};

document.getElementById("darkBtn").onclick = () => {
  document.body.classList.toggle("darkmode");
};

document.getElementById("contrastBtn").onclick = () => {
  document.body.classList.toggle("high-contrast");
};
