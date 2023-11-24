import { useState } from "react";

const ImageUpload = () => {
    const [file, setFile] = useState(null);
    const onSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("file", file);
        fetch("http://localhost:2023/upload", {
            method: "POST",
            body: formData,
            ContectType: "multipart/form-data"
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="file" onChange={ () => setFile(file) }/>
            <button type="submit" >Enviar</button>
        </form>
    )
}

export default ImageUpload;