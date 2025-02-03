import { httpService } from './http.service.js'

export async function getProducts() {
    try {
        const products = await httpService.get('product')
        return products
    } catch (err) {
        throw err
    }
}

// export async function getProductbyId(id) {}
