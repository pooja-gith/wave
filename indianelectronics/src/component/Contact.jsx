import React from 'react'
import Footer from '../include/Footer'
import Header from '../include/Header'

function Contact() {
  return (
    <div>
        <Header/>
        <main id="main">
        <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">

    <div class="d-flex justify-content-between align-items-center">
      <h2>Contact</h2>
      <ol>
        <li><a href="index.html">Home</a></li>
        <li>Contact</li>
      </ol>
    </div>

  </div>
</section>
<div class="map-section">
</div>

<section id="contact" class="contact">
  <div class="container">

    <div class="row justify-content-center" data-aos="fade-up">

      <div class="col-lg-10">

        <div class="info-wrap">
          <div class="row">
            <div class="col-lg-4 info">
              <i class="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p>Ishwar Dayal Building, Opp Khemnichak Bypass<br/>Hanuman Nagar, Patna, Bihar 800026, India</p>
            </div>

            <div class="col-lg-4 info mt-4 mt-lg-0">
              <i class="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p>bt.vivek.nitw@gmail.com</p>
            </div>

            <div class="col-lg-4 info mt-4 mt-lg-0">
              <i class="bi bi-phone"></i>
              <h4>Call:</h4>
              <p>+91 79911 60443<br/>+91 70911 92670</p>
            </div>
          </div>
        </div>

      </div>

    </div>

    <div class="row mt-5 justify-content-center" data-aos="fade-up">
      <div class="col-lg-10">
        <form action="forms/contact.php" method="post" role="form" class="php-email-form">
          <div class="row">
            <div class="col-md-6 form-group">
              <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
            </div>
            <div class="col-md-6 form-group mt-3 mt-md-0">
              <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
            </div>
          </div>
          <div class="form-group mt-3">
            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required/>
          </div>
          <div class="form-group mt-3">
            <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
          </div>
          <div class="my-3">
            <div class="loading">Loading</div>
            <div class="error-message"></div>
            <div class="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div class="text-center"><button type="submit">Send Message</button></div>
        </form>
      </div>

    </div>

  </div>
</section>

</main>
<Footer/>
    </div>
  )
}

export default Contact