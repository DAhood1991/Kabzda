import React from 'react';
import {Accordion} from "./components/Acordion/Acordion";
import {Rating} from "./components/Rating/Rating";


function App() {
    return (
        <div className="App">
            <Accordion titleValue={"THIS my page"} collapsed={true}/>
            <Rating value ={4}/>
            <Accordion titleValue={"THIS my new page"} collapsed={false}/>
            <Rating value ={2}/>
        </div>
    );
}

export default App;
