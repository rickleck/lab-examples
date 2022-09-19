function log(msg) {
    console.log(msg);
    if (isBrowser) {
        document.querySelector("#console").innerHTML +=
            "D:&#92;Workspace&#92;labs&#92;04_week38_basics_js> " + msg + "<br>";
    }
}

//Check if running in node or browser
const isBrowser = typeof window !== "undefined";
const randomNum = () => Math.floor(Math.random() * 100);

let num1 = randomNum();
let num2 = randomNum();
let person = {
    fname: "Sven",
    lname: "Svensson",
    age: randomNum(),
};

//Log to console/browser
if (isBrowser) log("node main.js");
log("*** Lab 4 Week 38: Basics - JavaScript ***");
log(num1 + " plus " + num2 + " är: " + (num1 + num2));
log(num1 + " minus " + num2 + " är: " + (num1 - num2));

log(num1 + " gånger " + num2 + " är: " + num1 * num2);

log(
    "Hej, mitt namn är " +
        person.fname +
        " " +
        person.lname +
        " och jag är " +
        person.age +
        " år gammal."
);
log("*** The End! *** ");
if (isBrowser) log(" <span class='blink'>|</span>");
