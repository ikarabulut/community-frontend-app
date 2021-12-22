<template>
  <div class="event-show">
    <!-- header-banner -->
    <div id="header-banner">
      <div class="banner-content single-page text-center">
        <div class="banner-border">
          <div :key="event" class="banner-info">
            <h1>Event</h1>
            <p>{{ event.name }}</p>
          </div>
          <!-- / banner-info -->
        </div>
        <!-- / banner-border -->
      </div>
      <!-- / banner-content -->
    </div>

    <!-- / header -->

    <!-- content -->

    <!-- shop single-product -->

    <div class="container space-top-30">
      <div class="row">
        <!-- product content area -->
        <div class="col-sm-6 col-md-7 product-content-area">
          <div class="product-content-area">
            <div id="product-slider" class="carousel slide" data-ride="carousel">
              <!-- wrapper for slides -->
              <div class="carousel-inner" role="listbox">
                <div class="item active">
                  <img :src="event.image_url" alt="Event Image Placeholder" />
                </div>
              </div>
              <!-- / wrapper for slides -->

              <!-- controls -->

              <!-- / controls -->
            </div>
            <!-- / product-slider -->

            <ul class="nav nav-tabs" role="tablist">
              <li class="active">
                <a href="#description" role="tab" data-toggle="tab" aria-expanded="true">DESCRIPTION</a>
              </li>
            </ul>
            <!-- / nav-tabs -->
            <div :key="event.id" class="tab-content">
              <div role="tabpanel" class="tab-pane animated fadeIn active" id="description">
                <p>
                  {{ event.description }}
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
        <div class="col-sm-6 col-md-5 product-sidebar">
          <div class="product-sidebar-details">
            <h4 :key="event.id">{{ event.name }}</h4>
            <p :key="event.id">This event is hosted by {{ event.group.name }}</p>
            <div class="product-info">
              <div :key="event.id" class="info">
                <p>
                  <i class="lnr lnr-heart"></i>
                  <span>Date:{{ event.date }}</span>
                </p>
              </div>
              <div :key="event.id" class="info">
                <p>
                  <i class="lnr lnr-heart"></i>
                  <span>Start Time:{{ event.start_time }}</span>
                </p>
              </div>
              <div :key="event.id" class="info">
                <p>
                  <i class="lnr lnr-heart"></i>
                  <span>Duration:{{ event.duration }}</span>
                </p>
              </div>
              <div class="info">
                <p>
                  <i class="lnr lnr-heart"></i>
                  <span>
                    Tags:
                    <a h-ref="" v-for="eventTag in eventTags" :key="eventTag.id">| {{ eventTag.tag.tag }} |</a>
                  </span>
                </p>
              </div>
              <div class="info">
                <p>
                  <i class="lnr lnr-menu"></i>
                  <span>Volunteers Needed: {{ event.volunteers_needed }}</span>
                </p>
                <p>
                  <i class="lnr lnr-menu"></i>
                  <span>RSVPs (Going):</span>
                </p>
                <p>
                  <i class="lnr lnr-menu"></i>
                  <span>RSVPs (Maybe):</span>
                </p>
              </div>
            </div>
            <!-- / product-info -->

            <div class="buy-product">
              <div v-if="$parent.isLoggedIn()" class="options">
                <span class="selectors">
                  <select v-model="rsvp" class="selectpicker">
                    <option>-</option>
                    <option>Going</option>
                    <option>Maybe</option>
                    <option>No</option>
                  </select>
                </span>
              </div>
              <br />

              <!-- / options -->

              <div class="space-25">&nbsp;</div>

              <a
                v-if="$parent.isLoggedIn()"
                v-on:click.prevent="pushRsvp(rsvp)"
                class="btn btn-primary-filled btn-rounded"
              >
                <i class=""></i>
                <span>Submit RSVP</span>
              </a>
              <a
                v-if="$parent.getUserId() == event.group.user_id"
                :href="`/events/${event.id}/edit`"
                class="btn btn-success-filled btn-rounded"
              >
                <i class=""></i>
                <span>Update Event</span>
              </a>
            </div>
          </div>
          <!-- product-details -->
        </div>
        <!-- / col-sm-4 col-md-3 -->
        <!-- / product sidebar area -->
      </div>
      <!-- / row -->

      <!-- / related-products -->
    </div>
    <!-- / container -->

    <!-- / shop single-product -->

    <!-- / content -->

    <!-- scroll to top -->
    <a href="#top" class="scroll-to-top page-scroll is-hidden" data-nav-status="toggle">
      <i class="fa fa-angle-up"></i>
    </a>
    <!-- / scroll to top -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      event: {},
      eventTags: [],
      rsvp: "",
      user_id: localStorage.getItem("user_id"),
    };
  },
  created: function () {
    axios.get("/events/" + this.$route.params.id).then((response) => {
      this.event = response.data;
    });

    axios.get("/events/" + this.$route.params.id + "/tags").then((response) => {
      console.log("event tags", response.data);
      this.eventTags = response.data;
    });
  },

  methods: {
    pushRsvp: function (rsvp) {
      this.rsvp = rsvp;
      console.log(this.rsvp);
      console.log(localStorage.getItem("user_id"));
      axios
        .post("/events/" + this.$route.params.id + "/rsvps", {
          user_id: this.$route.params.user_id,
          event_id: localStorage.getItem("user_id"),
          rsvp_type: this.rsvp,
        })
        .then((response) => {
          console.log("tag event created", response.data);
        })
        .catch((error) => {
          console.log("tag event error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
