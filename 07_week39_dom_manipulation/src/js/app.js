import "../scss/styles.scss";
import { Card } from "./components/card/card";
import { Layout } from "./layout/layout";

const layout = new Layout("Lab 7: DOM Manipulation");

const config = [
    {
        column: 1,
        order: 1,
        button: {
            id: "btn-footer-1",
            text: "Toggle Text",
        },
    },
    {
        column: 1,
        order: 2,
        button: {
            id: "btn-footer-2",
            text: "Toggle Link",
        },
    },
    {
        column: 2,
        order: 3,
        button: {
            id: "btn-footer-3",
            text: "Reset",
        },
    },
];

for (let i = 0; i < 3; i++) {
    layout.getColumn(config[i].column).appendChild(new Card(config[i]).element);
}
