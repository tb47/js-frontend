const routes = ["", "posts", "shop", "about"];

// ----------------------------------------------------------

const getComponentBasedHtml = async () => {
    let html = null;
    if (routes.includes(location.pathname.split("/")[1])) {
        html = location.pathname.split("/")[1] !== "" ? await import(`../components/${location.pathname.split("/")[1]}/${location.pathname.split("/")[1]}.js`) : await import("../components/index/index.js");
    } else {
        html = await import("../components/404/404.js");
    };
    return html.Html;
};

const getComponentBasedJs = async () => {
    let componentBasedJs = null;
    if (routes.includes(location.pathname.split("/")[1])) {
        componentBasedJs = location.pathname.split("/")[1] !== "" ? await import(`../components/${location.pathname.split("/")[1]}/${location.pathname.split("/")[1]}F.js`) : await import("../components/index/indexF.js");
    } else {
        componentBasedJs = await import("../components/404/404F.js");
    };
    return componentBasedJs.Js();
};

// ----------------------------------------------------------

export const router = async () => {
    document.querySelector("#app").innerHTML = await getComponentBasedHtml();
    getComponentBasedJs();
};

export const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

