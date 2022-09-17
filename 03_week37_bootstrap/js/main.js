/*
 * Simple script for rendering Handlebars templates
 */

import "./templates.js";

const isActivePage = (page) => document.body.attributes["data-page"].value == page;

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

document.querySelector("header").innerHTML = Handlebars.templates.navigation(navData);

if (isActivePage("about")) {
    //Create dummy data for staff members
    const staffData = { staff: [] };
    for (let i = 0; i < 10; i++) {
        staffData.staff.push({
            img: "assets/images/staff-member.png",
            name: "Firstname Lastname",
            title: "Job title"
        });
    }
    document.querySelector("#staff").innerHTML = Handlebars.templates.staff(staffData);
}
