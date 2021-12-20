<template>
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
          <a class="navbar-brand" href="index.html"><img src="images/logo.png" alt="logo" /></a>
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
              <a href="index.html"><span>HOME</span></a>
            </li>
            <li>
              <a href="about.html"><span>ABOUT</span></a>
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
                <span>SHOP</span>
                <span class="dropdown-icon"></span>
              </a>
              <ul class="dropdown-menu animated zoomIn fast">
                <li>
                  <a href="shop.html"><span>FULL WIDTH</span></a>
                </li>
                <li>
                  <a href="shop-right.html"><span>RIGHT SIDEBAR</span></a>
                </li>
                <li>
                  <a href="shop-left.html"><span>LEFT SIDEBAR</span></a>
                </li>
                <li>
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
                <span>PAGES</span>
                <span class="dropdown-icon"></span>
              </a>
              <ul class="dropdown-menu animated zoomIn fast">
                <li>
                  <a href="faq.html"><span>FAQ</span></a>
                </li>
                <li>
                  <a href="shopping-cart.html"><span>SHOPPING CART</span></a>
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
            <li>
              <a href="contact.html"><span>CONTACT</span></a>
            </li>
          </ul>
        </div>
        <!--/ nav-collapse -->
      </div>
      <!-- / container -->
    </nav>
    <!-- / nav -->

    <!-- header-banner -->
    <div id="header-banner" class="demo-1">
      <div class="banner-content text-center">
        <div class="banner-border">
          <div class="banner-info">
            <h1>Minimal Shop</h1>
            <p>Minimal Fashion Shop</p>
          </div>
          <!-- / banner-info -->
        </div>
        <!-- / banner-border -->
      </div>
      <!-- / banner-content -->
    </div>
    <!-- / header-banner -->
  </header>
  <!-- / header -->
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
