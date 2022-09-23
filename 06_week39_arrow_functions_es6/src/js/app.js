import "../scss/styles.scss";

function component() {
    const element = document.createElement("div");
    element.innerHTML = "<h1>Trying out setup with Webpack bundler, Bootstrap and Sass.</h1>";
    return element;
}

document.body.appendChild(component());
