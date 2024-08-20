import React, { useState } from 'react';
function Main() {
	const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logika untuk mengirim formulir atau melakukan validasi
    console.log('Form submitted:', formData);
    // Clear the form after submission
    setFormData({ name: '', email: '', message: '' });
  };
    return (
    	<>
	        <div>
		      {/* Hero Section */}
		      <div className="hero blue-grey darken-4 white-text center-align">
		        <div className="container">
		          <h1 className="header">Contact Us</h1>
		          <p>We'd love to hear from you! Fill out the form below to get in touch.</p>
		        </div>
		      </div>

		      {/* Contact Form */}
		      <div className="section">
		        <div className="container">
		          <h5 className="center-align">Get in Touch</h5>
		          <div className="row">
		            <div className="col s12 m6">
		              <form onSubmit={handleSubmit}>
		                <div className="input-field">
		                  <input
		                    type="text"
		                    id="name"
		                    name="name"
		                    value={formData.name}
		                    onChange={handleChange}
		                    required
		                  />
		                  <label htmlFor="name">Name</label>
		                </div>

		                <div className="input-field">
		                  <input
		                    type="email"
		                    id="email"
		                    name="email"
		                    value={formData.email}
		                    onChange={handleChange}
		                    required
		                  />
		                  <label htmlFor="email">Email</label>
		                </div>

		                <div className="input-field">
		                  <textarea
		                    id="message"
		                    name="message"
		                    className="materialize-textarea"
		                    value={formData.message}
		                    onChange={handleChange}
		                    required
		                  ></textarea>
		                  <label htmlFor="message">Message</label>
		                </div>

		                <button type="submit" className="btn waves-effect waves-light">
		                  Send
		                </button>
		              </form>
		            </div>

		            <div className="col s12 m6">
		              <h5>Contact Information</h5>
		              <p>
		                <i className="material-icons">location_on</i> 1234 Main Street, Suite 100, City, Country
		              </p>
		              <p>
		                <i className="material-icons">phone</i> (123) 456-7890
		              </p>
		              <p>
		                <i className="material-icons">email</i> info@danai.com
		              </p>
		              <p>
		                <i className="material-icons">access_time</i> Mon - Fri: 9am - 5pm
		              </p>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
	    </>
    );
}

export default Main;
