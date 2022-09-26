import "../scss/styles.scss";
import { Card } from "./components/card/card";
import { Layout } from "./layout/layout";

const layout = new Layout();

for (let i = 1; i <= 4; i++) {
    layout.column.appendChild(new Card({ order: i }).element);
}
