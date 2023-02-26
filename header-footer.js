class MyHeader extends HTMLElement{
    connectedCallback(){
      this.innerHTML = `
      <header class="main-header header-style-one">
        <!-- Header Top -->
        <div class="header-top">
            <div class="top-left1">
                <!-- Info List -->
                <ul class="list-style-one">
                    <li><i class="fa fa-map-marker-alt"></i> 106, Floor-1, Plot-140, Plaza Centre, Sheriff Devji Street Mumbai 400003</li>
                    <li><i class="fa fa-clock"></i> Mon-Sat: 10am - 06pm</li> 
                    <li><i class="fa fa-phone-volume"></i> <a href="#">+91 9819980001</a></li>
                </ul>
            </div>
            
           
        </div>
        <!-- Header Top -->

        <!-- Header Lower -->
        <div class="header-lower">
            <!-- Main box -->
            <div class="main-box">
                <div class="logo-box">
                    <div class="logo"><a href="index.html"><img src="images/mainlogo.png" alt="" title="Sahara Maritime"></a></div>
                </div>

                <!--Nav Box-->
                <div class="nav-outer">

                    <nav class="nav main-menu">
                        <ul class="navigation">

                            <li><a href="index.html">Home</a>
                            </li>

                            <li><a href="page-about.html">About</a></li>

                            <li><a href="page-services.html">Services</a>
                            </li>

                            <li><a href="page-get-quote.html">Get A Quote</a></li>

                            <li><a href="page-clients.html">Client</a></li>

                            <li class="dropdown"><a href="#">Investor</a>
                                <ul>
                                    <li><a href="#">Commtte Board</a></li>
                                    <li><a href="#">Financial Results</a></li>
                                    <li><a href="#">Shareholding Patterns</a></li>
                                    <li><a href="#">Shareholding Documents</a></li>
                                    <li><a href="#">Corporate Policies</a></li>
                                    <li><a href="#">Annual Reports</a></li>
                                    <li><a href="#">Initial Public Offer(IPO)</a></li>
                                    <li><a href="#">Annual Returns</a></li>
                                    <li><a href="#">News and Information</a></li>
                                    <li><a href="#">Corporate Announcement</a></li>
                                    <li><a href="#">Corporate Information</a></li>
                                    <li><a href="#">AGM Notice</a></li>
                                    <li><a href="#">Disclosure</a></li>
                                    
                                    
                                    
                                </ul>
                            </li>

                            <li><a href="page-contact.html">Contact</a></li>

                        </ul>
                    </nav>
                    <!-- Main Menu End-->

                    <div class="outer-box">


                        <a href="page-get-quote.html" class="theme-btn btn-style-one alternate"><span class="btn-title">Get A Quote</span></a>

                        <!-- Mobile Nav toggler -->
                        <div class="mobile-nav-toggler"><span class="icon lnr-icon-bars"></span></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Header Lower -->

        <!-- Mobile Menu  -->
        <div class="mobile-menu">
            <div class="menu-backdrop"></div>

            <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
            <nav class="menu-box">
                <div class="upper-box">
                    <div class="nav-logo"><a href="index-2.html"><img src="images/logo-2.png" alt="" title="Fesho"></a></div>
                    <div class="close-btn"><i class="icon fa fa-times"></i></div>
                </div>

                <ul class="navigation clearfix">
                    <!--Keep This Empty / Menu will come through Javascript-->
                </ul>
                <ul class="contact-list-one">
                    <li>
                        <!-- Contact Info Box -->
                        <div class="contact-info-box">
                            <i class="icon lnr-icon-phone-handset"></i>
                            <span class="title">Call Now</span>
                            <a href="tel:+91 9819980001">+91 9819980001</a>
                            
                        </div>
                        <div class="contact-info-box">
                        <a href="tel: +022 23479362"> +022 23479362</a>
                        </div>
                        
                    </li>
                    <li>
                        <!-- Contact Info Box -->
                        <div class="contact-info-box">
                            <span class="icon lnr-icon-envelope1"></span>
                            <span class="title">Send Email</span>
                            <a href="mailto:saharamaritime@hotmail.com
                            ">saharamaritime@hotmail.com
                            </a>
                        </div>
                    </li>
                    <li>
                        <!-- Contact Info Box -->
                        <div class="contact-info-box">
                            <span class="icon lnr-icon-clock"></span>
                            <span class="title">Send Email</span>
                            Mon - Sat 8:00 - 6:30, Sunday - CLOSED
                        </div>
                    </li>
                </ul>


                
            </nav>
        </div><!-- End Mobile Menu -->

        <!-- Header Search -->
        <div class="search-popup">
            <span class="search-back-drop"></span>
            <button class="close-search"><span class="fa fa-times"></span></button>

            <div class="search-inner">
                <form method="post" action="https://kodesolution.com/html/2022/tronis-html/index.html">
                    <div class="form-group">
                        <input type="search" name="search-field" value="" placeholder="Search..." required="">
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </div>
                </form>
            </div>
        </div>
        <!-- End Header Search -->

        <!-- Sticky Header  -->
        <!-- End Sticky Menu -->
    </header>
      `
    }
}

customElements.define('my-header',MyHeader)

class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <footer class="main-footer">
        <div class="bg-image"  style="background-image: url(images/background/5.jpg)"></div>
        <div class="anim-icons">
            <span class="icon icon-plane-3 bounce-x"></span>
        </div>

        <!-- Contact info -->
        <div class="contacts-outer">
            <div class="auto-container">
                <div class="row">
                    <!-- Contact Info Block -->
                    <div class="contact-info-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight">
                        <div class="inner-box">
                            <div class="icon-box"><i class="icon flaticon-international-shipping-2"></i></div>
                            <h4 class="title">Address</h4>
                            <div class="text">106, Floor-1, Plot-140, Plaza Shopping Centre, Sheriff Devji Street Mumbai 400003</div>
                        </div>
                    </div>

                    <!-- Contact Info Block -->
                    <div class="contact-info-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="300ms">
                        <div class="inner-box">
                            <div class="icon-box"><i class="icon flaticon-stock-1"></i></div>
                            <h4 class="title">Contact</h4>
                            <div class="text">

                                <a href="mailto:saharamaritime@hotmail.com
                                ">saharamaritime@hotmail.com
                                </a><br>
                                <a href="tel:+91 9819980001">+91 9819980001</a><br>
    
                                <a href="tel:+022 23479362
                                ">+022 23479362
                                </a>

                            </div>
                        </div>
                    </div>

                    <!-- Contact Info Block -->
                    <div class="contact-info-block col-lg-4 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="600ms">
                        <div class="inner-box">
                            <div class="icon-box"><i class="icon flaticon-24-hours-2"></i></div>
                            <h4 class="title">Timing</h4>
                            <div class="text">Mon - Sat: 8 am - 5 pm, Sunday: CLOSED</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Contact info -->

        <!--Widgets Section-->
        <div class="widgets-section">
            <div class="auto-container">
                <div class="row">
                    <!--Footer Column-->
                    <div class="footer-column col-xl-4 col-lg-12 col-md-6 col-sm-12">
                    <div class="logo-box">
                    <div class="logo"><a href="#"><img width="150" 
                    height="50" src="images/footer-logo.png.jpg" alt="" title="Sahara Maritime"></a></div>
                </div>
                        <div class="footer-widget about-widget">
                            <div class="logo"><a href="index-2.html"><img src="images/logo-2.png" alt="" ></a></div>
                            <div class="text">We pride ourselves on providing customized logistics solutions for your unique needs and committed to delivering the highest level of customer satisfaction, and we look forward to working with you on your next export shipment</div>
                            <a href="page-about.html" class="theme-btn btn-style-one hvr-light small"><span class="btn-title">About</span></a>
                        </div>
                    </div>

                    <!--Footer Column-->
                    <div class="footer-column col-xl-5 col-lg-3 col-md-6 col-sm-12">
                        <div class="footer-widget">
                            <h3 class="widget-title">Service</h3>
                            <ul class="user-links">
                                <li><a href="#">Freight Forwarding</a></li>
                                <li><a href="#">Logistics and Consulting</a></li>
                                <li><a href="#">Warehousing and Distribution</a></li>
                                <li><a href="#">Real Time Tracking</a></li>
                                <li><a href="#">Customs Clearance and Brokerage</a></li>
                            </ul>
                        </div>
                    </div>


                    <!--Footer Column-->
                    <div class="footer-column col-xl-3 col-lg-4 col-md-6 col-sm-12">
                        <div class="footer-widget gallery-widget">
                            <h3 class="widget-title">Projects</h3>
                            <div class="widget-content">
                                <div class="outer clearfix">
                                    <figure class="image">
                                        <a href="#"><img src="images/resource/project-thumb-1.jpg" alt=""></a>
                                    </figure>

                                    <figure class="image">
                                        <a href="#"><img src="images/resource/project-thumb-2.jpg" alt=""></a>
                                    </figure>

                                    <figure class="image">
                                        <a href="#"><img src="images/resource/project-thumb-3.jpg" alt=""></a>
                                    </figure>

                                    <figure class="image">
                                        <a href="#"><img src="images/resource/project-thumb-4.jpg" alt=""></a>
                                    </figure>

                                    <figure class="image">
                                        <a href="#"><img src="images/resource/project-thumb-5.jpg" alt=""></a>
                                    </figure>

                                    <figure class="image">
                                        <a href="#"><img src="images/resource/project-thumb-6.jpg" alt=""></a>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!--Footer Column-->
                    

                </div>
            </div>
        </div>

        <!--Footer Bottom-->
        <div class="footer-bottom">
            <div class="auto-container">
                <div class="inner-container">
                    <div class="copyright-text">
                        <p>&copy; Copyright 2023 by  <a href="index.html">Sahara Maritime Pvt Ltd. All rights Reserved.</a></p>
                    </div>

                    
                </div>
            </div>
        </div>
    </footer>
        `
    }
}

customElements.define('my-footer',MyFooter)