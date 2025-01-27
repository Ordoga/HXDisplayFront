import { httpService } from './http.service.js'

export const messageService = {
    sendMessage,
}

async function sendMessage(message) {
    try {
        const response = await httpService.post('message', message)
        return response
    } catch (error) {
        throw new Error('Could not send message')
    }
}
