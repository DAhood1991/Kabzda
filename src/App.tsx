import React from 'react';
import {Accordion} from "./components/Acordion/Acordion";
import {Rating} from "./components/Rating/Rating";


function App() {
    return (
        <div className="App">
            <Accordion title={"THIS my page"}/>
            <Rating value ={4}/>
            <Accordion title={"THIS my new page"}/>
            <Rating value ={6}/>
        </div>
    );
}

export default App;
