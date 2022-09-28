export class ENV {
    /** @returns {boolean} */
    static BROWSER = typeof window !== "undefined";
    /** @returns {boolean} */
    static TERMINAL = typeof window === "undefined";
}
