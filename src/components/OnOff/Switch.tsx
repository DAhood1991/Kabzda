import React, {useState} from "react";
import s from './Switch.module.css'




export const Switch = () => {
    const [value,setValue]=useState(false)

    const onStyle = {
        width: '20px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: value ? "green":"white"

    }
    const offStyle = {
        width: '20px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: value ? "white":"red",
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor:value ? "green":"red"
    }
    return <div>
        <div style={onStyle} onClick={()=>{setValue(true)}}>on</div>
        <div style={offStyle} onClick={()=>{setValue(false)}}>off</div>
        <div style={indicatorStyle} onClick={()=>{}}></div>
    </div>

}