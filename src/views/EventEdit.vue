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
    Add Tags:
    <div>
      <p v-for="tag in tags" :key="tag.id">id: {{ tag.id }}, name: {{ tag.tag }}</p>
    </div>
    <br />
    Tag 1:
    <select v-model="tag1">
      <option v-for="tag in tags" :key="tag.id">
        {{ tag.id }}
      </option>
    </select>
    <button v-on:click.prevent="push1(tag1)">Submit tag</button>

    Tag 2:

    <select v-model="tag2">
      <option v-for="tag in tags" :key="tag.id">
        {{ tag.id }}
      </option>
    </select>
    <button v-on:click.prevent="push2(tag2)">Submit tag</button>

    Tag 3:
    <select v-model="tag3">
      <option v-for="tag in tags" :key="tag.id">
        {{ tag.id }}
      </option>
    </select>
    <button v-on:click.prevent="push3(tag3)">Submit tag</button>
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
      this.event_id = response.data;
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
        .post("/events/" + this.$route.params.id + "/tags", { tag_id: this.tag1, event: this.event.id })
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
