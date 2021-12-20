<template>
  <div class="group-show">
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
    <div class="container space-top-30">
      <div class="row">
        <!-- product content area -->
        <div class="col-sm-6 col-md-7 product-content-area">
          <div class="product-content-area">
            <div id="product-slider" class="carousel slide" data-ride="carousel">
              <!-- wrapper for slides -->
              <div class="carousel-inner" role="listbox">
                <div class="item active">
                  <img src="images/product-slide1.jpg" alt="IMAGE PLACEHOLDER" />
                </div>
              </div>
              <!-- / wrapper for slides -->
            </div>
            <!-- / product-slider -->

            <ul class="nav nav-tabs" role="tablist">
              <li class="active">
                <a href="#description" role="tab" data-toggle="tab" aria-expanded="true">DESCRIPTION</a>
              </li>
              <li class=""><a href="#info" role="tab" data-toggle="tab" aria-expanded="false">PRODUCT INFO</a></li>
              <li class=""><a href="#reviews" role="tab" data-toggle="tab" aria-expanded="false">REVIEWS (2)</a></li>
            </ul>
            <!-- / nav-tabs -->
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane animated fadeIn active" id="description">
                <p>
                  Cras mattis odio non dolor elementum, at imperdiet nisi semper. Cras maximus placerat luctus. Praesent
                  blandit sodales mi, sed viverra dolor venenatis sit amet. Nam non mauris odio. Vestibulum id urna eget
                  nibh molestie tempus sit amet id lectus.
                </p>
                <p>
                  Aenean ut suscipit purus, ut facilisis erat. Integer at nulla sit amet augue consequat pulvinar.
                  Pellentesque habitant morbi tristique senectus et netus et malesuada fames.
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
                      Duis luctus, neque ac ultricies bibendum, risus velit gravida velit, vestibulum laoreet orci magna
                      vel ipsum.
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
        <div :key="group.id" class="col-sm-6 col-md-5 product-sidebar">
          <div class="product-sidebar-details">
            <h4>{{ group.name }}</h4>
            <p>
              {{ group.mission_statement }}
            </p>
            <div class="product-info">
              <div class="info">
                <p>
                  <i class="lnr lnr-tag"></i>
                  <span>Website: {{ group.website }}</span>
                </p>
              </div>
              <div class="info">
                <p>
                  <i class="lnr lnr-heart"></i>
                  <span>Cause(s):</span>
                </p>
              </div>
              <div class="info">
                <p>
                  <i class="lnr lnr-menu"></i>
                  <span>Address: {{ group.address }}</span>
                </p>
              </div>
            </div>
            <!-- / product-info -->

            <div class="buy-product">
              <div class="space-25">&nbsp;</div>

              <a :href="`${group.id}/events/new`" class="btn btn-primary-filled btn-rounded">
                <i class="lnr lnr-cart"></i>
                <span>Create Event</span>
              </a>
              <a :href="`groups/${group.id}/edit`" class="btn btn-success-filled btn-rounded">
                <i class="lnr lnr-heart"></i>
                <span>Update Group</span>
              </a>
            </div>
          </div>
          <!-- product-details -->
        </div>
        <!-- / col-sm-4 col-md-3 -->
        <!-- / product sidebar area -->
      </div>
      <!-- / row -->
      <h4 class="space-top-30 space-bottom-30 space-left">Upcoming Events</h4>
      <div id="related-products">
        <ul class="row shop list-unstyled" id="grid">
          <!-- product -->
          <li
            v-for="groupEvent in groupEvents"
            :key="groupEvent.id"
            class="col-xs-6 col-md-4 product m-product"
            data-groups='["mens"]'
          >
            <div class="img-bg-color primary">
              <h5 class="product-price">{{ groupEvent.date }}</h5>
              <a href="single-product.html" class="product-link"></a>
              <!-- / product-link -->
              <img src="images/m-product.jpg" alt="" />
              <!-- / product-image -->

              <!-- product-hover-tools -->
              <div class="product-hover-tools">
                <a href="single-product.html" class="view-btn" data-toggle="tooltip" title="View Product">
                  <i class="lnr lnr-eye"></i>
                </a>
                <a href="shopping-cart.html" class="cart-btn" data-toggle="tooltip" title="Add to Cart">
                  <i class="lnr lnr-cart"></i>
                </a>
              </div>
              <!-- / product-hover-tools -->

              <!-- product-details -->
              <div class="product-details">
                <h5 class="product-title">PRODUCT TITLE</h5>
                <p class="product-category">CATEGORY</p>
              </div>
              <!-- / product-details -->
            </div>
            <!-- / img-bg-color -->
          </li>
        </ul>
      </div>
      <!-- / related-products -->
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      group: {},
      groupEvents: [],
    };
  },
  created: function () {
    axios.get("/groups/" + this.$route.params.id).then((response) => {
      this.group = response.data;
    });

    axios.get("groups/" + this.$route.params.id + "/events").then((response) => {
      console.log("events index", response.data);
      this.groupEvents = response.data;
    });
  },

  methods: {},
};
</script>
