import React, {useState} from 'react';
import {    NavLink
  } from "react-router-dom";
import firebase from './firebase';




const Employee = () => {
        const [name, changeName] = useState("");
        const [number, changeNumber] = useState("");
        const [department, changeDepartment] = useState("");
        const [manager, changeManager] = useState("");
        const [type, changeType] = useState("");
        const [date, changeDate] = useState("");
        const [reason, changeReason] = useState(""); 
    function handleChange(e){
        switch(e.target.name) {
            case "name":
                changeName(e.target.value)
                break;
            case "number":
                changeNumber(e.target.value)
            break;
            case "department":
                changeDepartment(e.target.value)
                break;
            case "manager":
                changeManager(e.target.value)
                break;
            case "type":
                changeType(e.target.value)
                break;
            case "date":
                changeDate(e.target.value)
                break;
            case "reason":
                changeReason(e.target.value)
                break;
            default:
                alert("not in case");
                break;
          }
        
      };

    return <div>
        Employee
        <NavLink  to="/" ><div>Back</div></NavLink>
            <div onClick={()=>{firebase.firestore().collection("actions").doc("action0").set({
      latest: 0
    })}}>test</div>
            <p>Absense Request Form</p><br/>
            <p>Employee Name:</p><br/>
            <input name = "name" value = {name} onChange={handleChange}></input><br/>
            <p>Employee Number:</p><br/>
            <input name = "number" value = {number} onChange={handleChange}></input><br/>
            <p>Employee Department:</p><br/>
            <input name = "department" value = {department} onChange={handleChange}></input><br/>
            <p>Employee Manager:</p><br/>
            <input name = "manager" value = {manager} onChange={handleChange}></input><br/>
            <p>Type of Absense:</p><br/>
            <input name = "type" value = {type} onChange={handleChange}></input><br/>
            <p>Date of Absense:</p><br/>
            <input name = "date" value = {date} onChange={handleChange}></input><br/>
            <p>Reason:</p><br/>
            <input name = "reason" value = {reason} onChange={handleChange}></input><br/>
            <button onClick={()=>{firebase.firestore().collection("request_list").doc(number).set({
      name: name,
      number: number,
      department: department,
      manager: manager,
      type: type,
      date: date,
      reason: reason,
      status: false,
      reply: ""
    })}}>Submit</button>
        
        </div>
}

export default Employee