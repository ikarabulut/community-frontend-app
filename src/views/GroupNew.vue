<template>
  <div class="group-new">
    <!-- header-banner -->
    <div id="header-banner">
      <div class="banner-content single-page text-center">
        <div class="banner-border">
          <div class="banner-info">
            <h1>Create Group</h1>
          </div>
          <!-- / banner-info -->
        </div>
        <!-- / banner-border -->
      </div>
      <!-- / banner-content -->
    </div>
    <!-- / header-banner -->

    <!-- / header -->

    <!-- content -->

    <!-- shopping-cart -->
    <div id="checkout">
      <div class="container">
        <div class="row checkout-screen">
          <div class="col-sm-8 checkout-form">
            <h4 class="space-left">CREATE GROUP</h4>

            <div class="row">
              <div :key="group" class="col-sm-6">
                Name:
                <input type="text" class="form-control" name="Group Name" v-model="newGroupParams.name" />
                Email:
                <input type="email" class="form-control" name="Email" v-model="newGroupParams.email" />
                Address:
                <input type="email" class="form-control" name="Address" v-model="newGroupParams.address" />
              </div>
              <div class="col-sm-6">
                Website:
                <input type="text" class="form-control" name="tel" v-model="newGroupParams.website" />
                Mission Statement:
                <input type="text" class="form-control" name="company" v-model="newGroupParams.mission_statement" />
                Image Url:
                <input type="text" class="form-control" name="address-line" v-model="newGroupParams.image_url" />
              </div>
            </div>
            <!-- / row -->

            <div class="row"></div>
            <!-- / row -->

            <div class="checkout-form-footer space-left space-right">
              Description:
              <textarea class="form-control" name="description" v-model="newGroupParams.description"></textarea>
              <a v-on:click.prevent="createGroup()" href="" class="btn btn-primary-filled btn-rounded">
                <i class=""></i>
                <span>Create Group</span>
              </a>
            </div>
            <!-- / checkout-form-footer -->
          </div>
          <!-- / checkout-form -->
        </div>
        <!-- / row -->
      </div>
      <!-- / container -->
    </div>
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
