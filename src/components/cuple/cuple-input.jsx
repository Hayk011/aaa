import React from "react";
import Input from "../input/input";


const CupleImput = (props) => {
    return (
        <>
            <label> {props.label1}
                <Input
                    name = {props.name1}
                    value = {props.value1}
                    placeholder = {props.placeholder1}
                    label = {props.label1}
                    type = {props.type}
                    isCurrently = {props.isCurrently}
                    inputsHandler = {props.inputsHandler}
                />
            </label>
            <label> {props.label2}
                <Input
                    name = {props.name2}
                    value = {props.value2}
                    placeholder = {props.placeholder2}
                    label = {props.label2}
                    type = {props.type}
                    isCurrently = {props.isCurrently}
                    inputsHandler = {props.inputsHandler}
                />
            </label>
        </>
    )
}

export default CupleImput;