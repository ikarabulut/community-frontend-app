<template>
  <div class="event-show">
    <h1>{{ event.name }}</h1>
    <p>Event Name: {{ event.name }}</p>
    <p>Event Date: {{ event.date }}</p>
    <p>Event Address: {{ event.address }}</p>
    <p>Group: {{ event.group.name }}</p>
    Tags:
    <div v-for="eventTag in eventTags" :key="eventTag.id">
      <p>{{ eventTag.tag.tag }}</p>
    </div>
    <div>
      <select v-model="rsvp">
        <option>Going</option>
        <option>Maybe</option>
        <option>No</option>
      </select>
      <button v-on:click.prevent="pushRsvp(rsvp)">Submit RSVP</button>
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
