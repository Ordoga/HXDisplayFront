import { useState } from 'react'
import ProductImgs from '../cmps/ProductDetails/ProductImgs'
import { Product } from '../types'

export default function ProductDetails() {
    const [product, setProduct] = useState<Product>({
        id: 1,
        name: 'Product Name',
        description: 'Product Description',
        price: 100,
        imageUrl: 'https://picsum.photos/200/300',
        category: 'Electronics',
        brand: 'Apple',
    })

    return (
        <section className='product-details-page'>
            <div className='details-section'>
                <ProductImgs />
                <div className='product-info'>
                    <h1 className='product-name'>{product.name}</h1>
                    <p className='product-price'>{product.price}</p>
                    <p className='product-description'>{product.description}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        </section>
    )
}
