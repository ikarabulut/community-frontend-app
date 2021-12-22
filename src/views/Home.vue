<template>
  <div class="home">
    <!-- header-banner -->
    <div id="header-banner" class="demo-1">
      <div class="banner-content text-center">
        <div class="banner-border">
          <div class="banner-info">
            <h1>Minimal Shop</h1>
            <p>Minimal Fashion Shop</p>
          </div>
          <!-- / banner-info -->
        </div>
        <!-- / banner-border -->
      </div>
      <!-- / banner-content -->
    </div>

    <!-- / header-banner -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      currentUserId: localStorage.getItem("user_id"),
      currentUser: {},
    };
  },
  created: function () {
    axios.get("/users", { id: this.currentUserId }).then((response) => {
      console.log("user show", response.data);
      this.currentUser = response.data;
      console.log(this.currentUser);
    });
  },
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
