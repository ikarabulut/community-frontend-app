<template>
  <div id="app">
    <!-- header -->
    <header>
      <!-- nav -->
      <nav class="navbar navbar-default nav-sec navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/"><img src="images/logo.png" alt="logo" /></a>
          </div>
          <!-- / navbar-header -->
          <div class="secondary-nav">
            <a href="login-register.html" class="my-account space-right"><i class="fa fa-user"></i></a>
            <a href="shopping-cart.html" class="shopping-cart">
              <i class="fa fa-shopping-cart"></i>
              <span class="cart-badge">2</span>
            </a>
          </div>
          <div class="navbar-collapse collapse text-center">
            <ul class="nav navbar-nav">
              <li class="active">
                <a href="/"><span>HOME</span></a>
              </li>
              <li>
                <a href="contact.html"><span>MY HOME (BUILD)</span></a>
              </li>
              <li>
                <a href="/about"><span>ABOUT</span></a>
              </li>
              <!-- <li class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>BLOG</span>
                  <span class="dropdown-icon"></span>
                </a>
                <ul class="dropdown-menu animated zoomIn fast">
                  <li>
                    <a href="blog.html"><span>BLOG FULLWIDTH</span></a>
                  </li>
                  <li>
                    <a href="blog-masonry.html"><span>BLOG MASONRY</span></a>
                  </li>
                  <li>
                    <a href="blog-sidebar.html"><span>BLOG SIDEBAR</span></a>
                  </li>
                  <li>
                    <a href="single-post-full.html"><span>POST FULLWIDTH</span></a>
                  </li>
                  <li>
                    <a href="single-post.html"><span>POST SIDEBAR</span></a>
                  </li>
                </ul>
              </li> -->
              <li class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>GROUPS</span>
                  <span class="dropdown-icon"></span>
                </a>
                <ul class="dropdown-menu animated zoomIn fast">
                  <li>
                    <a href="/groups"><span>ALL GROUPS</span></a>
                  </li>
                  <li>
                    <a href="shop-right.html"><span>MY GROUPS (BUILD)</span></a>
                  </li>
                  <li>
                    <a href="/groups/new"><span>CREATE GROUP</span></a>
                  </li>
                  <!-- <li>
                    <a href="shop-masonry.html"><span>MASONRY</span></a>
                  </li>
                  <li>
                    <a href="single-product.html"><span>SINGLE PRODUCT</span></a>
                  </li>
                  <li>
                    <a href="single-product2.html"><span>SINGLE PRODUCT 2</span></a>
                  </li>
                  <li>
                    <a href="single-product3.html"><span>SINGLE PRODUCT 3</span></a>
                  </li> -->
                </ul>
              </li>
              <li class="dropdown">
                <a
                  href="#"
                  class="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>EVENTS</span>
                  <span class="dropdown-icon"></span>
                </a>
                <ul class="dropdown-menu animated zoomIn fast">
                  <li>
                    <a href="/events"><span>ALL EVENTS</span></a>
                  </li>
                  <li>
                    <a href="shopping-cart.html"><span>MY EVENTS (BUILD)</span></a>
                  </li>
                  <li>
                    <a href="login-register.html"><span>LOGIN / REGISTER</span></a>
                  </li>
                  <li>
                    <a href="my-account.html"><span>MY ACCOUNT</span></a>
                  </li>
                  <li>
                    <a href="checkout.html"><span>CHECKOUT</span></a>
                  </li>
                  <li>
                    <a href="404.html"><span>404 PAGE</span></a>
                  </li>
                  <li>
                    <a href="components.html"><span>COMPONENTS</span></a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <!--/ nav-collapse -->
        </div>
        <!-- / container -->
      </nav>
      <!-- / nav -->

      <!-- header-banner -->
      <!-- <div id="header-banner" class="demo-1">
        <div class="banner-content text-center">
          <div class="banner-border">
            <div class="banner-info">
              <h1>Minimal Shop</h1>
              <p>Minimal Fashion Shop</p>
            </div> -->
      <!-- / banner-info -->
      <!-- </div> -->
      <!-- / banner-border -->
      <!-- </div> -->
      <!-- / banner-content -->
      <!-- </div> -->
      <!-- / header-banner -->
    </header>
    <!-- / header -->
    <!-- ROUTER VIEW -->
    <router-view />

    <!-- footer -->
    <footer class="light-footer">
      <div class="widget-area">
        <div class="container">
          <div class="row">
            <div class="col-md-4 widget">
              <div class="about-widget">
                <div class="widget-title-image">
                  <img src="images/logo2.png" alt="" />
                </div>
                <p>
                  Vivamus consequat lacus quam, nec egestas quam egestas sit amet. Suspendisse et risus gravida tellus
                  aliquam ullamcorper. Pellentesque elit dolor, ornare ut lorem nec, convallis nibh accumsan lacus morbi
                  leo lipsum.
                </p>
              </div>
              <!-- / about-widget -->
            </div>
            <!-- / widget -->
            <!-- / first widget -->

            <div class="col-md-2 widget">
              <div class="widget-title">
                <h4>BRANDS</h4>
              </div>
              <div class="link-widget">
                <div class="info">
                  <a href="#x">Brand 1</a>
                </div>
                <div class="info">
                  <a href="#x">Brand 2</a>
                </div>
                <div class="info">
                  <a href="#x">Brand 3</a>
                </div>
                <div class="info">
                  <a href="#x">Brand 4</a>
                </div>
              </div>
            </div>
            <!-- / widget -->
            <!-- / second widget -->

            <div class="col-md-2 widget">
              <div class="widget-title">
                <h4>SUPPORT</h4>
              </div>
              <div class="link-widget">
                <div class="info">
                  <a href="#x">Terms & Conditions</a>
                </div>
                <div class="info">
                  <a href="#x">Shipping & Return</a>
                </div>
                <div class="info">
                  <a href="faq.html">F.A.Q</a>
                </div>
                <div class="info">
                  <a href="contact.html">Contact</a>
                </div>
              </div>
            </div>
            <!-- / widget -->
            <!-- / third widget -->

            <div class="col-md-4 widget">
              <div class="widget-title">
                <h4>CONTACT</h4>
              </div>
              <div class="contact-widget">
                <div class="info">
                  <p>
                    <i class="lnr lnr-map-marker"></i>
                    <span>Miami, S Miami Ave, SW 20th, Store No.1</span>
                  </p>
                </div>
                <div class="info">
                  <a href="tel:+0123456789">
                    <i class="lnr lnr-phone-handset"></i>
                    <span>+0123 456 789</span>
                  </a>
                </div>
                <div class="info">
                  <a href="mailto:hello@yoursite.com">
                    <i class="lnr lnr-envelope"></i>
                    <span>office@yoursite.com</span>
                  </a>
                </div>
                <div class="info">
                  <i class="lnr lnr-thumbs-up"></i>
                  <span class="social text-left">
                    <a class="no-margin" href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-google-plus"></i></a>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                    <a href="#"><i class="fa fa-pinterest"></i></a>
                  </span>
                </div>
              </div>
              <!-- / contact-widget -->
            </div>
            <!-- / widget -->
            <!-- / fourth widget -->
          </div>
          <!-- / row -->
        </div>
        <!-- / container -->
      </div>
      <!-- / widget-area -->
      <div class="footer-info">
        <div class="container">
          <div class="pull-left copyright">
            <p><strong>© MS - MINIMAL SHOP THEME</strong></p>
          </div>
          <span class="pull-right">
            <img src="images/visa.png" alt="" />
            <img src="images/mastercard.png" alt="" />
            <img src="images/discover.png" alt="" />
            <img src="images/paypal.png" alt="" />
          </span>
        </div>
        <!-- / container -->
      </div>
      <!-- / footer-info -->
    </footer>
    <!-- / footer -->
  </div>
</template>

<style></style>

<script>
export default {
  data: function () {
    return {
      flashMessage: "",
    };
  },
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>
