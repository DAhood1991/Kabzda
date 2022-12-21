import React, {useState} from "react";
import {AcordionTitle} from "./AcordionTitle";
import {AcordionBody} from "./AcordionBody";


export type propsTitleValue={
    titleValue:string
}
export const Accordion = (props:propsTitleValue) => {
    const [collapsed,setcollapsed] =useState<boolean>(true)
    const onClickCollapsed = () => {
      setcollapsed(!collapsed)
    }

            return  <div>  <AcordionTitle onClickCollapsed={onClickCollapsed} title={props.titleValue}/>
                {/*<button onClick={onClickCollapsed}>collapsed</button>*/}
                {!collapsed && <AcordionBody/> }</div>
}