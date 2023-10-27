import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ProductDetailsPage = () => {
    
    const [ producto, setProducto ] = useState([])
    const { id } = useParams()

    useEffect(() => {
        console.log("Iniciando componente")
        fetch(`https://api-aplicaciones-hibridas-84yxxtscs-master-victor.vercel.app/api/productos/${id}`)
            .then((res) => res.json())
            .then((data) => setProducto(data))
    },[])
    return producto.name !== undefined
    ? (
        <div>
            <h1>{producto.name}</h1>
            <p>{producto.description}</p>
            <p>{producto.price}</p>
        </div>
    )
    : (
        <div>
            <h1>Cargando...</h1>
        </div>
    )
}

export default ProductDetailsPage