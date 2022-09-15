//Render navigation
const template = Handlebars.templates.navigation();
try {
    document.querySelector("header").insertAdjacentHTML("afterbegin", template);
} catch (error) {
    console.log("Could not add navigation template.");
    console.log(error);
}

//Bootstrap include
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";