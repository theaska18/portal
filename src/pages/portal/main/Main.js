import React, { useEffect } from 'react';
import M from 'materialize-css';
import "./Main.css"
function Main() {
	useEffect(() => {
	    const elems = document.querySelectorAll('.carousel');
    	M.Carousel.init(elems, { fullWidth: true, indicators: true });
  	}, []);
    return (
    	<>
	        <div>
		      {/* Carousel Gambar */}
		      <div className="carousel carousel-slider">
		        <a className="carousel-item" href="#one!"><img src="https://via.placeholder.com/800x400?text=Image+1" alt="Slide 1" /></a>
		        <a className="carousel-item" href="#two!"><img src="https://via.placeholder.com/800x400?text=Image+2" alt="Slide 2" /></a>
		        <a className="carousel-item" href="#three!"><img src="https://via.placeholder.com/800x400?text=Image+3" alt="Slide 3" /></a>
		        <a className="carousel-item" href="#four!"><img src="https://via.placeholder.com/800x400?text=Image+4" alt="Slide 4" /></a>
		        <a className="carousel-item" href="#five!"><img src="https://via.placeholder.com/800x400?text=Image+5" alt="Slide 5" /></a>
		        <a className="carousel-item" href="#six!"><img src="https://via.placeholder.com/800x400?text=Image+6" alt="Slide 6" /></a>
		        <a className="carousel-item" href="#seven!"><img src="https://via.placeholder.com/800x400?text=Image+7" alt="Slide 7" /></a>
		        <a className="carousel-item" href="#eight!"><img src="https://via.placeholder.com/800x400?text=Image+8" alt="Slide 8" /></a>
		        <a className="carousel-item" href="#nine!"><img src="https://via.placeholder.com/800x400?text=Image+9" alt="Slide 9" /></a>
		        <a className="carousel-item" href="#ten!"><img src="https://via.placeholder.com/800x400?text=Image+10" alt="Slide 10" /></a>
		      </div>

		      {/* Hero Section */}
		      <div className="hero blue-grey darken-4 white-text center-align">
		        <div className="container">
		          <h1 className="header">Welcome to Danai Financial Portal</h1>
		          <p>Your trusted partner in financial management</p>
		        </div>
		      </div>

		      {/* Latest News */}
		      <div className="section">
		        <div className="container">
		          <h5 className="center-align">Latest News</h5>
		          <div className="row">
		            <div className="col s12 m4">
		              <div className="card">
		                <div className="card-image">
		                  <img src="https://via.placeholder.com/300" alt="News 1" />
		                  <span className="card-title">Financial Market Trends</span>
		                </div>
		                <div className="card-content">
		                  <p>Stay updated with the latest trends in the financial market.</p>
		                </div>
		                <div className="card-action">
		                  <a href="#!">Read More</a>
		                </div>
		              </div>
		            </div>
		            <div className="col s12 m4">
		              <div className="card">
		                <div className="card-image">
		                  <img src="https://via.placeholder.com/300" alt="News 2" />
		                  <span className="card-title">New Savings Plans</span>
		                </div>
		                <div className="card-content">
		                  <p>Discover our new savings plans designed to maximize your returns.</p>
		                </div>
		                <div className="card-action">
		                  <a href="#!">Read More</a>
		                </div>
		              </div>
		            </div>
		            <div className="col s12 m4">
		              <div className="card">
		                <div className="card-image">
		                  <img src="https://via.placeholder.com/300" alt="News 3" />
		                  <span className="card-title">Loan Management Tips</span>
		                </div>
		                <div className="card-content">
		                  <p>Learn effective strategies for managing your loans and reducing debt.</p>
		                </div>
		                <div className="card-action">
		                  <a href="#!">Read More</a>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>

		      {/* Featured Articles */}
		      <div className="section grey lighten-4">
		        <div className="container">
		          <h5 className="center-align">Featured Articles</h5>
		          <div className="row">
		            <div className="col s12 m6">
		              <div className="card">
		                <div className="card-content">
		                  <span className="card-title">Understanding Personal Loans</span>
		                  <p>An in-depth look at personal loans and how they can benefit you.</p>
		                </div>
		                <div className="card-action">
		                  <a href="#!">Read Article</a>
		                </div>
		              </div>
		            </div>
		            <div className="col s12 m6">
		              <div className="card">
		                <div className="card-content">
		                  <span className="card-title">Maximizing Your Savings</span>
		                  <p>Explore various strategies to grow your savings effectively.</p>
		                </div>
		                <div className="card-action">
		                  <a href="#!">Read Article</a>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>

		      {/* Testimonials */}
		      <div className="section">
		        <div className="container">
		          <h5 className="center-align">What Our Users Say</h5>
		          <div className="carousel">
		            <div className="carousel-item">
		              <blockquote>
		                <p>"Danai has been a game-changer for my financial management. Highly recommend!"</p>
		                <footer>- John Doe</footer>
		              </blockquote>
		            </div>
		            <div className="carousel-item">
		              <blockquote>
		                <p>"The loan calculator helped me make informed decisions about my finances."</p>
		                <footer>- Jane Smith</footer>
		              </blockquote>
		            </div>
		            <div className="carousel-item">
		              <blockquote>
		                <p>"Great savings plans and excellent customer support."</p>
		                <footer>- Mary Johnson</footer>
		              </blockquote>
		            </div>
		          </div>
		        </div>
		      </div>
		    </div>
	    </>
    );
}

export default Main;
