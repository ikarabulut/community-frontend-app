<template>
  <div class="event-show">
    <h1>{{ event.name }}</h1>
    <p>Event Name: {{ event.name }}</p>
    <p>Event Date: {{ event.date }}</p>
    <p>Event Address: {{ event.address }}</p>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      event: {},
    };
  },
  created: function () {
    axios.get("/events/" + this.$route.params.id).then((response) => {
      this.event = response.data;
    });
  },

  methods: {},
};
</script>
