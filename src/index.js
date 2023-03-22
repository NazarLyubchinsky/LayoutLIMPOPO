// Watchers for scss and html files
import "./index.scss";
import "./scripts/watchers/_pages"

// Import modules
import { calcSumNumbers, calcSubtractNumbers } from "./scripts/modules/calc";
import { Elements } from "./scripts/modules/elements";

// Import methods
import { includeHTML } from "./scripts/methods/_includeComponents";

// SWIPER	PATRIONS
var swiper = new Swiper(".mySwiper", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	
	slidesPerView: 1.6,
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 50,
		},


		768: {
			slidesPerView: 1.7,
			spaceBetween: 30
		},

		992: {
			slidesPerView: 1.6,
			spaceBetween: 40
		}

	},

});



// SWIPER PATRIONS END

// SWIPER ANIMALS 

var swiper2 = new Swiper(".swiperAnimals", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	slidesPerView: 6,
	spaceBetween: 30,
	watchSlidesProgress: true,

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 100,
		},


		768: {
			slidesPerView: 3.2,
			spaceBetween: 10,

		},

		992: {
			slidesPerView: 5.3,
			spaceBetween: 30,
		}

	},
});


// TABS animals

const TABS = document.querySelectorAll('.tabs__item');
const CONTENT = document.querySelectorAll('.tabs__content');


TABS.forEach((tab) => {
	tab.addEventListener('click', () => {
		TABS.forEach((tab) => {
			tab.classList.remove('selected');
		});
		tab.classList.add('selected');
		const DATA_ATTRIBUTE = tab.getAttribute('data-products');
		CONTENT.forEach((item) => {
			item.classList.add('d-none');
			if (item.getAttribute('data-products') == DATA_ATTRIBUTE) {
				item.classList.remove('d-none');
			}
		});
	})
});


// TABS END

// news swiper

var swiper3 = new Swiper(".newsSwiper", {
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	slidesPerView: 5,
	spaceBetween: 30,
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 10,
		},


		768: {
			slidesPerView: 3.3,
			spaceBetween: 30,

		},

		992: {
			slidesPerView: 4.4,
			spaceBetween: 30,
		}

	},
});



