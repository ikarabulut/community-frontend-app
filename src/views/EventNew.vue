<template>
  <div class="event-new">
    <h1>New Event</h1>
    <form v-on:submit.prevent="createEvent()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="newEventParams.name" />
      Date:
      <input type="text" v-model="newEventParams.date" />
      Start Time:
      <input type="text" v-model="newEventParams.start_time" />
      Duration:
      <input type="text" v-model="newEventParams.duration" />
      Address:
      <input type="text" v-model="newEventParams.address" />
      Volunteers Needed:
      <input type="text" v-model="newEventParams.volunteers_needed" />
      Description:
      <input type="text" v-model="newEventParams.description" />
      <input type="submit" value="Create" />
    </form>
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
        .post("/groups/${:group_id}/events", this.newEventParams)
        .then((response) => {
          console.log("event create", response);
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
