<template>
  <div class="group-show">
    <!-- header-banner -->
    <div id="header-banner">
      <div class="banner-content single-page text-center">
        <div class="banner-border">
          <div class="banner-info">
            <h1>Group</h1>
            <p>{{ group.name }}</p>
          </div>
          <!-- / banner-info -->
        </div>
        <!-- / banner-border -->
      </div>
      <!-- / banner-content -->
    </div>
    <!-- / header-banner -->
    <div class="container space-top-30">
      <div class="row">
        <!-- product content area -->
        <div class="col-sm-6 col-md-7 product-content-area">
          <div class="product-content-area">
            <div id="product-slider" class="carousel slide" data-ride="carousel">
              <!-- wrapper for slides -->
              <div class="carousel-inner" role="listbox">
                <div class="item active">
                  <img src="images/product-slide1.jpg" alt="IMAGE PLACEHOLDER" />
                </div>
              </div>
              <!-- / wrapper for slides -->
            </div>
            <!-- / product-slider -->

            <ul class="nav nav-tabs" role="tablist">
              <li class="active">
                <a href="#description" role="tab" data-toggle="tab" aria-expanded="true">DESCRIPTION</a>
              </li>
            </ul>
            <!-- / nav-tabs -->
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane animated fadeIn active" id="description">
                <p>
                  {{ group.description }}
                </p>
              </div>
              <!-- / description-tab -->

              <!-- / info-tab -->

              <!-- / reviews-tab -->
            </div>
            <!-- / tab-content -->
          </div>
          <!-- / product-content-area -->
        </div>
        <!-- / product-content-area -->

        <!-- product sidebar area -->
        <div :key="group.id" class="col-sm-6 col-md-5 product-sidebar">
          <div class="product-sidebar-details">
            <h4>{{ group.name }}</h4>
            <p>
              <b>Mission Statement:</b>

              {{ group.mission_statement }}
            </p>
            <div class="product-info">
              <div class="info">
                <p>
                  <i class="lnr lnr-heart"></i>
                  <span>Website: {{ group.website }}</span>
                </p>
              </div>
              <div class="info">
                <p>
                  <i class="lnr lnr-heart"></i>
                  <span>Email: {{ group.email }}</span>
                </p>
              </div>
              <div class="info">
                <p>
                  <i class="lnr lnr-heart"></i>
                  <span>Address: {{ group.address }}</span>
                </p>
              </div>
              <div class="info">
                <p>
                  <i class="lnr lnr-heart"></i>
                  <span>Cause(s):</span>
                </p>
              </div>
            </div>
            <!-- / product-info -->

            <div class="buy-product">
              <div class="space-25">&nbsp;</div>

              <a
                v-if="$parent.getUserId() == group.user_id"
                :href="`/groups/${group.id}/events/new`"
                class="btn btn-primary-filled btn-rounded"
              >
                <i class=""></i>
                <span>Create Event</span>
              </a>
              <a
                v-if="$parent.getUserId() == group.user_id"
                :href="`/groups/${group.id}/edit`"
                class="btn btn-success-filled btn-rounded"
              >
                <i class=""></i>
                <span>Update Group</span>
              </a>
            </div>
          </div>
          <!-- product-details -->
        </div>
        <!-- / col-sm-4 col-md-3 -->
        <!-- / product sidebar area -->
      </div>
      <!-- / row -->
      <h4 class="space-top-30 space-bottom-30 space-left">Upcoming Events</h4>
      <div id="related-products">
        <ul class="row shop list-unstyled" id="grid">
          <!-- product -->
          <li
            v-for="groupEvent in groupEvents"
            :key="groupEvent.id"
            class="col-xs-6 col-md-4 product m-product"
            data-groups='["mens"]'
          >
            <h5>{{ groupEvent.name }}</h5>
            <div class="img-bg-color primary">
              <h5 class="product-price">{{ groupEvent.date }}</h5>
              <a :href="`/events/${groupEvent.id}`" class="product-link"></a>
              <!-- / product-link -->
              <img :src="groupEvent.image_url" alt="Volunteer photo" />
              <!-- / product-image -->

              <!-- product-hover-tools -->
              <div class="product-hover-tools">
                <a :href="`/events/${groupEvent.id}`" class="view-btn" data-toggle="tooltip" title="View Product">
                  <i class="lnr lnr-eye"></i>
                </a>
                <!-- <a href="shopping-cart.html" class="cart-btn" data-toggle="tooltip" title="Add to Cart">
                  <i class="lnr lnr-cart"></i>
                </a> -->
              </div>
              <!-- / product-hover-tools -->

              <!-- product-details -->
              <div class="product-details">
                <h5 class="product-title">{{ groupEvent.name }}</h5>
                <p class="product-category">Volunteers Needed: {{ groupEvent.volunteers_needed }}</p>
              </div>
              <!-- / product-details -->
            </div>
            <!-- / img-bg-color -->
          </li>
        </ul>
      </div>
      <!-- / related-products -->
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      group: {},
      groupEvents: [],
    };
  },
  created: function () {
    axios.get("/groups/" + this.$route.params.id).then((response) => {
      this.group = response.data;
    });

    axios.get("groups/" + this.$route.params.id + "/events").then((response) => {
      console.log("events index", response.data);
      this.groupEvents = response.data;
    });
  },

  methods: {},
};
</script>
