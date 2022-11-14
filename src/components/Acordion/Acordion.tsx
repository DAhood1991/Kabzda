import React from "react";
import {AcordionTitle} from "./AcordionTitle";
import {AcordionBody} from "./AcordionBody";


export type propsTitleValue={
    titleValue:string
    collapsed:boolean
}
export const Accordion = (props:propsTitleValue) => {
        if(props.collapsed !== true){
            return  <div>
                <AcordionTitle title={props.titleValue}/>
                <AcordionBody/>
            </div>
        } return <div> <AcordionTitle title={props.titleValue}/></div>

}