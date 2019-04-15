
	var menu =document.querySelector('.nav__list');
	var menuStyle = getComputedStyle(menu);
	var button = document.querySelector('.toggle__button');
	var burger = document.querySelector('.burger');
	
	button.onclick = function() {
		if(menuStyle.display == 'none') {
			menu.classList.add('nav__list--open');
			menu.classList.remove('nav__list');
			burger.classList.add('burger--close');
		} else {
			menu.classList.remove('nav__list--open');
			menu.classList.add('nav__list');
			burger.classList.remove('burger--close');
		}
	}



