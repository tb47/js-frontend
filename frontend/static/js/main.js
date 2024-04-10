import { router, navigateTo } from "./router/router.js";

document.addEventListener("DOMContentLoaded", (e) => {
    const hrefs = document.querySelectorAll(".navLink");
    for (let i = 0; i < hrefs.length; i++) {
        hrefs[i].addEventListener("click", e => {
            navigateTo(e.target.dataset.href);
        });
    };
    router();
});

document.querySelector("#navAuth").addEventListener("click", async() => {
    import(/* webpackChunkName: "authModal" */ "./auth/authModal.js").then(module => {
        module.default(); 
    });
});
