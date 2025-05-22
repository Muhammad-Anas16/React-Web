
const Products = async () => {
    await fetch("https://api.escuelajs.co/api/v1/products").then(res => res.json()).then((json) => console.log(json))
}

export { Products };