<template>
  <div class="event-show">
    <header>
      <!-- header-banner -->
      <div id="header-banner">
        <div class="banner-content single-page text-center">
          <div class="banner-border">
            <div class="banner-info">
              <h1>Single Product</h1>
              <p>Fashion Product</p>
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

    <!-- shop single-product -->
    <section id="shop">
      <div class="container space-top-30">
        <div class="row">
          <!-- product content area -->
          <div class="col-sm-6 col-md-7 product-content-area">
            <div class="product-content-area">
              <div id="product-slider" class="carousel slide" data-ride="carousel">
                <!-- wrapper for slides -->
                <div class="carousel-inner" role="listbox">
                  <div class="item active">
                    <img :src="event.image_url" alt="Event Image Placeholder" />
                  </div>
                </div>
                <!-- / wrapper for slides -->

                <!-- controls -->

                <!-- / controls -->
              </div>
              <!-- / product-slider -->

              <ul class="nav nav-tabs" role="tablist">
                <li class="active">
                  <a href="#description" role="tab" data-toggle="tab" aria-expanded="true">DESCRIPTION</a>
                </li>
                <li class=""><a href="#info" role="tab" data-toggle="tab" aria-expanded="false">EVENT INFO</a></li>
              </ul>
              <!-- / nav-tabs -->
              <div :key="event.id" class="tab-content">
                <div role="tabpanel" class="tab-pane animated fadeIn active" id="description">
                  <p>
                    {{ event.description }}
                  </p>
                </div>
                <!-- / description-tab -->

                <div role="tabpanel" class="tab-pane animated fadeIn" id="info">
                  <div class="row">
                    <div class="col-sm-6">
                      <table>
                        <tbody>
                          <tr>
                            <th>Sizes:</th>
                            <td>Small, Medium, Large</td>
                          </tr>
                          <tr>
                            <th>Colors:</th>
                            <td>Beige, Black, Blue</td>
                          </tr>
                          <tr>
                            <th>Fabric:</th>
                            <td>100% Cotton</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div class="col-sm-6">
                      <table>
                        <tbody>
                          <tr>
                            <th>Weight:</th>
                            <td>0.5 Kg</td>
                          </tr>
                          <tr>
                            <th>Made In:</th>
                            <td>USA</td>
                          </tr>
                          <tr>
                            <th>More Info:</th>
                            <td>Lorem ipsum.</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <!-- / row -->
                </div>
                <!-- / info-tab -->

                <div role="tabpanel" class="tab-pane animated fadeIn" id="reviews">
                  <div class="reviews">
                    <div class="review-author pull-left">
                      <img src="images/author1.jpg" alt="" />
                    </div>
                    <div class="review-content">
                      <h4 class="review-title no-margin">Amazing product!</h4>
                      <div class="review-stars">
                        <span class="product-rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </span>
                      </div>
                      <!-- / review-stars -->
                      <p>
                        Duis luctus, neque ac ultricies bibendum, risus velit gravida velit, vestibulum laoreet orci
                        magna vel ipsum.
                      </p>
                      <cite>- Johana Doe</cite>
                    </div>
                    <!-- / review-content -->

                    <div class="space-25">&nbsp;</div>

                    <div class="review-author pull-left">
                      <img src="images/author2.jpg" alt="" />
                    </div>
                    <div class="review-content">
                      <h4 class="review-title no-margin">Very good product!</h4>
                      <div class="review-stars">
                        <span class="product-rating">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-o"></i>
                        </span>
                      </div>
                      <!-- / review-stars -->
                      <p>
                        Morbi sodales ornare ex, at consectetur ipsum faucibus at. Ut facilisis orci metus, vitae
                        hendrerit leo vulputate sit amet.
                      </p>
                      <cite>- Jane Doe</cite>
                    </div>
                    <!-- / review-content -->

                    <!-- add review -->
                    <div id="add-review" class="space-top-30">
                      <h4 class="">LEAVE A REVIEW</h4>
                      <div class="row">
                        <div class="col-sm-4 review-form">
                          <input type="text" class="form-control" placeholder="*NAME" required />
                        </div>
                        <div class="col-sm-4 review-form">
                          <input type="email" class="form-control" placeholder="*EMAIL" required />
                        </div>
                        <div class="col-sm-4 review-form">
                          <select class="form-control">
                            <option>5 STARS</option>
                            <option>4 STARS</option>
                            <option>3 STARS</option>
                            <option>2 STARS</option>
                            <option>1 STAR</option>
                          </select>
                        </div>
                        <div class="col-sm-12 review-form">
                          <textarea rows="7" class="form-control" placeholder="*REVIEW" required></textarea>
                          <button type="submit" class="btn btn-submit btn-primary-filled btn-rounded">
                            Submit Review
                          </button>
                        </div>
                      </div>
                      <!-- / row -->
                    </div>
                    <!-- / add review -->
                  </div>
                  <!-- / reviews -->
                </div>
                <!-- / reviews-tab -->
              </div>
              <!-- / tab-content -->
            </div>
            <!-- / product-content-area -->
          </div>
          <!-- / product-content-area -->

          <!-- product sidebar area -->
          <div class="col-sm-6 col-md-5 product-sidebar">
            <div class="product-sidebar-details">
              <h4 :key="event.id">{{ event.name }}</h4>
              <p :key="event.id">
                Praesent sed arcu id dui viverra dapibus et sed est. Mauris vel felis vitae massa suscipit pretium non
                vel ipsum. Mauris et lacus lacinia, tincidunt elit vel, aliquam sapien. Nam quis pharetra nisi.
              </p>
              <div class="product-info">
                <div :key="event.id" class="info">
                  <p>
                    <i class="lnr lnr-tag"></i>
                    <span>Date:{{ event.date }}</span>
                  </p>
                </div>
                <div class="info">
                  <p>
                    <i class="lnr lnr-heart"></i>
                    <span>
                      Tags:
                      <a h-ref="" v-for="eventTag in eventTags" :key="eventTag.id">| {{ eventTag.tag.tag }} |</a>
                    </span>
                  </p>
                </div>
                <div class="info">
                  <p>
                    <i class="lnr lnr-menu"></i>
                    <span>SKU: 1456842493</span>
                  </p>
                </div>
              </div>
              <!-- / product-info -->

              <div class="buy-product">
                <div v-if="$parent.isLoggedIn()" class="options">
                  <span class="selectors">
                    <select v-model="rsvp" class="selectpicker">
                      <option>-</option>
                      <option>Going</option>
                      <option>Maybe</option>
                      <option>No</option>
                    </select>
                  </span>
                </div>
                <br />

                <!-- / options -->

                <div class="space-25">&nbsp;</div>

                <a
                  v-if="$parent.isLoggedIn()"
                  v-on:click.prevent="pushRsvp(rsvp)"
                  class="btn btn-primary-filled btn-rounded"
                >
                  <i class=""></i>
                  <span>Submit RSVP</span>
                </a>
                <a
                  v-if="$parent.getUserId() == event.group.user_id"
                  :href="`/events/${event.id}/edit`"
                  class="btn btn-success-filled btn-rounded"
                >
                  <i class=""></i>
                  <span>Update Event</span>
                </a>
              </div>
            </div>
            <!-- product-details -->
          </div>
          <!-- / col-sm-4 col-md-3 -->
          <!-- / product sidebar area -->
        </div>
        <!-- / row -->

        <!-- / related-products -->
      </div>
      <!-- / container -->
    </section>
    <!-- / shop single-product -->

    <!-- / content -->

    <!-- scroll to top -->
    <a href="#top" class="scroll-to-top page-scroll is-hidden" data-nav-status="toggle">
      <i class="fa fa-angle-up"></i>
    </a>
    <!-- / scroll to top -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      event: {},
      eventTags: [],
      rsvp: "",
      user_id: localStorage.getItem("user_id"),
    };
  },
  created: function () {
    axios.get("/events/" + this.$route.params.id).then((response) => {
      this.event = response.data;
    });

    axios.get("/events/" + this.$route.params.id + "/tags").then((response) => {
      console.log("event tags", response.data);
      this.eventTags = response.data;
    });
  },

  methods: {
    pushRsvp: function (rsvp) {
      this.rsvp = rsvp;
      console.log(this.rsvp);
      console.log(localStorage.getItem("user_id"));
      axios
        .post("/events/" + this.$route.params.id + "/rsvps", {
          user_id: this.$route.params.user_id,
          event_id: localStorage.getItem("user_id"),
          rsvp_type: this.rsvp,
        })
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
