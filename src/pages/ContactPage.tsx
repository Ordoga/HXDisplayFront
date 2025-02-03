import { useState } from 'react'
import { messageService } from '../services/message.service.js'

export default function ContactPage() {
    const [isMsgSent, setisMsgSent] = useState<boolean | null>(null)

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        try {
            event.preventDefault()
            const formData = new FormData(event.currentTarget)
            const name = formData.get('name')
            const email = formData.get('email')
            const message = formData.get('message')

            // console.log(name)
            await messageService.sendMessage({ name, email, message })
            setisMsgSent(true)
        } catch (error) {
            setisMsgSent(false)
        }
    }

    return (
        <section className='contact-page'>
            {isMsgSent === null && (
                <>
                    <h1>Contact Us</h1>
                    <form className='contact-form' onSubmit={handleSubmit}>
                        <input type='text' placeholder='Name' name='name' />
                        <input type='email' placeholder='Email' name='email' />
                        <textarea placeholder='Message' name='message'></textarea>
                        <button type='submit'>Send</button>
                    </form>
                </>
            )}
            {isMsgSent === true && (
                <div className='msg-sent'>
                    <h1>Message Sent</h1>
                    <p>Thank you for your message. We will get back to you soon.</p>
                </div>
            )}
            {isMsgSent === false && (
                <div className='msg-error'>
                    <h1>Error</h1>
                    <p>There was an error sending your message. Please try again later.</p>
                </div>
            )}
        </section>
    )
}
