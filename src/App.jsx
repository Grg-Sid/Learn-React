import { createRoot } from "react-dom";

import Pet from "./Pet";

const App = () => {
    return (
        <div>
            <h1>Adoption</h1>
            <Pet name = "Bilo" animal = "dog" breed="shephad" />
            <Pet name = "Bage" animal = "cat" breed="orange" />
            <Pet name = "Bileya" animal = "dog" breed="mixed" />
        </div>
    )
}

const container = document.getElementById("root");
const root = createRoot(container)
root.render(<App />)