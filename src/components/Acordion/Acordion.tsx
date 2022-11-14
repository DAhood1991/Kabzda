import React from "react";
import {AcordionTitle} from "./AcordionTitle";
import {AcordionBody} from "./AcordionBody";


export type propsTitle={
    title:string
}
export const Accordion = (props:propsTitle) => {
    return (
        <div>
            <AcordionTitle title={props.title}/>
            <AcordionBody/>
        </div>
    )
}