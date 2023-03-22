// Watchers for scss and html files
import "./index.scss";
import "./scripts/watchers/_pages"

// Import modules
import { calcSumNumbers, calcSubtractNumbers } from "./scripts/modules/calc";
import { Elements } from "./scripts/modules/elements";

// Import methods
import { includeHTML } from "./scripts/methods/_includeComponents";

// Bisiness logic
document.addEventListener('DOMContentLoaded', () => {
	includeHTML();
	console.log(calcSubtractNumbers(10, 5));
	console.log(calcSumNumbers(10, 5));

});

function showData(data, selector) {
	const element = document.querySelector(selector);
	element.innerHTML = data;
}

function transformData(data) {
	const { name, surname, patronic } = data;
	const surnameTranform = surname[0].toUpperCase() + surname.slice(1);
	return `${surnameTranform} ${name[0]}. ${patronic[0]}.`;
}

function getDataForm() {
	const NAME = document.querySelector('#name').value;
	const SURNAME = document.querySelector('#surname').value;
	const PATRONIC = document.querySelector('#patronymic').value;

	const DATA = {
		name: NAME,
		surname: SURNAME,
		patronic: PATRONIC
	}
	return transformData(DATA);
}

export function initialsBtn() {
	const BTN_FORM = document.querySelector('#btn');
	BTN_FORM.addEventListener('click', (e) => {
		e.preventDefault();
		let initials = getDataForm();
		showData(initials, '.output-info');
	});
}

document.addEventListener('DOMContentLoaded', () => {
	initialsBtn();
});


// SLIDER //

const PARAMS = {


	// Optional parameters

	loop: true,
	slidesPerView: 4,
	slidesPerGroup: 1,
	spaceBetween: 30,
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 20
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 2,
			spaceBetween: 30
		},
		// when window width is >= 640px
		992: {
			slidesPerView: 4,
			spaceBetween: 40
		}

	},
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
}
const swiper = new Swiper('.swiper', PARAMS);







// var swiper = new Swiper(".myswiper", {
// 	pagination: {
// 		el: ".swiper-pagination",
// 		type: "fraction",
// 	},
// 	navigation: {
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev",
// 	},
// });




