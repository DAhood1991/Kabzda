import React from "react";

export type ratingType ={
    value:1|2|3|4|5|0

}
export const Rating = (props:ratingType) => {
    if( props.value === 1){
        return <span>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </span>
    }
    if( props.value === 2){
        return <span>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </span>
    }
    if( props.value === 3){
        return <span>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </span>
    }
    if( props.value === 4){
        return <span>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
        </span>
    }
    if( props.value === 5){
        return <span>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
        </span>
    }
    return ( <span>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={true}/>
        </span>

    )
}

type starType ={
    selected:boolean
}
const Star = (props: starType) => {
    if (props.selected === true) {
        return <span><b> Star</b>
            </span>
            }else {return <span> Star</span>}}