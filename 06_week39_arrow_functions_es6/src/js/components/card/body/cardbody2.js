import { CardBody } from "./cardbody";

export class CardBody2 extends CardBody {
    /**
     *
     */
    drawState1() {
        this.states[0].element.innerHTML =
            '<p>const greet = function(name) {<br>&emsp;console.log("Hej " + name + " hur mår du?");<br>};</p><p>greet("Johannes");</p>';
    }
    /**
     *
     */
    drawState2() {
        this.states[1].element.innerHTML =
            '<p>const greet = (name) => console.log("Hej " + name + " hur mår du?");</p><p>greet("Johannes");</p>';
    }
    /**
     *
     */
    runState1() {
        const greet = function (name) {
            console.log("Hej " + name + " hur mår du?");
        };
        console.log("*** Log from Function 2 original format: ***");
        greet("Johannes");
    }
    /**
     *
     */
    runState2() {
        const greet = (name) => console.log("Hej " + name + " hur mår du?");
        console.log("*** Log from Function 2 arrow format: ***");
        greet("Johannes");
    }
}
