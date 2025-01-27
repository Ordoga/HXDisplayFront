import { messageService } from '../services/message.service.js'

export default function ContactPage() {
    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const name = formData.get('name')
        const email = formData.get('email')
        const message = formData.get('message')

        // console.log(name)
        const response = await messageService.sendMessage({ name, email, message })
        console.log(response)
    }

    return (
        <section className='contact-page'>
            <h1>Contact Us</h1>
            <form className='contact-form' onSubmit={handleSubmit}>
                <input type='text' placeholder='Name' name='name' />
                <input type='email' placeholder='Email' name='email' />
                <textarea placeholder='Message' name='message'></textarea>
                <button type='submit'>Send</button>
            </form>
        </section>
    )
}
