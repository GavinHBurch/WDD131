const navigation = document.querySelector('.navigation')
menu.addEventListener('click', () => {
	
	toggleMenuButton();
});

function toggleMenuButton() {
	menu.classList.toggle('show');
	layout.classList.toggle('show');
};