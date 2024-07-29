import React, { useState } from 'react';
import './Seventhpage.css';

const Seventhpage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className='outerdiv'>
            <h1>Start Your Project Now !</h1>
            <div className='row'>
                <div className='col-6'>
                    <img className='img7'src='img4.jpeg' alt='image' />
                </div>
                <div className='col-6'>
                    <div className="form-container">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" className="form-control" name="name" value={formData.name} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" className="form-control" name="email" value={formData.email} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mobile">Mobile</label>
                                <input type="number" id="mobile" className="form-control" name="mobile" value={formData.mobile} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" className="form-control" name="message" value={formData.message} onChange={handleChange} />
                            </div>
                            <button type="submit" className="btn7">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Seventhpage;
