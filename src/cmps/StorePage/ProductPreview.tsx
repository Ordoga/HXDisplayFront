import { Product } from '../../types'

type ProductPreviewProps = {
    product: Product
}

export default function ProductPreview({ product }: ProductPreviewProps) {
    return <section>{product.name}</section>
}
