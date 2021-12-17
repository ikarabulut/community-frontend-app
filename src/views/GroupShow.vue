<template>
  <div class="group-show">
    <h1>{{ group.name }}</h1>
    <p>Group Name: {{ group.name }}</p>
    <p>Group Admin: {{ group.user_id.name }}</p>
    <p>Mission Statement: {{ group.mission_statement }}</p>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      group: {},
    };
  },
  created: function () {
    axios.get("/groups/" + this.$route.params.id).then((response) => {
      this.group = response.data;
    });
  },

  methods: {},
};
</script>
