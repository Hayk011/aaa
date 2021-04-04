import React from "react";
import Dropzone from 'react-dropzone'



const CustomDropzone = (props) => {
    return (
        <div>
            <span className = "label">{props.label}</span>
            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
              {({getRootProps, getInputProps}) => (
                <section className = "dropzone" style= {{marginTop: "10px", position: "absolute"}}>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>CV.pdf</p>
                    <i className = "icon-upload3"/>
                  </div>
                </section>
              )}
            </Dropzone> 
        </div>
    )
}

export default CustomDropzone;