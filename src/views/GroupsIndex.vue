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
      <ul class="row shop list-unstyled" id="grid">
        <!-- product -->
        <div v-for="group in groups" v-bind:key="group.id">
          <li class="col-xs-6 col-md-4 product m-product" data-groups='["mens"]'>
            <div class="img-bg-color primary">
              <!-- <h5 class="product-price">$49</h5> -->
              <a href="/groups" class="product-link"></a>
              <!-- / product-link -->
              <img src="images/m-product.jpg" alt="" />
              <!-- / product-image -->

              <!-- product-hover-tools -->
              <div class="product-hover-tools">
                <a href="/groups/${group.id}" class="view-btn" data-toggle="tooltip" title="View Group">
                  <i class="lnr lnr-eye"></i>
                </a>
                <!-- <a href="shopping-cart.html" class="cart-btn" data-toggle="tooltip" title="Add to Cart">
                <i class="lnr lnr-cart"></i>
              </a> -->
              </div>
              <!-- / product-hover-tools -->

              <!-- product-details -->
              <div class="product-details">
                <h5 class="product-title">{{ group.name }}</h5>
                <p class="product-category">{{ group.mission_statement }}</p>
              </div>
              <!-- / product-details -->
            </div>
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
