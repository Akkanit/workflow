import React, {useEffect, useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    NavLink
  } from "react-router-dom";
import firebase from './firebase';
const Boss = () => {
    const [reply, changeReply] = useState("");
function handleChange(e){
    changeReply(e.target.value)
}

const [requests, setRequests] = useState([]);

useEffect(() => {
    const db = firebase.firestore();
    return db.collection('request_list').get().then((snapshot) => {
      const requestData = [];
      snapshot.forEach((doc) => 
      {
        if(doc.data().status==false){
      requestData.push(doc.data())}
      }
      );
      console.log(requestData);  // <------
      setRequests(requestData);
    });
  }, []);



    return <div onLoad={useEffect}>
        Boss
        <NavLink  to="/" ><div>Back</div></NavLink>
        {requests.map((request)=>{return(
                    <div>            
                    <p>Absense Request List</p><br/>
                    <p>Employee Name:</p><br/>
                    <p>{request.name}</p><br/>
                    <p>Employee Number:</p><br/>
                    <p>{request.number}</p><br/>
                    <p>Employee Department:</p><br/>
                    <p>{request.department}</p><br/>
                    <p>Employee Manager:</p><br/>
                    <p>{request.manager}</p><br/>
                    <p>Type of Absense:</p><br/>
                    <p>{request.type}</p><br/>
                    <p>Date of Absense:</p><br/>
                    <p>{request.date}</p><br/>
                    <p>Reason:</p><br/>
                    <p>{request.reason}</p><br/>
                    <p>Reply:</p><br/>
                    <input name = "reply" value = {reply} onChange={handleChange}></input><br/>
                    <button id = {request.number} onClick={()=>{firebase.firestore().collection("request_list").doc(request.number).update({
      status: true,
      reply: reply
    })
    }}>Allow</button>
                </div>
        )})}


        
        </div>

}

export default Boss