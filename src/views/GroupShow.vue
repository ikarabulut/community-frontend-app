<template>
  <div class="group-show">
    <h1>{{ group.name }}</h1>
    <p>Group Name: {{ group.name }}</p>
    <p>Group Admin: {{ group.user_id }}</p>
    <p>Mission Statement: {{ group.mission_statement }}</p>
    <a :href="`${group.id}/events/new`" class="btn btn-primary">Create Event</a>
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
                                <img src="images/product-slide1.jpg" alt="">
                            </div>
                            <div class="item">
                                <img src="images/product-slide2.jpg" alt="">
                            </div>
                            <div class="item">
                                <img src="images/product-slide3.jpg" alt="">
                            </div>
                        </div>
                        <!-- / wrapper for slides -->

                        <!-- controls -->
                        <a class="left carousel-control" href="#product-slider" role="button" data-slide="prev">
                            <span class="lnr lnr-chevron-left" aria-hidden="true"></span>
                        </a>
                        <a class="right carousel-control" href="#product-slider" role="button" data-slide="next">
                            <span class="lnr lnr-chevron-right" aria-hidden="true"></span>
                        </a>
                        <!-- / controls -->
                    </div><!-- / product-slider -->

                    <ul class="nav nav-tabs" role="tablist">
                        <li class="active"><a href="#description" role="tab" data-toggle="tab" aria-expanded="true">DESCRIPTION</a></li>
                        <li class=""><a href="#info" role="tab" data-toggle="tab" aria-expanded="false">PRODUCT INFO</a></li>
                        <li class=""><a href="#reviews" role="tab" data-toggle="tab" aria-expanded="false">REVIEWS (2)</a></li>
                    </ul>
                    <!-- / nav-tabs -->
                    <div class="tab-content">
                        <div role="tabpanel" class="tab-pane animated fadeIn active" id="description">
                            <p>Cras mattis odio non dolor elementum, at imperdiet nisi semper. Cras maximus placerat luctus. Praesent blandit sodales mi, sed viverra dolor venenatis sit amet. Nam non mauris odio. Vestibulum id urna eget nibh molestie tempus sit amet id lectus.</p>
                            <p>Aenean ut suscipit purus, ut facilisis erat. Integer at nulla sit amet augue consequat pulvinar. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.</p>
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
                            </div><!-- / row -->
                        </div>
                        <!-- / info-tab -->

                        <div role="tabpanel" class="tab-pane animated fadeIn" id="reviews">
                            <div class="reviews">
                                <div class="review-author pull-left">
                                  <img src="images/author1.jpg" alt="">
                                </div>
                                <div class="review-content">
                                    <h4 class="review-title no-margin">Amazing product!</h4>
                                    <div class="review-stars">
                                        <span class="product-rating">
                                            <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>
                                        </span>
                                    </div><!-- / review-stars -->
                                    <p>Duis luctus, neque ac ultricies bibendum, risus velit gravida velit, vestibulum laoreet orci magna vel ipsum.</p>
                                    <cite> - Johana Doe</cite>
                                </div><!-- / review-content -->

                                <div class="space-25">&nbsp;</div>

                                <div class="review-author pull-left">
                                  <img src="images/author2.jpg" alt="">
                                </div>
                                <div class="review-content">
                                    <h4 class="review-title no-margin">Very good product!</h4>
                                    <div class="review-stars">
                                        <span class="product-rating">
                                            <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-o"></i>
                                        </span>
                                    </div><!-- / review-stars -->
                                    <p>Morbi sodales ornare ex, at consectetur ipsum faucibus at. Ut facilisis orci metus, vitae hendrerit leo vulputate sit amet.</p>
                                    <cite> - Jane Doe</cite>
                                </div><!-- / review-content -->

                                <!-- add review -->
                                <div id="add-review" class="space-top-30">
                                    <h4 class="">LEAVE A REVIEW</h4>
                                    <div class="row">
                                        <div class="col-sm-4 review-form">
                                            <input type="text" class="form-control" placeholder="*NAME" required>
                                        </div>
                                        <div class="col-sm-4 review-form">
                                            <input type="email" class="form-control" placeholder="*EMAIL" required>
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
                                            <button type="submit" class="btn btn-submit btn-primary-filled btn-rounded">Submit Review</button>
                                        </div>
                                    </div><!-- / row -->
                                </div>
                                <!-- / add review -->
                            </div><!-- / reviews -->
                        </div>
                        <!-- / reviews-tab -->
                    </div>
                    <!-- / tab-content -->
                </div><!-- / product-content-area -->

            </div>
            <!-- / product-content-area -->

            <!-- product sidebar area -->
            <div class="col-sm-6 col-md-5 product-sidebar">
                <div class="product-sidebar-details">
                    <h4>PRODUCT TITLE</h4>
                    <p>Praesent sed arcu id dui viverra dapibus et sed est. Mauris vel felis vitae massa suscipit pretium non vel ipsum. Mauris et lacus lacinia, tincidunt elit vel, aliquam sapien. Nam quis pharetra nisi.</p>
                    <div class="product-info">
                        <div class="info">
                            <p><i class="lnr lnr-tag"></i><span>Price: $69</span></p>
                        </div>
                        <div class="info">
                            <p><i class="lnr lnr-heart"></i><span>Category: <a href="#"> Women's</a>, <a href="#">Jeans</a></span></p>
                        </div>
                        <div class="info">
                            <p><i class="lnr lnr-menu"></i><span>SKU: 1456842493</span></p>
                        </div>
                        <div class="info">
                            <p><i class="lnr lnr-star"></i><span>Reviews: <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half-o"></i></span></p>
                        </div>
                    </div><!-- / product-info -->

                    <div class="buy-product">
                        <div class="options">
                            <input type="number" step="1" min="0" name="cart" value="1" title="Qty" class="input-text qty text" size="4">
                            <span class="selectors">
                                <select class="selectpicker">
                                    <optgroup label="Size:">
                                        <option>Small</option>
                                        <option>Medium</option>
                                        <option>Large</option>
                                    </optgroup>
                                </select>
                                <select class="selectpicker two">
                                    <optgroup label="Color:">
                                        <option>Grey</option>
                                        <option>Black</option>
                                        <option>Blue</option>
                                    </optgroup>
                                </select>
                            </span>
                        </div>
                        <!-- / options -->

                        <div class="space-25">&nbsp;</div>

                        <a href="shopping-cart.html" class="btn btn-primary-filled btn-rounded"><i class="lnr lnr-cart"></i><span> Add to Cart</span></a>
                        <a href="checkout.html" class="btn btn-success-filled btn-rounded"><i class="lnr lnr-heart"></i><span> Buy Now</span></a>
                    </div>

                </div><!-- product-details -->

            </div><!-- / col-sm-4 col-md-3 -->
            <!-- / product sidebar area -->

        </div><!-- / row -->

        <div id="related-products">
            <h4 class="space-top-30 space-bottom-30 space-left">RELATED PRODUCTS</h4>
            <ul class="row shop list-unstyled" id="grid">
                <!-- product -->
                <li class="col-xs-6 col-md-4 product m-product" data-groups='["mens"]'>
                    <div class="img-bg-color primary">
                        <h5 class="product-price">$49</h5>
                        <a href="single-product.html" class="product-link"></a>
                        <!-- / product-link -->
                        <img src="images/m-product.jpg" alt="">
                        <!-- / product-image -->

                        <!-- product-hover-tools -->
                        <div class="product-hover-tools">
                            <a href="single-product.html" class="view-btn" data-toggle="tooltip" title="View Product">
                                <i class="lnr lnr-eye"></i>
                            </a>
                            <a href="shopping-cart.html" class="cart-btn" data-toggle="tooltip" title="Add to Cart">
                                <i class="lnr lnr-cart"></i>
                            </a>
                        </div><!-- / product-hover-tools -->

                        <!-- product-details -->
                        <div class="product-details">
                            <h5 class="product-title">PRODUCT TITLE</h5>
                            <p class="product-category">CATEGORY</p>
                        </div><!-- / product-details -->
                    </div><!-- / img-bg-color -->
                </li>
                <!-- / product -->

                <!-- product -->
                <li class="col-xs-6 col-md-4 product m-product" data-groups='["womens", "accessories"]'>
                    <div class="img-bg-color primary">
                        <h5 class="product-price"><del>$159</del> $79</h5>
                        <a href="single-product.html" class="product-link"></a>
                        <!-- / product-link -->
                        <img src="images/m-product.jpg" alt="">
                        <!-- / product-image -->

                        <!-- product-hover-tools -->
                        <div class="product-hover-tools">
                            <a href="single-product.html" class="view-btn" data-toggle="tooltip" title="View Product">
                                <i class="lnr lnr-eye"></i>
                            </a>
                            <a href="shopping-cart.html" class="cart-btn" data-toggle="tooltip" title="Add to Cart">
                                <i class="lnr lnr-cart"></i>
                            </a>
                        </div><!-- / product-hover-tools -->

                        <!-- product-details -->
                        <div class="product-details">
                            <h5 class="product-title">PRODUCT TITLE</h5>
                            <p class="product-category">CATEGORY</p>
                        </div><!-- / product-details -->
                    </div><!-- / img-bg-color -->
                </li>
                <!-- / product -->

                <!-- product -->
                <li class="col-xs-6 col-md-4 product m-product" data-groups='["mens"]'>
                    <div class="img-bg-color primary">
                        <h5 class="product-price">$39</h5>
                        <a href="single-product.html" class="product-link"></a>
                        <!-- / product-link -->
                        <img src="images/m-product.jpg" alt="">
                        <!-- / product-image -->

                        <!-- product-hover-tools -->
                        <div class="product-hover-tools">
                            <a href="single-product.html" class="view-btn" data-toggle="tooltip" title="View Product">
                                <i class="lnr lnr-eye"></i>
                            </a>
                            <a href="shopping-cart.html" class="cart-btn" data-toggle="tooltip" title="Add to Cart">
                                <i class="lnr lnr-cart"></i>
                            </a>
                        </div><!-- / product-hover-tools -->

                        <!-- product-details -->
                        <div class="product-details">
                            <h5 class="product-title">PRODUCT TITLE</h5>
                            <p class="product-category">CATEGORY</p>
                        </div><!-- / product-details -->
                    </div><!-- / img-bg-color -->
                </li>
                <!-- / product -->

            </ul><!-- / row -->
        </div><!-- / related-products -->

    </div><!-- / container -->
</section>
<!-- / shop single-product -->

<!-- / content -->

<!-- scroll to top -->
<a href="#top" class="scroll-to-top page-scroll is-hidden" data-nav-status="toggle"><i class="fa fa-angle-up"></i></a>
<!-- / scroll to top -->

<!-- footer -->
<footer class="light-footer">
    <div class="widget-area">
        <div class="container">
            <div class="row">

                <div class="col-md-4 widget">
                    <div class="about-widget">
                        <div class="widget-title-image">
                            <img src="images/logo2.png" alt="">
                        </div>
                        <p>Vivamus consequat lacus quam, nec egestas quam egestas sit amet. Suspendisse et risus gravida tellus aliquam ullamcorper. Pellentesque elit dolor, ornare ut lorem nec, convallis nibh accumsan lacus morbi leo lipsum.</p>
                    </div><!-- / about-widget -->
                </div><!-- / widget -->
                <!-- / first widget -->

                <div class="col-md-2 widget">
                    <div class="widget-title">
                        <h4>BRANDS</h4>
                    </div>
                    <div class="link-widget">
                        <div class="info">
                            <a href="#x">Brand 1</a>
                        </div>
                        <div class="info">
                            <a href="#x">Brand 2</a>
                        </div>
                        <div class="info">
                            <a href="#x">Brand 3</a>
                        </div>
                        <div class="info">
                            <a href="#x">Brand 4</a>
                        </div>
                    </div>
                </div><!-- / widget -->
                <!-- / second widget -->

                <div class="col-md-2 widget">
                    <div class="widget-title">
                        <h4>SUPPORT</h4>
                    </div>
                    <div class="link-widget">
                        <div class="info">
                            <a href="#x">Terms & Conditions</a>
                        </div>
                        <div class="info">
                            <a href="#x">Shipping & Return</a>
                        </div>
                        <div class="info">
                            <a href="faq.html">F.A.Q</a>
                        </div>
                        <div class="info">
                            <a href="contact.html">Contact</a>
                        </div>
                    </div>
                </div><!-- / widget -->
                <!-- / third widget -->

                <div class="col-md-4 widget">
                    <div class="widget-title">
                        <h4>CONTACT</h4>
                    </div>
                    <div class="contact-widget">
                        <div class="info">
                            <p><i class="lnr lnr-map-marker"></i><span>Miami, S Miami Ave, SW 20th, Store No.1</span></p>
                        </div>
                        <div class="info">
                            <a href="tel:+0123456789"><i class="lnr lnr-phone-handset"></i><span>+0123 456 789</span></a>
                        </div>
                        <div class="info">
                            <a href="mailto:hello@yoursite.com"><i class="lnr lnr-envelope"></i><span>office@yoursite.com</span></a>
                        </div>
                        <div class="info">
                            <i class="lnr lnr-thumbs-up"></i>
                            <span class="social text-left">
                                <a class="no-margin" href="#"><i class="fa fa-facebook"></i></a>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                                <a href="#"><i class="fa fa-google-plus"></i></a>
                                <a href="#"><i class="fa fa-linkedin"></i></a>
                                <a href="#"><i class="fa fa-pinterest"></i></a>
                            </span>
                        </div>
                    </div><!-- / contact-widget -->
                </div><!-- / widget -->
                <!-- / fourth widget -->

            </div><!-- / row -->
        </div><!-- / container -->
    </div><!-- / widget-area -->
    <div class="footer-info">
        <div class="container">
                <div class="pull-left copyright">
                    <p><strong>© MS - MINIMAL SHOP THEME</strong></p>
                </div>
                <span class="pull-right">
                    <img src="images/visa.png" alt="">
                    <img src="images/mastercard.png" alt="">
                    <img src="images/discover.png" alt="">
                    <img src="images/paypal.png" alt="">
                </span>
        </div><!-- / container -->
    </div><!-- / footer-info -->
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      group: {},
      rsvp: "",
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
