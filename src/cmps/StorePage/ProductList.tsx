import { Product } from '../../types'
import ProductPreview from './ProductPreview'

type ProductListProps = {
    products: Product[]
}

export default function ProductList({ products }: ProductListProps) {
    return (
        <section>
            {products.map(product => (
                <ProductPreview product={product} key={product.id} />
            ))}
        </section>
    )
}
