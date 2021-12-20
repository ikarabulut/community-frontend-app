// shop.html template
<template>
  <div class="groups-index">
    <h1>All Groups</h1>
    <!-- header-banner -->
    <div id="header-banner">
      <div class="banner-content single-page text-center">
        <div class="banner-border">
          <div class="banner-info">
            <h1>Fashion Shop</h1>
            <p>Fullwidth shop page</p>
          </div>
          <!-- / banner-info -->
        </div>
        <!-- / banner-border -->
      </div>
      <!-- / banner-content -->
    </div>
    <!-- / header-banner -->
    <div v-for="group in groups" v-bind:key="group.id">
      <h2>{{ group.name }}</h2>
      <p>Mission Statement: {{ group.mission_statement }}</p>
      <a :href="`/groups/${group.id}`" class="btn btn-primary">View Group</a>
    </div>
    <div class="container">
      <p class="shop-results space-left">
        Showing
        <strong>1-12</strong>
        of
        <strong>36</strong>
        items.
        <!-- Filter Dropdown -->
        <!-- <span class="pull-right space-right">
          <select class="selectpicker">
            <optgroup label="Sort By:">
              <option>Default</option>
              <option>Popularity</option>
              <option>Newness</option>
              <option>Rating</option>
              <option>Price Low to High</option>
              <option>Price High to Low</option>
            </optgroup>
          </select>
        </span> -->
      </p>
      <ul v-for="group in groups" :key="group.id" class="row shop list-unstyled" id="grid">
        <!-- product -->
        <li class="col-xs-6 col-md-4 product m-product" data-groups='["mens"]'>
          <div class="img-bg-color primary">
            <!-- <h5 class="product-price">$49</h5> -->
            <a href="single-product.html" class="product-link"></a>
            <!-- / product-link -->
            <img src="images/m-product.jpg" alt="" />
            <!-- / product-image -->

            <!-- product-hover-tools -->
            <div class="product-hover-tools">
              <a href="single-product.html" class="view-btn" data-toggle="tooltip" title="View Group">
                <i class="lnr lnr-eye"></i>
              </a>
              <!-- <a href="shopping-cart.html" class="cart-btn" data-toggle="tooltip" title="Add to Cart">
                <i class="lnr lnr-cart"></i>
              </a> -->
            </div>
            <!-- / product-hover-tools -->

            <!-- product-details -->
            <div class="product-details">
              <h5 class="product-title">PRODUCT TITLE</h5>
              <p class="product-category">CATEGORY</p>
            </div>
            <!-- / product-details -->
          </div>
          <!-- / img-bg-color -->
        </li>
        <!-- / product -->

        <!-- product -->
        <li class="col-xs-6 col-md-4 product m-product" data-groups='["womens", "accessories"]'>
          <div class="img-bg-color primary">
            <h5 class="product-price">
              <del>$159</del>
              $79
            </h5>
            <a href="single-product.html" class="product-link"></a>
            <!-- / product-link -->
            <img src="images/m-product.jpg" alt="" />
            <!-- / product-image -->

            <!-- product-hover-tools -->
            <div class="product-hover-tools">
              <a href="single-product.html" class="view-btn" data-toggle="tooltip" title="View Product">
                <i class="lnr lnr-eye"></i>
              </a>
              <a href="shopping-cart.html" class="cart-btn" data-toggle="tooltip" title="Add to Cart">
                <i class="lnr lnr-cart"></i>
              </a>
            </div>
            <!-- / product-hover-tools -->

            <!-- product-details -->
            <div class="product-details">
              <h5 class="product-title">PRODUCT TITLE</h5>
              <p class="product-category">CATEGORY</p>
            </div>
            <!-- / product-details -->
          </div>
          <!-- / img-bg-color -->
        </li>
        <!-- / product -->

        <!-- product -->
        <li class="col-xs-6 col-md-4 product m-product" data-groups='["mens"]'>
          <div class="img-bg-color primary">
            <h5 class="product-price">$39</h5>
            <a href="single-product.html" class="product-link"></a>
            <!-- / product-link -->
            <img src="images/m-product.jpg" alt="" />
            <!-- / product-image -->

            <!-- product-hover-tools -->
            <div class="product-hover-tools">
              <a href="single-product.html" class="view-btn" data-toggle="tooltip" title="View Product">
                <i class="lnr lnr-eye"></i>
              </a>
              <a href="shopping-cart.html" class="cart-btn" data-toggle="tooltip" title="Add to Cart">
                <i class="lnr lnr-cart"></i>
              </a>
            </div>
            <!-- / product-hover-tools -->

            <!-- product-details -->
            <div class="product-details">
              <h5 class="product-title">PRODUCT TITLE</h5>
              <p class="product-category">CATEGORY</p>
            </div>
            <!-- / product-details -->
          </div>
          <!-- / img-bg-color -->
        </li>
        <!-- / product -->

        <!-- product -->
        <li class="col-xs-6 col-md-4 product m-product" data-groups='["accessories"]'>
          <div class="img-bg-color primary">
            <h5 class="product-price">$189</h5>
            <a href="single-product.html" class="product-link"></a>
            <!-- / product-link -->
            <img src="images/m-product.jpg" alt="" />
            <!-- / product-image -->

            <!-- product-hover-tools -->
            <div class="product-hover-tools">
              <a href="single-product.html" class="view-btn" data-toggle="tooltip" title="View Product">
                <i class="lnr lnr-eye"></i>
              </a>
              <a href="shopping-cart.html" class="cart-btn" data-toggle="tooltip" title="Add to Cart">
                <i class="lnr lnr-cart"></i>
              </a>
            </div>
            <!-- / product-hover-tools -->

            <!-- product-details -->
            <div class="product-details">
              <h5 class="product-title">PRODUCT TITLE</h5>
              <p class="product-category">CATEGORY</p>
            </div>
            <!-- / product-details -->
          </div>
          <!-- / img-bg-color -->
        </li>
        <!-- / product -->

        <!-- product -->
        <li class="col-xs-6 col-md-4 product m-product" data-groups='["womens"]'>
          <div class="img-bg-color primary">
            <h5 class="product-price">$69</h5>
            <a href="single-product.html" class="product-link"></a>
            <!-- / product-link -->
            <img src="images/m-product.jpg" alt="" />
            <!-- / product-image -->

            <!-- product-hover-tools -->
            <div class="product-hover-tools">
              <a href="single-product.html" class="view-btn" data-toggle="tooltip" title="View Product">
                <i class="lnr lnr-eye"></i>
              </a>
              <a href="shopping-cart.html" class="cart-btn" data-toggle="tooltip" title="Add to Cart">
                <i class="lnr lnr-cart"></i>
              </a>
            </div>
            <!-- / product-hover-tools -->

            <!-- product-details -->
            <div class="product-details">
              <h5 class="product-title">PRODUCT TITLE</h5>
              <p class="product-category">CATEGORY</p>
            </div>
            <!-- / product-details -->
          </div>
          <!-- / img-bg-color -->
        </li>
        <!-- / product -->

        <!-- product -->
        <li class="col-xs-6 col-md-4 product m-product" data-groups='["accessories"]'>
          <div class="img-bg-color primary">
            <h5 class="product-price">$359</h5>
            <a href="single-product.html" class="product-link"></a>
            <!-- / product-link -->
            <img src="images/m-product.jpg" alt="" />
            <!-- / product-image -->

            <!-- product-hover-tools -->
            <div class="product-hover-tools">
              <a href="single-product.html" class="view-btn" data-toggle="tooltip" title="View Product">
                <i class="lnr lnr-eye"></i>
              </a>
              <a href="shopping-cart.html" class="cart-btn" data-toggle="tooltip" title="Add to Cart">
                <i class="lnr lnr-cart"></i>
              </a>
            </div>
            <!-- / product-hover-tools -->

            <!-- product-details -->
            <div class="product-details">
              <h5 class="product-title">PRODUCT TITLE</h5>
              <p class="product-category">CATEGORY</p>
            </div>
            <!-- / product-details -->
          </div>
          <!-- / img-bg-color -->
        </li>
        <!-- / product -->

        <!-- product -->
        <li class="col-xs-6 col-md-4 product m-product" data-groups='["mens"]'>
          <div class="img-bg-color primary">
            <h5 class="product-price">$129</h5>
            <a href="single-product.html" class="product-link"></a>
            <!-- / product-link -->
            <img src="images/m-product.jpg" alt="" />
            <!-- / product-image -->

            <!-- product-hover-tools -->
            <div class="product-hover-tools">
              <a href="single-product.html" class="view-btn" data-toggle="tooltip" title="View Product">
                <i class="lnr lnr-eye"></i>
              </a>
              <a href="shopping-cart.html" class="cart-btn" data-toggle="tooltip" title="Add to Cart">
                <i class="lnr lnr-cart"></i>
              </a>
            </div>
            <!-- / product-hover-tools -->

            <!-- product-details -->
            <div class="product-details">
              <h5 class="product-title">PRODUCT TITLE</h5>
              <p class="product-category">CATEGORY</p>
            </div>
            <!-- / product-details -->
          </div>
          <!-- / img-bg-color -->
        </li>
        <!-- / product -->

        <!-- product -->
        <li class="col-xs-6 col-md-4 product m-product" data-groups='["womens", "accessories"]'>
          <div class="img-bg-color primary">
            <h5 class="product-price">
              <del>$119</del>
              $59
            </h5>
            <a href="single-product.html" class="product-link"></a>
            <!-- / product-link -->
            <img src="images/m-product.jpg" alt="" />
            <!-- / product-image -->

            <!-- product-hover-tools -->
            <div class="product-hover-tools">
              <a href="single-product.html" class="view-btn" data-toggle="tooltip" title="View Product">
                <i class="lnr lnr-eye"></i>
              </a>
              <a href="shopping-cart.html" class="cart-btn" data-toggle="tooltip" title="Add to Cart">
                <i class="lnr lnr-cart"></i>
              </a>
            </div>
            <!-- / product-hover-tools -->

            <!-- product-details -->
            <div class="product-details">
              <h5 class="product-title">PRODUCT TITLE</h5>
              <p class="product-category">CATEGORY</p>
            </div>
            <!-- / product-details -->
          </div>
          <!-- / img-bg-color -->
        </li>
        <!-- / product -->

        <!-- product -->
        <li class="col-xs-6 col-md-4 product m-product" data-groups='["mens"]'>
          <div class="img-bg-color primary">
            <h5 class="product-price">$159</h5>
            <a href="single-product.html" class="product-link"></a>
            <!-- / product-link -->
            <img src="images/m-product.jpg" alt="" />
            <!-- / product-image -->

            <!-- product-hover-tools -->
            <div class="product-hover-tools">
              <a href="single-product.html" class="view-btn" data-toggle="tooltip" title="View Product">
                <i class="lnr lnr-eye"></i>
              </a>
              <a href="shopping-cart.html" class="cart-btn" data-toggle="tooltip" title="Add to Cart">
                <i class="lnr lnr-cart"></i>
              </a>
            </div>
            <!-- / product-hover-tools -->

            <!-- product-details -->
            <div class="product-details">
              <h5 class="product-title">PRODUCT TITLE</h5>
              <p class="product-category">CATEGORY</p>
            </div>
            <!-- / product-details -->
          </div>
          <!-- / img-bg-color -->
        </li>
        <!-- / product -->

        <!-- product -->
        <li class="col-xs-6 col-md-4 product m-product" data-groups='["accessories"]'>
          <div class="img-bg-color primary">
            <h5 class="product-price">$239</h5>
            <a href="single-product.html" class="product-link"></a>
            <!-- / product-link -->
            <img src="images/m-product.jpg" alt="" />
            <!-- / product-image -->

            <!-- product-hover-tools -->
            <div class="product-hover-tools">
              <a href="single-product.html" class="view-btn" data-toggle="tooltip" title="View Product">
                <i class="lnr lnr-eye"></i>
              </a>
              <a href="shopping-cart.html" class="cart-btn" data-toggle="tooltip" title="Add to Cart">
                <i class="lnr lnr-cart"></i>
              </a>
            </div>
            <!-- / product-hover-tools -->

            <!-- product-details -->
            <div class="product-details">
              <h5 class="product-title">PRODUCT TITLE</h5>
              <p class="product-category">CATEGORY</p>
            </div>
            <!-- / product-details -->
          </div>
          <!-- / img-bg-color -->
        </li>
        <!-- / product -->

        <!-- product -->
        <li class="col-xs-6 col-md-4 product m-product" data-groups='["womens"]'>
          <div class="img-bg-color primary">
            <h5 class="product-price">$89</h5>
            <a href="single-product.html" class="product-link"></a>
            <!-- / product-link -->
            <img src="images/m-product.jpg" alt="" />
            <!-- / product-image -->

            <!-- product-hover-tools -->
            <div class="product-hover-tools">
              <a href="single-product.html" class="view-btn" data-toggle="tooltip" title="View Product">
                <i class="lnr lnr-eye"></i>
              </a>
              <a href="shopping-cart.html" class="cart-btn" data-toggle="tooltip" title="Add to Cart">
                <i class="lnr lnr-cart"></i>
              </a>
            </div>
            <!-- / product-hover-tools -->

            <!-- product-details -->
            <div class="product-details">
              <h5 class="product-title">PRODUCT TITLE</h5>
              <p class="product-category">CATEGORY</p>
            </div>
            <!-- / product-details -->
          </div>
          <!-- / img-bg-color -->
        </li>
        <!-- / product -->

        <!-- product -->
        <li class="col-xs-6 col-md-4 product m-product" data-groups='["accessories"]'>
          <div class="img-bg-color primary">
            <h5 class="product-price">$309</h5>
            <a href="single-product.html" class="product-link"></a>
            <!-- / product-link -->
            <img src="images/m-product.jpg" alt="" />
            <!-- / product-image -->

            <!-- product-hover-tools -->
            <div class="product-hover-tools">
              <a href="single-product.html" class="view-btn" data-toggle="tooltip" title="View Product">
                <i class="lnr lnr-eye"></i>
              </a>
              <a href="shopping-cart.html" class="cart-btn" data-toggle="tooltip" title="Add to Cart">
                <i class="lnr lnr-cart"></i>
              </a>
            </div>
            <!-- / product-hover-tools -->

            <!-- product-details -->
            <div class="product-details">
              <h5 class="product-title">PRODUCT TITLE</h5>
              <p class="product-category">CATEGORY</p>
            </div>
            <!-- / product-details -->
          </div>
          <!-- / img-bg-color -->
        </li>
        <!-- / product -->

        <!-- sizer -->
        <li class="col-xs-6 col-md-4 shuffle_sizer"></li>
        <!-- / sizer -->
      </ul>
      <!-- / products -->

      <div class="text-center more-button space-top-30">
        <a href="#x" class="btn btn-default-filled">
          <i class="lnr lnr-sync"></i>
          <span>LOAD MORE</span>
        </a>
      </div>
    </div>
    <!-- / container -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      groups: [],
    };
  },
  created: function () {
    this.indexGroups();
  },
  methods: {
    indexGroups: function () {
      axios.get("/groups").then((response) => {
        console.log("groups index", response);
        this.groups = response.data;
      });
    },
  },
};
</script>
