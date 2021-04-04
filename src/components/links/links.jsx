import React from "react";


const Links = (props) => {

    const linkHandler = () => {
        props.setOutComeData({...props.outComeData, [props.value]: [...props.links, ""]})
    }

    return (
        <div style = {{marginTop: "20px", display: "flex", position: "relative"}}>

            <span style = {{position: "absolute"}} className = "label">{props.label}</span>
            <ul style = {{marginTop: "23px"}} className = "links">
                {props.links.map((link, index) => (
                    <li key = {index}>
                        <i className = "icon-link"></i>
                        <input placeholder = "fb.example" className = "link-input" onChange  = {(event) => console.log(event.target.value)} type = "text"/>
                    </li>
                ))}
            </ul>
            <div onClick = {linkHandler} className = "add-btn">
                    <span>Add link</span>
                    <i style = {{top: "26px", left: "15px"}} className = "icon-plus"></i>
            </div>
        </div>
    )
}

export default Links;