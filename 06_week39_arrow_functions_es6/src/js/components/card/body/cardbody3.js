import { CardBody } from "./cardbody";

export class CardBody3 extends CardBody {
    /**
     *
     */
    drawState1() {
        this.states[0].element.innerHTML =
            "<p>const calc = function(numberOne, numberTwo) {<br>&emsp;return numberOne + numberTwo;<br>};</p><p>calc(1, 2);</p>";
    }
    /**
     *
     */
    drawState2() {
        this.states[1].element.innerHTML =
            "<p>const calc = (numberOne, numberTwo) => numberOne + numberTwo;</p><p><p>calc(1, 2);</p>";
    }
    /**
     *
     */
    runState1() {
        const calc = function (numberOne, numberTwo) {
            return numberOne + numberTwo;
        };
        console.log("*** Log from Function 3 original format: ***");
        console.log(calc(1, 2));
    }
    /**
     *
     */
    runState2() {
        const calc = (numberOne, numberTwo) => numberOne + numberTwo;
        console.log("*** Log from Function 3 arrow foirmat: ***");
        console.log(calc(1, 2));
    }
}
