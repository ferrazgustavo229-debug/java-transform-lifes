import { templates } from "./templates.js";

export function router() {
    const hash = window.location.hash.replace("#", "");

    const page = hash || "home";
    document.getElementById("app").innerHTML = templates[page];

    if (page === "cadastro") {
        initValidation();
    }
}

window.addEventListener("hashchange", router);
