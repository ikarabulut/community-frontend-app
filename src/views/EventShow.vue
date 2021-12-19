<template>
  <div class="event-show">
    <h1>{{ event.name }}</h1>
    <p>Event Name: {{ event.name }}</p>
    <p>Event Date: {{ event.date }}</p>
    <p>Event Address: {{ event.address }}</p>
    Tags:
    <div v-for="eventTag in eventTags" :key="eventTag.id">
      <p>{{ eventTag.tag.tag }}</p>
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      event: {},
      eventTags: {},
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

  methods: {},
};
</script>
