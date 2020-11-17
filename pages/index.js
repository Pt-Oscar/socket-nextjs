import io from 'socket.io-client';
import React, {useEffect, useState} from 'react';
const socket = io.connect('http://localhost:8000');

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Index = () => {
    const [name, setName] = useState(null);
    const [age, setAge] = useState(null);
    const [saved, setSaved] = useState(false);
    const sendMessage = (e) => {
        e.preventDefault()
     socket.emit("messageSent", {
        name: name,
        age: age,
    })
    setSaved(!saved);
    //  receiveMessage()
   
    }
    // const receiveMessage = () => {
    //     socket.on("messageSent", (message) => {
    //         toast(message.name, 'desde sockets')
    //     })
 
    // } 

    // useEffect(()=>{
        
    // },[saved])
    return (
        <div>
                <label>Name</label>
                <input name="name" id="name" onChange={(event)=>{
                    setName(event.target.value)
                }} ></input>
                <label>
                    Age
                </label>
                <input name="age" id="age" onChange={(event)=>{
                    setAge(event.target.value)
                }}></input>
                <button onClick={(e)=>{
                    sendMessage(e)
                }}>socket </button>

            <ToastContainer />
        </div>
    )
}
export default Index;