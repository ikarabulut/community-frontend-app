<template>
  <div class="groups-index">
    <h1>All Groups</h1>
    <div v-for="group in groups" v-bind:key="group.id">
      <h2>{{ group.name }}</h2>
      <p>Mission Statement: {{ group.mission_statement }}</p>
      <a :href="`/groups/${group.id}`" class="btn btn-primary">View Group</a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      groups: [],
    };
  },
  created: function () {
    this.indexGroups();
  },
  methods: {
    indexGroups: function () {
      axios.get("/groups").then((response) => {
        console.log("groups index", response);
        this.groups = response.data;
      });
    },
  },
};
</script>
