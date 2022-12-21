import React, {useState} from "react";


export const Rating = () => {
    const [value, setValue] = useState(0)
    const onClickHandler = (value: number) => {
        setValue(value)

    }
    return <span>
            <Star onClickHandler={() => onClickHandler(1)} selected={value > 0}/>
            <Star onClickHandler={() => onClickHandler(2)} selected={value > 1}/>
            <Star onClickHandler={() => onClickHandler(3)} selected={value > 2}/>
            <Star onClickHandler={() => onClickHandler(4)} selected={value > 3}/>
            <Star onClickHandler={() => onClickHandler(5)} selected={value > 4}/>
        </span>

}

type starType = {
    selected: boolean
    onClickHandler: () => void
}
const Star = (props: starType) => {
    return (
        <span onClick={props.onClickHandler}>
           {props.selected ? <span><b> Star</b></span> : <span> Star</span>}
        </span>
    )
}

