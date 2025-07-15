export const deleteProduct = async (id) => {
  try {
    
    const res = await fetch(`http://localhost:3000/products/${id}`,{
      method: 'DELETE'
    })
    const data = await res.json()
    console.log(data)
    return data
  } catch (error) {
    return error
  }
}