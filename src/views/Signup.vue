<template>
  <div class="signup">
    <header>
      <!-- header-banner -->
      <div id="header-banner">
        <div class="banner-content single-page text-center">
          <div class="banner-border">
            <div class="banner-info">
              <h1>Login Or Register</h1>
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

    <!-- login-register -->
    <div class="container">
      <div class="row">
        <!-- login form 1 -->
        <div class="col-sm-6">
          <div id="login-form">
            <h3 class="log-title">LOGIN</h3>
            <div class="form-group">
              <input
                type="text"
                v-model="newSessionParams.email"
                class="form-control"
                id="username"
                placeholder="EMAIL"
                required
                data-error="*Please fill out this field"
              />
              <div class="help-block with-errors"></div>
            </div>
            <div class="form-group">
              <input
                type="password"
                v-model="newSessionParams.password"
                class="form-control"
                id="password"
                placeholder="PASSWORD"
                required
              />
              <div class="help-block with-errors"></div>
            </div>
            <!-- log-line -->
            <div class="log-line">
              <div class="pull-right">
                <a v-on:click="submitSession()" class="btn btn-md btn-primary-filled btn-log btn-rounded">Log In</a>
                <div id="msgSubmit" class="h3 text-center hidden"></div>
                <div class="clearfix"></div>
              </div>
            </div>
            <!-- / log-line -->
          </div>
        </div>
        <!-- / col-sm-6 -->
        <!-- / login form 1 -->

        <!-- register form 1 -->
        <div class="col-sm-6">
          <div id="register-form">
            <h3 class="log-title">REGISTER</h3>

            <div class="form-group">
              <input
                type="text"
                class="form-control"
                v-model="newUserParams.name"
                id="register-email"
                placeholder="NAME"
                required
                data-error="*Please fill out this field"
              />
              <div class="help-block with-errors"></div>
            </div>

            <div class="form-group">
              <input
                type="email"
                class="form-control"
                v-model="newUserParams.email"
                id="register-email"
                placeholder="EMAIL"
                required
                data-error="*Please fill out this field"
              />
              <div class="help-block with-errors"></div>
            </div>

            <div class="form-group">
              <input
                type="password"
                class="form-control"
                v-model="newUserParams.password"
                id="register-password"
                placeholder="PASSWORD"
                required
                data-error="*Please fill out this field"
              />
              <div class="help-block with-errors"></div>
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                v-model="newUserParams.password_confirmation"
                id="register-cpassword"
                placeholder="CONFIRM PASSWORD"
                required
              />
              <div class="help-block with-errors"></div>
            </div>
            <!-- log-line -->
            <div class="log-line reg-form-1 no-margin">
              <div class="pull-left"></div>
              <div class="pull-right">
                <button v-on:click="submit()" id="reg-submit" class="btn btn-md btn-primary-filled btn-log btn-rounded">
                  Register
                </button>
                <div id="register-msgSubmit" class="h3 text-center hidden"></div>
                <div class="clearfix"></div>
              </div>
            </div>
            <!-- / log-line -->
          </div>
        </div>
        <!-- / col-sm-6 -->
        <!-- / register form 1 -->
      </div>
      <!-- / row -->
      <!-- / form 1 -->
    </div>
    <!-- / container -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
      newSessionParams: {},
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    submitSession: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          localStorage.setItem("name", response.data.user_name);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
