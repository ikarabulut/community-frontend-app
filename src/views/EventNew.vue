<template>
  <div class="event-new">
    <!-- header-banner -->
    <div id="header-banner">
      <div class="banner-content single-page text-center">
        <div class="banner-border">
          <div class="banner-info">
            <h1>Create Event</h1>
          </div>
          <!-- / banner-info -->
        </div>
        <!-- / banner-border -->
      </div>
      <!-- / banner-content -->
    </div>
    <!-- / header-banner -->

    <!-- / header -->

    <!-- content -->

    <!-- shopping-cart -->
    <div id="checkout">
      <div class="container">
        <div class="row checkout-screen">
          <div class="col-sm-8 checkout-form">
            <h4 class="space-left">CREATE EVENT</h4>

            <div class="row">
              <div class="col-sm-6">
                Event Name:
                <input type="text" class="form-control" name="name" v-model="newEventParams.name" />
                Event Date:
                <input type="date" class="form-control" name="date" v-model="newEventParams.date" />
                Start Time:
                <input type="text" class="form-control" name="start_time" v-model="newEventParams.start_time" />
                Duration (min):
                <input type="integer" class="form-control" name="duration" v-model="newEventParams.duration" />
              </div>
              <div class="col-sm-6">
                Address:
                <input type="address" class="form-control" name="address" v-model="newEventParams.address" />
                Volunteers Needed:
                <input
                  type="integer"
                  class="form-control"
                  name="volunteers_needed"
                  v-model="newEventParams.volunteers_needed"
                />
                Image Url:
                <input type="text" class="form-control" name="image_url" v-model="newEventParams.image_url" />
              </div>
            </div>

            <div class="checkout-form-footer space-left space-right">
              Description:
              <textarea class="form-control" name="message" v-model="newEventParams.description"></textarea>
              <a v-on:click.prevent="createEvent()" class="btn btn-primary-filled btn-rounded">
                <span>Create Event</span>
              </a>
            </div>
            <!-- / checkout-form-footer -->
          </div>
          <!-- / checkout-form -->

          <!-- / checkout-total -->
        </div>
        <!-- / row -->
      </div>
      <!-- / container -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newEventParams: {},
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createEvent: function () {
      axios
        .post("/groups/" + this.$route.params.id + "/events", this.newEventParams)
        .then((response) => {
          console.log("event create", response.data);
          this.$router.push("/events");
        })
        .catch((error) => {
          console.log("groups create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
