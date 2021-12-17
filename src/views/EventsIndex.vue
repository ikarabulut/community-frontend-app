<template>
  <div class="events-index">
    <h1>All Events</h1>
    <div v-for="event in events" v-bind:key="event.id">
      <h2>{{ event.name }}</h2>
      <p>event group: {{ event.group.name }}</p>
      <a :href="`/events/${event.id}`" class="btn btn-primary">View Event</a>
    </div>
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
