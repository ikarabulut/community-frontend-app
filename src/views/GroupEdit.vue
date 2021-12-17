<template>
  <div class="group-edit">
    <h1>Edit Group</h1>
    <form v-on:submit.prevent="updateGroup(group)">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="group.name" />
      Email:
      <input type="text" v-model="group.email" />
      Address:
      <input type="text" v-model="group.address" />
      Website:
      <input type="text" v-model="group.website" />
      Mission Statement:
      <input type="text" v-model="group.mission_statement" />
      <input type="submit" value="Update" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      group: {},
      errors: [],
    };
  },
  created: function () {
    axios.get("/groups/" + this.$route.params.id).then((response) => {
      console.log("group show", response);
      this.group = response.data;
    });
  },
  methods: {
    updateGroup: function (group) {
      var editGroupParams = group;
      axios
        .put("/groups/" + group.id, editGroupParams)
        .then((response) => {
          console.log("groups update", response);
          this.$router.push("/groups");
        })
        .catch((error) => {
          console.log("groups update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
