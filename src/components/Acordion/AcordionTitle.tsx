import React from "react";

export type propsTitle={
    title:string
}

export const AcordionTitle = (props:propsTitle) => {
    return (
        <div>{props.title}</div>
    )
}