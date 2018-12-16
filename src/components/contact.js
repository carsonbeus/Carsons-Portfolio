import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="contact_wrapper">
                <div className="contact_wrapper__title">
                    Contact
                </div>

                <div className="form">
                    <div class="form-group">
                        <input className="contact_containerName" placeholder="name" type="text" name="Name" />
                    </div>
                    <div class="form-group">
                        <input className="contact_containerEmail" placeholder="email" type="text" name="Email" />
                    </div>
                    <div class="form-group">
                        <input className="contact_containerPhone" placeholder="phone" type="text" name="Phone" />
                    </div>
                    <div class="form-group">
                        <textarea className="contact_containerMessage" placeholder="message" type="text" name="Message" />
                    </div>

                    <div className="centered-btn-wrapper">
                        <button type="submit" className="btn">Send it!</button>
                    </div>
                                            
                </div>
            </div>
        )
    }
}
export default Contact;

