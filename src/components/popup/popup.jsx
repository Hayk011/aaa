import React from "react";
import "./popup.css";


const Popup = (props) =>
{
    const [newSkill, setNewSkill] = React.useState("");
    const [inProgress, setInProgress] = React.useState(0);
    const selectRef = React.useRef();

    React.useEffect(() => {
        let handler = (event) => {
          if (!selectRef.current.contains(event.target)) {
            props.setIsOpen(false);
          }
        };
        document.addEventListener("mousedown", handler);
        return () => {
          document.removeEventListener("mousedown", handler);
        };
      }, [props.isOpen]);

    const addHandler = () => {
        props.setOutComeData({...props.outComeData, [props.name]: [...props.items, newSkill]})
        setNewSkill("")
    }
    const clickHandler = (event, item, index) => {
        if (props.name === "stage") {
            setInProgress(index)
            return;
        }
        if (props.type === "myltiply") {
            props.setOutComeData({...props.outComeData, [props.displayName]: props.displayValue + `, ${item}`})
            return;
        }
        props.selectHandler(event, item)
    }
    return (
        <ul ref = {selectRef} style = {{display: props.isOpen ? "block": "none", height: props.name !== "position" ? "120px" : ""}} className = "popup">
            <li style = {{backgroundColor: "#D8DEE7", borderRadius: "10px", padding: "0px", display: props.name === "position" || props.name === "tech_main" || props.name === "tech_additional" ? "block" : "none"}}>
                <input
                value = {newSkill}
                placeholder = "Add new"
                className = "select-input"
                type = "text"
                onChange = {(event) => setNewSkill(event.target.value)}
                
                />
                <i onClick = {addHandler} className = "icon-plus"></i>
            </li>
            {props.items.map((item, index) => (
                <li onClick = {(event) => clickHandler(event, item, index)} key = {index}> {item}
                {props.name === "stage" && inProgress === index ? <i className = "icon-cancel-circle"/> : null}
                </li>
            ))}
        </ul>
    )
}

export default Popup;