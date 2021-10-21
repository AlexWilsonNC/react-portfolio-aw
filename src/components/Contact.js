import React, { useState } from 'react';
import '../css/contact.css';
import { validateEmail } from '../utils/helpers.js';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('please enter a valid email');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <section>
            <div id="myname">
                <h2>Let's Get in Touch</h2>
            </div>
            <hr />
            <form>
                <div>
                    <input type="text" name="name" defaultValue={name} onChange={handleChange} placeholder="name" />
                </div>
                <div>
                    <input class="form-control" type="email" name="email" defaultValue={email} onChange={handleChange} placeholder="email" />
                </div>
                <div>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="8" placeholder="what do you want to talk about?" />
                </div>
                {errorMessage && (
                    <div>
                        <p>{errorMessage}</p>
                    </div>
                )}
                <div>
                    <button data-testid='button' type="submit" onSubmit={handleSubmit}>submit</button>
                </div>
            </form>
        </section>
    );
};

export default Contact;