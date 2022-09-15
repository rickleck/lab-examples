import "./templates.js";

//Check active page
const activePage = (url) => {
    return window.location.href.includes(url);
};

//Create navigation data
const navData = {
    pages: [
        {
            name: "Home",
            url: "index.html",
            active: activePage("index.html"),
        },
        {
            name: "About Us",
            url: "about.html",
            active: activePage("about.html"),
        },
        {
            name: "Contact",
            url: "contact.html",
            active: activePage("contact.html"),
        },
    ],
};

//Render navigation template
try {
    const template = Handlebars.templates.navigation(navData);
    document.querySelector("header").insertAdjacentHTML("afterbegin", template);
} catch (error) {
    console.log("Could not add navigation template.");
    console.log(error);
}
