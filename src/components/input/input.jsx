import React from "react";
import "./input.css"

const Input = (props) => {
    return (
            <input
                style = {{width: props.isCurrently ? "145px" : "", marginLeft: props.name === "interview_time" ? "10px" : ""}}
                placeholder = {props.placeholder}
                name = {props.name}
                type = {props.type}
                value = {props.value}
                onChange = {(event) => props.inputsHandler(event)}
                className="custom-input"
            />
    )
}

export default Input;