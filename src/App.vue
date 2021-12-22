<template>
  <div id="app">
    <!-- header -->
    <header>
      <!-- nav -->
      <nav class="navbar navbar-dsdefault nav-sec navbar-fixed-top">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">
              <img class="logo" src="https://images.pexels.com/photos/4672720/pexels-photo-4672720.jpeg" alt="logo" />
            </a>
          </div>
          <!-- / navbar-header -->
          <div class="secondary-nav">
            <a v-if="isLoggedIn()" class="my-account space-right">
              Welcome: {{ this.current_user }}
              <i class="fa fa-user"></i>
            </a>
          </div>
          <div class="navbar-collapse collapse text-center">
            <ul class="nav navbar-nav">
              <li class="active">
                <a href="/"><span>HOME</span></a>
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

                  <li v-if="isLoggedIn()">
                    <a href="/group/new"><span>CREATE GROUP</span></a>
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
                  <span>ACCOUNT</span>
                  <span class="dropdown-icon"></span>
                </a>
                <ul class="dropdown-menu animated zoomIn fast">
                  <li>
                    <a href="/signup"><span>LOGIN / REGISTER</span></a>
                  </li>
                  <li>
                    <a href="/logout"><span>LOGOUT</span></a>
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
                  <img class="logo" src="https://images.pexels.com/photos/4672720/pexels-photo-4672720.jpeg" alt="" />
                </div>
                <p>
                  I'm baby etsy iPhone shaman bicycle rights +1 meh. Af flexitarian keffiyeh neutra fanny pack offal yr
                  venmo schlitz tbh mlkshk. Normcore hoodie portland, pitchfork pinterest migas bitters mlkshk before
                  they sold out. Banjo seitan keytar raclette. Umami shabby chic polaroid, helvetica kale chips
                  readymade palo santo. Salvia +1 locavore, four loko poutine artisan ennui food truck gentrify mustache
                  squid activated charcoal.
                </p>
              </div>
              <!-- / about-widget -->
            </div>
            <!-- / widget -->
            <!-- / first widget -->

            <!-- / widget -->
            <!-- / second widget -->

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
                    <span>Chicago, IL</span>
                  </p>
                </div>

                <div class="info">
                  <a href="mailto:hello@yoursite.com">
                    <i class="lnr lnr-envelope"></i>
                    <span>contactus@communityapp.com</span>
                  </a>
                </div>
                <div class="info">
                  <i class="lnr lnr-thumbs-up"></i>
                  <span class="social text-left">
                    <a class="no-margin" href="#"><i class="fa fa-facebook"></i></a>
                    <a href="#"><i class="fa fa-twitter"></i></a>
                    <a href="#"><i class="fa fa-linkedin"></i></a>
                    <a href="#"><i class="fa fa-instagram"></i></a>
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
      current_user: localStorage.getItem("name"),
    };
  },
  created: function () {
    localStorage.getItem("name");
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
