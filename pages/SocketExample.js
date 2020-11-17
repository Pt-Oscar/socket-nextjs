import io from 'socket.io-client';
import React, {useEffect, useState} from 'react';
const socket = io.connect('http://localhost:8000');

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SocketExample = () => {
    const receiveMessage = () => {
        socket.on("messageSent", (message) => {
           
            toast(message.name, 'desde sockets')
        })
 
    } 

    useEffect(()=>{
        receiveMessage();
    },[])
    return (
        <div>
ejemplo
            <ToastContainer />
        </div>
    )
}
export default SocketExample;