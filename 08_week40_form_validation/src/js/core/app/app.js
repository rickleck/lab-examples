import { SignUp } from "../../components/signup/signup";

export class App {
    /**
     * @constructor
     */
    constructor() {}
    /**
     *
     */
    run() {
        new SignUp().appendTo(document.querySelector("main"));
    }
}
