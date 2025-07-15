export const updateProduct = async (body,id) => {
  try {
    const res = await fetch(`http://localhost:3000/products/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};