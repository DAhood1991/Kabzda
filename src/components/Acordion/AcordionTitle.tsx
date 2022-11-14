import React from "react";

export type ptopsTitle={
    title:string
}

export const AcordionTitle = (props:ptopsTitle) => {
    return (
        <div>{props.title}</div>
    )
}