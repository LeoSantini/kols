import React from 'react'

function Contact() {
    return (
        <div>
            <p>Alguma dúvida? Entre em contato conosco!</p>
            <p>Karen Okasaki</p>
            <a
                target="_blank"
                href={`https://api.whatsapp.com/send?phone=+5511981860227&text=Olá Karen, estou com problemas no ERP!`}
                rel="noopener noreferrer"
            >WhatsApp</a>

            <p>Leonardo Santini</p>
            <a
                target="_blank"
                href={`https://api.whatsapp.com/send?phone=+5511986481533&text=Olá Leonardo, estou com problemas no ERP!`}
                rel="noopener noreferrer"
            >WhatsApp</a>
        </div>
    );
}

export default Contact;