import React from "react";
import Input from "./components/input/input";
import Select from "./components/select/select";
import CupleImput from "./components/cuple/cuple-input";
import CustomDropzone from "./components/dropzone/custom-dropzone";
import MultiplySelect from "./components/multiply-select/muliplySelect";
import './App.css';
import "./font/style.css";
import Links from "./components/links/links";

const inputData = [
  {
    id: 1,
    name: "full_name",
    value: "full_name",
    placeholder: "Name,Surname",
    label: "Name",
    elementType: "input",
    type: "text"
  },
  {
    id: 2,
    name: "salary",
    value: "salary", 
    placeholder: "600.000",
    label: "Salery amount",
    elementType: "input",
    type: "number"
  },
  {
    id: 3,
    name: "application_date",
    value: "application_date",
    placeholder: "01.10.2021",
    label: "Application Date",
    elementType: "input",
    type: "text"
  },
  {
    id: 4,
    name1: "interview_date",
    name2: "interview_time",
    value1: "interview_date",
    value2: "interview_time",
    placeholder1: "01.10.2021",
    placeholder2: "10:00",
    label1: "Interview Date",
    label2: "Interview Time",
    elementType: "input",
    isCurrently: true,
    type: "text"
  }, 
  {
    id: 5, 
    name: "approval_date",
    value: "approval_date",
    placeholder: "text",
    label: "Start Date After Approval",
    elementType: "input",
    type: "text"
  },
  {
    id: 6, 
    name: "position",
    value: "position",
    label: "Position",
    elementType: "select",
    type: "text"
  }, 
  {
    id: 7,
    name: "vacancy_description",
    value: "vacancy_description",
    placeholder: "Vacancy Description URL",
    label: "Vacancy Description URL",
    elementType: "input",
    type: "text"
  },
  {
    id: 8,
    name: "source",
    value: "source",
    label: "Source",
    elementType: "select",
    type: "text"
  },
   {
     id: 9,
     name: "stage",
     value: "stage",
     label: "Stage",
     elementType: "select",
     type: "text"
   },
   {
     id: 10,
     name: "cv",
     value: "file",
     label: "CV (.pdf, .docx)",
     elementType: "dropzone",
     type: "dropzone"
   },
   {
     id: 11,
     name: "fit",
     value: "fit",
     label: "Fit",
     elementType: "select",
     type: "text"
   },
   {
     id: 12,
     name1: "tech_main",
     name2: "tech_additional",
     value1: "tech_main",
     value2: "tech_additional",
     displayValue1: "tech_main_value",
     displayValue2: "tech_additional_value",
     displayName1: "",
     displayName2: "",
     label1: "Tech Main", 
     label2: "Tech Additional",
     type: "myltiply"
   },
   {
     id: 13,
     name: "language_preference", 
     value: "language_preference",
     label: "Language Preference",
     elementType: "select",
     type:  "text" 
   },
   {
     id: 14,
     name: "phone_number",
     value: "phone_number",
     placeholder: "374 93 00 00 00",
     label: "Phone Number",
     elementType: "input",
     type: "number"
   },
   {
    id: 15,
    name: "email",
    value: "email",
    placeholder: "test@mail.com",
    label: "Email",
    elementType: "input",
    type: "email"
   }
]

function App() {
  const [outComeData, setOutComeData] = React.useState({
    full_name: "", 
    salary: "",
    application_date: "",
    interview_date: "",
    interview_time: "",
    approval_date: "",
    vacancy_description: "",
    position: ["Node JS", "PHP", "GO"],
    source: ["Facebook", "Instagram", "Linkdin"],
    stage: ["HR interview", "Task in progress", "Offer accepted", "Offer declined"],
    fit: ["Junior", "Middle", "Senior"],
    tech_main: ["Example", "Example2", "Example3"],
    tech_main_value: "",
    tech_additional: ["Example", "Example2", "Example3"],
    tech_additional_value: "gello",
    language_preference: ["Advanced", "Advanced1", "Advanced2"],
    links: ["", ""],
    email: "",
    comment: "",
    file: null,

  })
  const inputsHandler = (event) =>{
    setOutComeData({...outComeData, [event.target.name]: event.target.value})
  };

  const multiplyHandler = (name, value) => {
      setOutComeData({...setOutComeData, [name]: value})
  }

  return (
    <div className = "main-container">
      <div className = "container">
        <img src = "/images/algorithm.png" alt = "logo" className = "logo"/>
        <div className = "title-container">
          <i className = "icon-arrow-left2"/>
          <span className = "title">Name Surname</span>
        </div>
        <form>
          <ul className = "condidate-form">
          {inputData.map((item) => (
          item.isCurrently ?
          <li style = {{display: "flex"}} key = {item.id}>
           <CupleImput
           name1 = {item.name1}
           name2= {item.name2}
           value1 = {outComeData[item.value1]}
           value2 =  {outComeData[item.value2]}
           placeholder1 = {item.placeholder1}
           placeholder2 = {item.placeholder2}
           label1 = {item.label1}
           label2 = {item.label2}
           isCurrently = {item.isCurrently}
           inputsHandler = {inputsHandler}
           type = {item.type}
           />
          </li> : item.elementType === "input" ?
            <li key = {item.id}>
              <label>{item.label}
              <Input
              name = {item.name}
              value = {outComeData[item.value]}
              placeholder = {item.placeholder}
              type = {item.type}
              inputsHandler = {inputsHandler}
              />
              </label>
            </li> : item.elementType === "dropzone" ?
            <li key = {item.id}>
              <CustomDropzone
              label = {item.label}
            />
            </li>
            : 
            item.type === "myltiply" ?
            <li style = {{display: "flex"}} key = {item.id}>
            <MultiplySelect
              label1 = {item.label1}
              label2 = {item.label2}
              name1 = {item.name1}
              name2 = {item.name2}
              value1 = {outComeData[item.value1]}
              value2 = {outComeData[item.value2]}
              tech_main_value = {outComeData.tech_main_value}
              tech_additional_value = {outComeData.tech_additional_value}
              outComeData = {outComeData}
              setOutComeData = {setOutComeData}
              type = {item.type}
              multiplyHandler = {multiplyHandler}
              displayValue1 = {outComeData[item.displayValue1]}
              displayValue2 = {outComeData[item.displayValue2]}
              displayName1 = "tech_main_value"
              displayName2 = "tech_additional_value"
            />
            </li>
            : 
            <li key = {item.id}> 
              <Select
                label = {item.label}
                name = {item.name}
                value = {outComeData[item.value]}
                outComeData = {outComeData}
                setOutComeData = {setOutComeData}
                name = {item.name}
              />
            </li> 
          ))}
          </ul>
          <Links
            links = {outComeData.links}
            outComeData = {outComeData}
            label = "Social links"
            value = "links"
            setOutComeData = {setOutComeData}
          />
          <div style = {{marginTop: "20px"}}>
            <span className = "label">Comments</span>
          <textarea onChange = {(event) => inputsHandler(event)} name = "comment" value = {outComeData.comment}/>
          </div>
          <div className = "btn-container">
            <button style = {{backgroundColor: "#000"}}>Cancel</button>
            <button style = {{marginLeft: "20px", backgroundColor: "#25AE85"}}>Save</button>
          </div>
        </form>
      </div>
   
    </div>
  );
}

export default App;
