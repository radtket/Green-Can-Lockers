import $ from "jquery";
// import "bootstrap";
import "slick-carousel";
import fitvids from "fitvids";

$(".test").slick({
	nextArrow: $(".bbbt"),
	prevArrow: $(".bnbt"),
	autoplaySpeed: 5000,
	autoplay: true,
	adaptiveHeight: true,
	dots: true
});

$(document).ready(() => {
	fitvids("#my-video-display");
});
