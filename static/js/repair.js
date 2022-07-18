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


var btnShow = document.querySelector('.show-all-btn');
var showText = btnShow.querySelector('.show-all-btn__text');
var showImg = btnShow.querySelector('.show-all-btn__img');
var allBrand = document.querySelectorAll('.brands__brand');


btnShow.addEventListener('click', function() {

	let btnSelectors = btnShow.classList;
	btnShow.classList.toggle('show-all-btn--active');

	if(!btnSelectors.contains('show-all-btn--active')) {
		showText.textContent = 'Скрыть';
		showImg.style.transform = 'rotate(180deg)';
		displayChanger(allBrand, 'flex');
	}
	else {
		showText.textContent = 'Показать все';
		showImg.style.transform = 'rotate(0deg)';

		let userWidth = window.innerWidth;

		if (768 <= userWidth & userWidth <= 1119) {
			var hideBtn = document.querySelectorAll('.brands__device--tablet ~ .brands__brand');
		} else {
			var hideBtn = document.querySelectorAll('.brands__device--deck ~ .brands__brand');
		}

		displayChanger(hideBtn, 'none');
	}

})
