<template>
  <div class="event-edit">
    <h1>Edit Event</h1>
    <form v-on:submit.prevent="updateEvent(event)">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="event.name" />
      Date:
      <input type="text" v-model="event.date" />
      Start Time:
      <input type="text" v-model="event.start_time" />
      Duration:
      <input type="text" v-model="event.duration" />
      Address:
      <input type="text" v-model="event.address" />
      Volunteers Needed:
      <input type="text" v-model="event.volunteers_needed" />
      Description:
      <input type="text" v-model="event.description" />
      <input type="submit" value="Update" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      event: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/events/" + this.$route.params.id).then((response) => {
      console.log("event show", response);
      this.group = response.data;
    });
  },
  methods: {
    updateEvent: function (event) {
      var editEventParams = event;
      axios
        .put("/events/" + event.id, editEventParams)
        .then((response) => {
          console.log("events update", response);
          this.$router.push("/events/:id");
        })
        .catch((error) => {
          console.log("events update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
