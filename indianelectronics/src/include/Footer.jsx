import React from 'react'

function Footer() {
  return (
    <div>
   <footer id="footer">

<div class="footer-top">
  <div class="container">
    <div class="row">

      <div class="col-lg-3 col-md-6 footer-contact">
        <h3>Indian Electronics</h3>
        <p>
        Ishwar Dayal building <br/>
        saket puri,Hanuman Nagar<br/>
        Patna-800020<br/><br/>
          <strong>Phone:</strong> +91 79911 60443<br/>
          <strong>Email:</strong> bt.vivek.nitw@gmail.com<br/>
        </p>
      </div>

      <div class="col-lg-2 col-md-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
          <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
        </ul>
      </div>

      <div class="col-lg-4 col-md-6 footer-newsletter">
        <h4>Join Our Newsletter</h4>
        <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
        <form action="" method="post">
          <input type="email" name="email"/><input type="submit" value="Subscribe"/>
        </form>
      </div>

    </div>
  </div>
</div>

  <div class="me-md-auto text-center text-md-start">
    <div class="copyright">
      &copy; Copyright <strong><span>Indian Electronics</span></strong>. All Rights Reserved
    </div>
    <div class="credits">
       <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
  </div>
</footer>
</div>
    
  )
}

export default Footer