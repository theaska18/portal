import React, { useEffect } from 'react';
import M from 'materialize-css';
import "./Main.css"
function Main() {
    return (
    	<>
	        <div>
		      {/* Hero Section */}
		      <div className="hero blue-grey darken-4 white-text center-align">
		        <div className="container">
		          <h1 className="header">About Us</h1>
		          <p>Learn more about our company and what drives us</p>
		        </div>
		      </div>

		      {/* Company Overview */}
		      <div className="section">
		        <div className="container">
		          <h5 className="center-align">Company Overview</h5>
		          <p>
		            Danai Financial Technology is dedicated to providing innovative financial solutions
		            that empower individuals and businesses. Our mission is to make financial management
		            accessible and efficient through cutting-edge technology.
		          </p>
		          <p>
		            We offer a range of services including personal finance management, loan processing,
		            and investment planning. Our goal is to simplify financial decisions and help our
		            users achieve their financial goals.
		          </p>
		        </div>
		      </div>

		      {/* Meet the Team */}
		      <div className="section grey lighten-4">
		        <div className="container">
		          <h5 className="center-align">Meet the Team</h5>
		          <div className="row">
		            <div className="col s12 m4">
		              <div className="card">
		                <div className="card-image">
		                  <img src="https://via.placeholder.com/300" alt="Team Member 1" />
		                  <span className="card-title">Jane Doe</span>
		                </div>
		                <div className="card-content">
		                  <p>CEO & Founder</p>
		                  <p>Jane is the visionary behind Danai, bringing years of experience in financial
		                     technology and a passion for innovation.
		                  </p>
		                </div>
		              </div>
		            </div>
		            <div className="col s12 m4">
		              <div className="card">
		                <div className="card-image">
		                  <img src="https://via.placeholder.com/300" alt="Team Member 2" />
		                  <span className="card-title">John Smith</span>
		                </div>
		                <div className="card-content">
		                  <p>Chief Technology Officer</p>
		                  <p>John leads our technology team, ensuring that our solutions are cutting-edge and
		                     reliable.
		                  </p>
		                </div>
		              </div>
		            </div>
		            <div className="col s12 m4">
		              <div className="card">
		                <div className="card-image">
		                  <img src="https://via.placeholder.com/300" alt="Team Member 3" />
		                  <span className="card-title">Emily Johnson</span>
		                </div>
		                <div className="card-content">
		                  <p>Head of Customer Support</p>
		                  <p>Emily ensures that our users receive top-notch support and have the best
		                     experience with our services.
		                  </p>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>

		      {/* Our Vision */}
		      <div className="section">
		        <div className="container">
		          <h5 className="center-align">Our Vision</h5>
		          <p>
		            At Danai, our vision is to revolutionize financial management by integrating
		            advanced technology with user-friendly solutions. We aim to create a world where
		            managing finances is intuitive, accessible, and empowering for everyone.
		          </p>
		          <p>
		            We are committed to continuous innovation and customer satisfaction, and we strive
		            to be a leader in the financial technology industry.
		          </p>
		        </div>
		      </div>
		    </div>
	    </>
    );
}

export default Main;
