import { Printer } from "./printer.js";

export class PrinterLab4 extends Printer {
    constructor() {
        super();
    }

    _print() {
        const randomNum = () => Math.floor(Math.random() * 100);
        let num1 = randomNum();
        let num2 = randomNum();
        let person = {
            fname: "Sven",
            lname: "Svensson",
            age: randomNum(),
        };

        this._log("*** Lab 4 Week 38: Basics - JavaScript ***");
        this._log(num1 + " plus " + num2 + " är: " + (num1 + num2));
        this._log(num1 + " minus " + num2 + " är: " + (num1 - num2));
        this._log(num1 + " gånger " + num2 + " är: " + num1 * num2);
        this._log(
            "Hej, mitt namn är " +
                person.fname +
                " " +
                person.lname +
                " och jag är " +
                person.age +
                " år gammal."
        );
        this._log("*** The End ***");
    }
}
