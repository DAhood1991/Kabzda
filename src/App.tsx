import React from 'react';
import {Accordion} from "./components/Acordion/Acordion";
import {Rating} from "./components/Rating/Rating";
import {Switch} from "./components/OnOff/Switch";


function App() {
    return (
        <div className="App">
            <Accordion titleValue={"THIS my page"} />
            <Rating/>
            <Accordion titleValue={"THIS my new page"} />
            <Rating/>
            <Switch />
            <Switch />

        </div>
    );
}
export default App;

