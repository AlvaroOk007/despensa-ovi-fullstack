import { useEffect, useState } from 'react'

// Funcion para obtener todos los productos a mostrar
export const useFetchProducts = () =>{
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(()=>{
    fetch(`http://localhost:3000/products/category`)
    .then(res => res.json())
    .then(rec => {
      setProducts(rec.data)
      setLoading(false)
    })
    .catch(err => {
      setLoading(false)
      console.log(err)
      setError('Ocurrió un error al cargar los productos')
    })
  },[])
  return { products, loading, error }
}