import React from "react";
import Popup from "../popup/popup";
import "./multiplySelect.css";


const MultiplySelect = (props) => {
    const [isOpen1, setIsOpen1] = React.useState(false);
    const [isOpen2, setIsOpen2] = React.useState(false)
    return (
        <>
            <div className = "multipl-select">
            <span className = "label multiply-lable">{props.label1}</span>
               {props.displayValue1 !== "" ? props.displayValue1 : "Example"}
               {console.log(props)}
               <span onClick = {() => setIsOpen1(!isOpen1)} className = "arrow"/>
               <Popup
               name = {props.name1}
               isOpen = {isOpen1}
               setIsOpen = {setIsOpen1}
               items = {props.value1}
               outComeData = {props.outComeData}
               setOutComeData = {props.setOutComeData}
               type = {props.type}
               multiplyHandler = {props.multiplyHandler}
               value = {props.value1}
               displayValue = {props.displayValue1}
               displayName = {props.displayName1}
               />
            </div>
            <div style = {{marginLeft: "10px"}} className = "multipl-select">
            <span className = "label multiply-lable">{props.label2}</span>
            {props.displayValue2 !== "" ? props.displayValue2 : "Example"}
            <Popup
               name = {props.name2}
               isOpen = {isOpen2}
               setIsOpen = {setIsOpen2}
               items = {props.value2}
               outComeData = {props.outComeData}
               setOutComeData = {props.setOutComeData}
               type = {props.type}
               multiplyHandler = {props.multiplyHandler}
               value = {props.value2}
               displayValue = {props.displayValue2}
               displayName = {props.displayName2}
               />
            <span onClick = {() => setIsOpen2(!isOpen2)}  className = "arrow"/>
            </div>
        </>
    )
}

export default MultiplySelect;