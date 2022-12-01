import React, {useState} from "react";
import {AcordionTitle} from "./AcordionTitle";
import {AcordionBody} from "./AcordionBody";


export type propsTitleValue={
    titleValue:string
}
export const Accordion = (props:propsTitleValue) => {
    const [collapsed,setcollapsed] =useState<boolean>()

            return  <div>  <AcordionTitle title={props.titleValue}/>
                <button onClick={()=>{setcollapsed(!collapsed)}}> +</button>
                {!collapsed && <AcordionBody/> }</div>
}