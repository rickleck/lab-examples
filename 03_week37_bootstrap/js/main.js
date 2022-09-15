import "./templates.js"

//Render navigation
try {
    const template = Handlebars.templates.navigation();
    document.querySelector("header").insertAdjacentHTML("afterbegin", template);
} catch (error) {
    console.log("Could not add navigation template.");
    console.log(error);
}