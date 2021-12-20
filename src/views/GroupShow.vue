<template>
  <div class="group-show">
    <!-- header-banner -->
    <div id="header-banner">
      <div class="banner-content single-page text-center">
        <div class="banner-border">
          <div class="banner-info">
            <h1>Single Product</h1>
            <p>Fashion Product</p>
          </div>
          <!-- / banner-info -->
        </div>
        <!-- / banner-border -->
      </div>
      <!-- / banner-content -->
    </div>
    <!-- / header-banner -->
    <h1>{{ group.name }}</h1>
    <p>Group Name: {{ group.name }}</p>
    <p>Group Admin: {{ group.user_id }}</p>
    <p>Mission Statement: {{ group.mission_statement }}</p>
    <a :href="`${group.id}/events/new`" class="btn btn-primary">Create Event</a>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      group: {},
      rsvp: "",
    };
  },
  created: function () {
    axios.get("/groups/" + this.$route.params.id).then((response) => {
      this.group = response.data;
    });
  },

  methods: {},
};
</script>
