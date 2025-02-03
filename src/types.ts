export type User = {
    name: string
    email: string
}

export type Product = {
    id: number
    name: string
    description: string
    price: number
    productColors: Color[]
}

export type Color = {
    id: number
    name: string
    hex: string
}
