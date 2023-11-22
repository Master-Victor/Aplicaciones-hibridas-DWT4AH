import { useEffect, useState } from "react";
import { socket } from "../services/socket.service";
import { Box, Button, List, ListItem, TextField, Typography } from "@mui/material";

const ChatComponent = () => {
  const [mensaje, setMensaje] = useState([]);
  const [mensajes, setMensajes] = useState([]);
  const [usuario, setUsuario] = useState("");
  const [enviarA, setEnviarA] = useState("");
  const [logueado, setLogueado] = useState(false);
  useEffect(() => {
    socket.on("connection", () => {
      console.log("connected");
    });
    return () => {
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on("mensaje", (mensaje) => {
      console.log("mensaje", mensaje)
      console.log("mensajes", mensajes)
      if( mensaje.length === 0 ) return;
      setMensajes([...mensajes, mensaje]);
    });
  }, []);

  const sendMensaje = () => {
    if( mensaje === "") return;
    if( enviarA === "") return;
    socket.emit("mensaje", { msg: mensaje, username: enviarA });
    setMensaje("");
  };

  const login = () => {
    socket.emit("nuevo-usuario", usuario);
    setLogueado(true);
  };

  return (
    <Box>
      {!logueado ? (
        <Box>
          <TextField
            label="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <Button onClick={login}>Enviar</Button>
        </Box>
      ) : (
        <Box>
          <Typography variant="h4">Bienvenido {usuario} </Typography>
          <TextField
            label="Mandar a"
            value={enviarA}
            onChange={(e) => setEnviarA(e.target.value)}
          />
          <List>
            {mensajes.map((mensaje, index) => (
              <ListItem key={index}>
                <Typography variant="body1">
                  {mensaje.username}: {mensaje.msg}
                </Typography>
              </ListItem>
            ))}
          </List>
          <TextField
            label="Mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
            <Button onClick={sendMensaje}>Enviar</Button>
        </Box>
      )}
    </Box>
  );
};

export default ChatComponent;
