import React from "react";
import Popup from "../popup/popup";
import "./select.css";


const Select = (props) => {
    const [selected, setSelected] = React.useState(props.value[0])
    const [isOpen, setIsOpen] = React.useState(false)
    const selectHandler = (event, name) => {
        setSelected(name)
    }

    return (
        <>
        <span className = "label">{props.label}</span>
        <div className = "custom-select"> {selected}
        <span onClick = {() => setIsOpen(!isOpen)} className = "arrow"></span>
            <Popup
                items = {props.value}
                selectHandler = {selectHandler}
                setOutComeData = {props.setOutComeData}
                outComeData = {props.outComeData}
                name = {props.name}
                isOpen = {isOpen}
                setIsOpen = {setIsOpen}
            />
        </div>
        </>
    )
}
export default Select;