<template>
  <div class="group-edit">
    <header>
      <!-- header-banner -->
      <div id="header-banner">
        <div class="banner-content single-page text-center">
          <div class="banner-border">
            <div class="banner-info">
              <h1>Update Group</h1>
            </div>
            <!-- / banner-info -->
          </div>
          <!-- / banner-border -->
        </div>
        <!-- / banner-content -->
      </div>
      <!-- / header-banner -->
    </header>
    <!-- / header -->

    <!-- content -->

    <!-- shopping-cart -->
    <div id="checkout">
      <div class="container">
        <div class="row checkout-screen">
          <div class="col-sm-8 checkout-form">
            <h4 class="space-left">UPDATE GROUP</h4>

            <div class="row">
              <div :key="group" class="col-sm-6">
                Name:
                <input type="text" class="form-control" name="Group Name" v-model="group.name" />
                Email:
                <input type="email" class="form-control" name="Email" v-model="group.email" />
                Address:
                <input type="email" class="form-control" name="Address" v-model="group.address" />
              </div>
              <div class="col-sm-6">
                Website:
                <input type="text" class="form-control" name="tel" v-model="group.website" />
                Mission Statement:
                <input type="text" class="form-control" name="company" v-model="group.mission_statement" />
                Image Url:
                <input type="text" class="form-control" name="address-line" v-model="group.image_url" />
              </div>
            </div>
            <!-- / row -->

            <div class="row"></div>
            <!-- / row -->

            <div class="checkout-form-footer space-left space-right">
              Description:
              <textarea class="form-control" name="description" v-model="group.description"></textarea>
              <a v-on:click.prevent="updateGroup(group)" href="" class="btn btn-primary-filled btn-rounded">
                <i class=""></i>
                <span>Update Group</span>
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
