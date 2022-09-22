export class Modes {
    /** @type {object} */
    static MODES = [
        {
            id: "ps",
            path: {
                4: 'PS D:&#92;Workspace&#92;labs&#92;04_week38_basics_js> <span class="ps-node">node</span> js/terminal/app',
                5: 'PS D:&#92;Workspace&#92;labs&#92;05_week38_arrays_js> <span class="ps-node">node</span> js/terminal/app',
            },
            param: ' <span class="ps-param">--lab</span> ',
        },
        {
            id: "gb",
            path: {
                4: '<span class="gb-user">user@computer</span> <span class="gb-version">MINGW64</span> <span class="gb-path">/d/Workspace/labs/04_week38_basics_js</span> <span class="gb-module">(main)</span><br>$ node js/terminal/app',
                5: '<span class="gb-user">user@computer</span> <span class="gb-version">MINGW64</span> <span class="gb-path">/d/Workspace/labs/05_week38_arrays_js</span> <span class="gb-module">(main)</span><br>$ node js/terminal/app',
            },
            param: " --lab ",
        },
    ];
    /** @type {string} */
    static MODES_DEFAULT_ID = "gb";
    /**
     * @param {string} id
     * @returns {object} Object
     */
    static getMode(id) {
        return Modes.MODES.find((obj) => {
            return obj.id === id;
        });
    }
}
