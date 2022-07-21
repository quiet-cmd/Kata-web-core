function displayChanger(arr, display) {
	for(let i = 0; i < arr.length; i++) {
		arr[i].style.display = display;
	}
}

let brands = document.querySelector('.brands');
let swiper;

function mobileSwiper() {
	if(window.innerWidth <= 767 & brands.dataset.mobaile == 'false') {
		swiper = new Swiper('.brands', {
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			slidesPerView: 1.2,
			spaceBetween: 16,
			slidesPerGroup: 1,
			breakpoints: {
				400: {
					slidesPerView: 1.4
				},

				500: {
					slidesPerView: 2.4
				}
			},
		});
		brands.dataset.mobaile = 'true';
	}
	if(window.innerWidth > 767 & brands.dataset.mobaile == 'true') {
		swiper.destroy();
		brands.dataset.mobaile = 'false';
	}
}

mobileSwiper();
window.addEventListener('resize', function(event) {
	mobileSwiper();
}, true);


const btnShow = document.querySelector('.show-all-btn');
const allBrand = document.querySelectorAll('.brands__brand');
let hideBtn;


btnShow.addEventListener('click', function() {

	let btnSelectors = btnShow.classList;
	btnShow.classList.toggle('show-all-btn--active');

	if(!btnSelectors.contains('show-all-btn--active')) {
		return displayChanger(allBrand, 'flex');
	}
	
	let userWidth = window.innerWidth;

	if (768 <= userWidth & userWidth <= 1119) {
		hideBtn = document.querySelectorAll('.brands__device--tablet ~ .brands__brand');
	} else {
		hideBtn = document.querySelectorAll('.brands__device--deck ~ .brands__brand');
	}

	displayChanger(hideBtn, 'none');


})
