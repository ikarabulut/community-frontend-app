<template>
  <div class="home">
    <!-- header-banner -->
    <div id="header-banner">
      <div class="banner-content text-center">
        <div class="banner-border">
          <div class="banner-info">
            <h1>Community</h1>
            <p>Your hub for events to get more involved</p>
          </div>
          <!-- / banner-info -->
        </div>
        <!-- / banner-border -->
      </div>
      <!-- / banner-content -->
    </div>
    <section v-if="isLoggedIn()" id="my-account">
      <div class="container">
        <div class="row">
          <!-- / account-sidebar -->

          <div class="col-sm-10 account-info">
            <div id="personal-info" class="account-info-content">
              <h4>MY RSVPS</h4>
              <div v-for="rsvp in rsvps" :key="rsvp.id" class="row">
                <div class="col-xs-6 col-sm-8 col-md-10">
                  <p>
                    Event Name:
                    <span>{{ rsvp.event.name }}</span>
                  </p>
                  <p>
                    Event Date:
                    <span>{{ rsvp.event.date }}</span>
                  </p>
                  <p>
                    RSVP type:
                    <span>{{ rsvp.rsvp_type }}</span>
                  </p>
                  <router-link v-bind:to="`/events/${rsvp.event.id}`" class="btn btn-primary-filled btn-rounded">
                    <span>View Event</span>
                  </router-link>
                  <br />
                  <br />
                </div>
              </div>

              <!-- / row -->
            </div>

            <div id="personal-info" class="account-info-content">
              <h4>MY GROUPS</h4>
              <div v-for="group in groups" :key="group.id" class="row">
                <div class="col-xs-6 col-sm-8 col-md-10">
                  <p>
                    Group Name:
                    <span>{{ group.name }}</span>
                  </p>
                  <router-link v-bind:to="`/groups/${group.id}`" class="btn btn-primary-filled btn-rounded">
                    <span>View Group</span>
                  </router-link>
                  <br />
                  <br />
                </div>
              </div>

              <!-- / row -->
            </div>

            <div id="personal-info" class="account-info-content">
              <h4>MY EVENTS</h4>
              <div v-for="rsvp in rsvps" :key="rsvp.id" class="row">
                <div class="col-xs-6 col-sm-8 col-md-10">
                  <p>
                    Event Name:
                    <span>{{ rsvp.event.name }}</span>
                  </p>
                  <p>
                    Event Date:
                    <span>{{ rsvp.event.date }}</span>
                  </p>
                  <p>
                    RSVP type:
                    <span>{{ rsvp.rsvp_type }}</span>
                  </p>
                  <router-link v-bind:to="`/events/${rsvp.event.id}`" class="btn btn-primary-filled btn-rounded">
                    <span>View Event</span>
                  </router-link>
                  <br />
                  <br />
                </div>
              </div>

              <!-- / row -->
            </div>
            <!-- / personal-info -->

            <div id="shipping-info" class="account-info-content">
              <h4>MY GROUPS</h4>
              <p>
                Country:
                <span>USA</span>
              </p>
              <p>
                State:
                <span>Florida</span>
              </p>
              <p>
                City:
                <span>Miami</span>
              </p>
              <p>
                Address Line:
                <span>S Miami Ave, SW 20th, Suite 3864</span>
              </p>
              <p>
                ZIP Code:
                <span>33222</span>
              </p>
              <div class="account-info-footer">
                <a href="#x" class="btn btn-sm btn-primary btn-rounded no-margin">
                  <i class="fa fa-plus"></i>
                  <span>Add New Address</span>
                </a>
              </div>
            </div>
            <!-- / shipping-info -->

            <div id="my-orders" class="account-info-content">
              <h4>MY EVENTS</h4>
              <p>
                <a href="#x">Order #38726</a>
                <span>- Paid & Shipped</span>
                - Tracking No:
                <span>#TRCK182736</span>
              </p>
              <p>
                <a href="#x">Order #34823</a>
                <span>- Completed on 25.10.2016</span>
              </p>
              <p>
                <a href="#x">Order #23463</a>
                <span>- Completed on 16.08.2016</span>
              </p>
            </div>
            <!-- / my-orders -->

            <!-- / my-reviews -->

            <!-- / wishlist -->
          </div>
          <!-- / account-info -->
        </div>
        <!-- / row -->
      </div>
      <!-- / container -->
    </section>

    <!-- / header-banner -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      currentUserId: localStorage.getItem("user_id"),
      currentUser: {},
      rsvps: [],
      groups: [],
    };
  },
  created: function () {
    axios.get("/users", { id: this.currentUserId }).then((response) => {
      console.log("user show", response.data);
      this.currentUser = response.data;
      console.log(this.currentUser);
    });
    axios.get("/rsvps").then((response) => {
      console.log("Current User RSVPS", response.data);
      this.rsvps = response.data;
    });
    axios.get("/users/groups").then((response) => {
      console.log("Current User Groups", response.data);
      this.groups = response.data;
    });
  },
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
