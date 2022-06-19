// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = ({data}) => {
    return (
        <div className='contacts'>
            <img className='contacts_image' src={data.photo} alt={data.name} />
            <div className='contacts_content'>
                <h2 className='contacts_title'>{data.name}</h2>
                <h5 className='contacts_phone'>{data.phone}</h5>
                <p className='contacts_email'>{data.email}</p>
            </div>
        </div>
    )
}

export default Contact;