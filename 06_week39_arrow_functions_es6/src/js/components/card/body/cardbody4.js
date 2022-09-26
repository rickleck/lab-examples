import { CardBody } from "./cardbody";

export class CardBody4 extends CardBody {
    /**
     *
     */
    drawState1() {
        this.states[0].element.innerHTML =
            "<p>const tip = function(sum, percent) {<br>&emsp;let total = sum + sum * percent;<br>&emsp;return total;<br>};</p><p>tip(200, 0.2);</p>";
    }
    /**
     *
     */
    drawState2() {
        this.states[1].element.innerHTML =
            "<p>const tip = (sum, percent) => sum + sum * percent;</p><p><p>tip(200, 0.2);</p>";
    }
    /**
     *
     */
    runState1() {
        const tip = function (sum, percent) {
            let total = sum + sum * percent;
            return total;
        };
        console.log("*** Log from Function 4 original format: ***");
        console.log(tip(200, 0.2));
    }
    /**
     *
     */
    runState2() {
        const tip = (sum, percent) => sum + sum * percent;
        console.log("*** Log from Function 4 arrow format: ***");
        console.log(tip(200, 0.2));
    }
}
