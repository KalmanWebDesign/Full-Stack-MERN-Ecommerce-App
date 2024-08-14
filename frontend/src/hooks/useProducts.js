import {useState, useEffect} from 'react'

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:4000/products')
                console.log(response)
                const data = await response.json()
                setProducts(data)
            } catch (error) {
                console.error('Error fetching products:', error)
            }
        }

        fetchProducts();
    }, [])

  return products
}

export default useProducts