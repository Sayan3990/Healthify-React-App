import React  from 'react';

function Footer() {
    return (<div>
        <br/>
        <footer>
            <div class="container-foot">
                <section class="ft-main">
                    <div class="ft-main-item">
                    <h2 class="ft-title">ABOUT</h2>
                    <ul>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                    </div>
                    <div class="ft-main-item">
                    <h2 class="ft-title">RESOURCES</h2>
                    <ul>
                        <li><a href="#">Docs</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">eBooks</a></li>
                        <li><a href="#">Webinars</a></li>
                    </ul>
                    </div>
                    <div class="ft-main-item">
                    <h2 class="ft-title">CONTACT</h2>
                    <ul>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Sales</a></li>
                        <li><a href="#">Advertise</a></li>
                    </ul>
                    </div>
                    <div class="ft-main-item">
                    <h2 class="ft-title">FEEDBACK</h2>
                    <p>Send your valuable feedback</p>
                    <form>
                        <input type="text" name="feedback" placeholder="Enter your feedback"/>
                        <input type="submit" value="SEND"/>
                    </form>
                    </div>
                </section>

                <section class="ft-social">
                    <ul class="ft-social-list">
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fa fa-github"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                    </ul>
                </section>
                <section class="ft-legal">
                    <ul class="ft-legal-list">
                    <li><a href="#">Terms &amp; Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li>&copy; 2021 Copyright Code Mergers</li>
                    </ul>
                </section>
            </div>
        </footer>
    </div>);
}

export default Footer;