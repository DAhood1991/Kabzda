import React from "react";

export type RatingType ={
    value:any
}
export const Rating = (props:RatingType) => {
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
const Star = (props: any) => {
    if (props.selected === true) {
        return <span><b> Star</b>
            </span>
            }else {return <span> Star</span>}}