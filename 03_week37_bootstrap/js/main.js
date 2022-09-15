//Render navigation
const template = Handlebars.templates.navigation();
try {
    document.querySelector("header").insertAdjacentHTML("afterbegin", template);
} catch (error) {
    console.log("Could not add navigation template.");
    console.log(error);
}