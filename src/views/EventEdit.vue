<template>
  <div class="event-edit">
    <!-- header-banner -->
    <div id="header-banner">
      <div class="banner-content single-page text-center">
        <div class="banner-border">
          <div class="banner-info">
            <h1>Update Event</h1>
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
            <h4 class="space-left">UPDATE EVENT</h4>

            <div class="row">
              <div :key="event" class="col-sm-6">
                Event Name:
                <input type="text" class="form-control" name="name" v-model="event.name" />
                Event Date:
                <input type="date" class="form-control" name="date" v-model="event.date" />
                Start Time:
                <input type="text" class="form-control" name="start_time" v-model="event.start_time" />
                Duration (min):
                <input type="integer" class="form-control" name="duration" v-model="event.duration" />
              </div>
              <div class="col-sm-6">
                Address:
                <input type="address" class="form-control" name="address" v-model="event.address" />
                Volunteers Needed:
                <input type="integer" class="form-control" name="volunteers_needed" v-model="event.volunteers_needed" />
                Image Url:
                <input type="text" class="form-control" name="image_url" v-model="event.image_url" />
              </div>
            </div>
            <!-- / row -->

            <div class="row">
              <div class="col-sm-6">
                Tag 1:
                <select v-model="tag1" class="form-control">
                  <option v-for="tag in tags" :key="tag.id">{{ tag.tag }}</option>
                </select>
                <a v-on:click.prevent="push1(tag1)" class="btn btn-primary-filled btn-rounded">
                  <span>Submit Tag 1</span>
                </a>
                <br />
                <br />

                Tag 3:
                <select v-model="tag3" class="form-control" name="country">
                  <option v-for="tag in tags" :key="tag.id">{{ tag.tag }}</option>
                </select>
                <a v-on:click.prevent="push3(tag3)" class="btn btn-primary-filled btn-rounded">
                  <span>Submit Tag 3</span>
                </a>
                <br />
                <br />
              </div>
              <div class="col-sm-6">
                Tag 2:
                <select v-model="tag2" class="form-control" name="country">
                  <option v-for="tag in tags" :key="tag.id">{{ tag.tag }}</option>
                </select>
                <a v-on:click.prevent="push2(tag2)" class="btn btn-primary-filled btn-rounded">
                  <span>Submit Tag 2</span>
                </a>
              </div>
            </div>
            <!-- / row -->

            <div class="checkout-form-footer space-left space-right">
              Description:
              <textarea class="form-control" name="message" v-model="event.description"></textarea>
              <a v-on:click.prevent="updateEvent(event)" class="btn btn-primary-filled btn-rounded">
                <span>Update Event</span>
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
      event: {},
      errors: [],
      tags: [],
      tag1: "",
      tag2: "",
      tag3: "",
    };
  },
  created: function () {
    axios.get("/events/" + this.$route.params.id).then((response) => {
      console.log("event show", response.data);
      this.event = response.data;
    });
    this.indexTags();
  },
  methods: {
    indexTags: function () {
      axios.get("/tags").then((response) => {
        console.log("tags", response.data);
        this.tags = response.data;
      });
    },
    updateEvent: function (event) {
      var editEventParams = event;
      axios
        .put("/events/" + event.id, editEventParams)
        .then((response) => {
          console.log("events update", response);
          this.$router.push("/events/" + this.$route.params.id);
        })
        .catch((error) => {
          console.log("events update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
    push1: function (tag) {
      this.tag1 = tag;
      console.log(this.tag1);
      axios
        .post("/events/" + this.$route.params.id + "/tags", { tag: this.tag1, event: this.event.id })
        .then((response) => {
          console.log("tag event created", response.data);
        })
        .catch((error) => {
          console.log("tag event error", error.response);
          this.errors = error.response.data.errors;
        });
    },
    push2: function (tag) {
      this.tag2 = tag;
      console.log(this.tag2);
      axios
        .post("/events/" + this.$route.params.id + "/tags", { tag_id: this.tag2, event: this.event.id })
        .then((response) => {
          console.log("tag event created", response.data);
        })
        .catch((error) => {
          console.log("tag event error", error.response);
          this.errors = error.response.data.errors;
        });
    },
    push3: function (tag) {
      this.tag3 = tag;
      console.log(this.tag3);
      axios
        .post("/events/" + this.$route.params.id + "/tags", { tag_id: this.tag3, event: this.event.id })
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
