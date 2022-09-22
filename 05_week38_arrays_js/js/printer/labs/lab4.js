import { Printer } from "../Printer.js";

export class Lab4 extends Printer {
    /**
     * @constructor
     */
    constructor() {
        super(4);
    }
    /**
     *
     */
    print() {
        const randomNum = () => Math.floor(Math.random() * 100);
        let num1 = randomNum();
        let num2 = randomNum();
        let person = {
            fname: "Sven",
            lname: "Svensson",
            age: randomNum(),
        };

        this.log(this.lineBreak + "*** Lab 4 Week 38: Basics - JavaScript ***" + this.lineBreak);
        this.log(num1 + " plus " + num2 + " är: " + (num1 + num2));
        this.log(num1 + " minus " + num2 + " är: " + (num1 - num2));
        this.log(num1 + " gånger " + num2 + " är: " + num1 * num2);
        this.log(
            this.lineBreak +
                "Hej, mitt namn är " +
                person.fname +
                " " +
                person.lname +
                " och jag är " +
                person.age +
                " år gammal."
        );
        this.log(this.lineBreak + "*** The End ***" + this.lineBreak);
    }
}
