import "./templates.js";

//Check active page
const isActivePage = (page) => {
    return document.body.attributes["data-page"].value == page;
};

//Create navigation data
const navData = {
    pages: [
        {
            name: "Home",
            url: "index.html",
            active: isActivePage("index"),
        },
        {
            name: "About Us",
            url: "about.html",
            active: isActivePage("about"),
        },
        {
            name: "Contact",
            url: "contact.html",
            active: isActivePage("contact"),
        },
    ],
};

//Render navigation template
try {
    const template = Handlebars.templates.navigation(navData);
    document.body.insertAdjacentHTML("afterbegin", template);
} catch (error) {
    console.log("Could not add navigation template.");
    console.log(error);
}
