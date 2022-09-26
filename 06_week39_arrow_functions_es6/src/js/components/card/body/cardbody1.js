import { CardBody } from "./cardbody";

export class CardBody1 extends CardBody {
    /**
     *
     */
    drawState1() {
        this.states[0].element.innerHTML =
            '<p>const hello = function() {<br>&emsp;console.log("Hello world");<br>};</p><p>hello();</p>';
    }
    /**
     *
     */
    drawState2() {
        this.states[1].element.innerHTML =
            '<p>const hello = () => console.log("Hello world");</p><p>hello();</p>';
    }
    /**
     *
     */
    runState1() {
        const hello = function () {
            console.log("Hello world");
        };
        console.log("*** Log from Function 1 original format: ***");
        hello();
    }
    /**
     *
     */
    runState2() {
        const hello = () => console.log("Hello world");
        console.log("*** Log from Function 1 arrow foirmat: ***");
        hello();
    }
}
