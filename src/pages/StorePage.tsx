import { useEffect, useState } from 'react'
import { getProducts } from '../../src/services/product.service.ts'
import ProductList from '../cmps/StorePage/ProductList.tsx'

export default function StorePage() {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        fetchProducts()
    }, [])

    async function fetchProducts() {
        const products = await getProducts()
        setProducts(products)
    }
    return <section>{products && <ProductList products={products} />}</section>
}
