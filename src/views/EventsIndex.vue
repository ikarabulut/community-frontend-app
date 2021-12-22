<template>
  <div class="events-index">
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
    <div class="container">
      <ul class="row shop list-unstyled" id="grid">
        <!-- product -->
        <div v-for="event in events" v-bind:key="event.id">
          <li class="col-xs-6 col-md-4 product m-product" data-groups='["mens"]'>
            <div class="img-bg-color primary">
              <!-- <h5 class="product-price">$49</h5> -->
              <a href="/events" class="product-link"></a>
              <!-- / product-link -->
              <img src="images/m-product.jpg" alt="" />
              <!-- / product-image -->

              <!-- product-hover-tools -->
              <div class="product-hover-tools">
                <a :href="'/events/' + event.id" class="view-btn" data-toggle="tooltip" title="View Event">
                  <i class="lnr lnr-eye"></i>
                </a>
                <!-- <a href="shopping-cart.html" class="cart-btn" data-toggle="tooltip" title="Add to Cart">
                <i class="lnr lnr-cart"></i>
              </a> -->
              </div>
              <!-- / product-hover-tools -->

              <!-- product-details -->
              <div class="product-details">
                <h5 class="product-title">{{ event.name }}</h5>
                <p class="product-category">{{ event.date }}</p>
              </div>
              <!-- / product-details -->
            </div>
            <br />
            <!-- / img-bg-color -->
          </li>
        </div>

        <!-- / product -->

        <!-- sizer -->
        <li class="col-xs-6 col-md-4 shuffle_sizer"></li>
        <!-- / sizer -->
      </ul>
      <!-- / products -->
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
      events: [],
    };
  },
  created: function () {
    this.indexGroups();
    this.indexEvents();
  },
  methods: {
    indexGroups: function () {
      axios.get("/groups").then((response) => {
        console.log("groups index", response);
        this.groups = response.data;
      });
    },
    indexEvents: function () {
      axios.get("/events").then((response) => {
        console.log("events index", response);
        this.events = response.data;
      });
    },
  },
};
</script>
