<template>
  <div class="group-new">
    <h1>New Group</h1>
    <form v-on:submit.prevent="createGroup()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="newGroupParams.name" />
      Email:
      <input type="text" v-model="newGroupParams.email" />
      Address:
      <input type="text" v-model="newGroupParams.address" />
      Website:
      <input type="text" v-model="newGroupParams.website" />
      MIssion Statement:
      <input type="text" v-model="newGroupParams.mission_statement" />
      <input type="submit" value="Create" />
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
