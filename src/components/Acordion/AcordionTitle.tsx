import React from "react";

export type propsTitle={
    title:string
    onClickCollapsed:()=>void
}

export const AcordionTitle = (props:propsTitle) => {
    return (
        <div onClick={props.onClickCollapsed}>{props.title}</div>
    )
}