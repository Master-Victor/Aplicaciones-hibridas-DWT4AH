import { useEffect, useState } from "react"
import io from "socket.io-client"

const socket = io("http://localhost:2023")

const ChatComponent = () => {
    const [ mensaje, setMensaje ] = useState("")
    useEffect(() => {
        socket.on("connection", ()=> {
            console.log("connected")
        })
        return () => {
            socket.off()
        } 
    }, []);

    useEffect(() => {
        socket.on("mensaje", (data) => {
            console.log(data)
        })
    }, []);

    const sendMensaje = () => {
        socket.emit("mensaje", mensaje)
    }

    return (
        <div>
            <ul></ul>
            <input 
                type="text"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
            />
            <button onClick={ sendMensaje } >Enviar</button>
        </div>
    );
}

export default ChatComponent;
