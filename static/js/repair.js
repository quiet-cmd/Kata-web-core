function displayChanger(arr, display) {
	for(let i = 0; i < arr.length; i++) {
		arr[i].style.display = display;
	}
}


var userWidth = document.documentElement.clientWidth;

var btn = document.querySelector('.show-all-btn');
var btnText = btn.querySelector('.show-all-btn__text');
var btnImg = btn.querySelector('.show-all-btn__img');
var btnChildren = [];

if(userWidth <= 767) {
	let brands = document.querySelector('.brands')
	brands.classList.add('swiper')

	const swiper = new Swiper('.swiper', {
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
} else if (768 <= userWidth & userWidth <= 1119) {
	var btnChildren = document.querySelectorAll('.brands__brand:nth-child(6) ~ .brands__brand');

} else {
	var btnChildren = document.querySelectorAll('.brands__brand:nth-child(8) ~ .brands__brand');
}

btn.addEventListener('click', function() {

	var btnSelectors = btn.classList;

	if(btnSelectors.contains('show-all-btn--active')) {
		btn.classList.remove('show-all-btn--active');
		btnText.textContent = 'Скрыть';
		btnImg.style.transform = 'rotate(180deg)';
		displayChanger(btnChildren, 'flex');
	}
	else {
		btn.classList.add('show-all-btn--active');
		btnText.textContent = 'Показать все';
		btnImg.style.transform = 'rotate(0deg)';
		displayChanger(btnChildren, 'none');
	}


})
