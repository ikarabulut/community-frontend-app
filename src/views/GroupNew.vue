<template>
  <div class="group-new">
    <form v-on:submit.prevent="createGroup()">
      <h1>Create a Group!</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="newGroupParams.name" />
      </div>
      <div>
        <label>Email:</label>
        <input type="text" v-model="newGroupParams.email" />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" v-model="newGroupParams.address" />
      </div>
      <div>
        <label>Website:</label>
        <input type="text" v-model="newGroupParams.website" />
      </div>
      <div>
        <label>Mission Statement:</label>
        <input type="text" v-model="newGroupParams.mission_statement" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newGroupParams: {},
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createGroup: function () {
      axios
        .post("/groups", this.newGroupParams)
        .then((response) => {
          console.log("group create", response);
          this.$router.push("/groups");
        })
        .catch((error) => {
          console.log("groups create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
