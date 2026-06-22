/* Mobile nav toggle — progressive enhancement only. Site is fully usable without JS. */
(function () {
	var header = document.querySelector('.site-header');
	var toggle = document.querySelector('.nav-toggle');
	if (!header || !toggle) return;

	toggle.addEventListener('click', function () {
		var open = header.classList.toggle('nav-open');
		toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
	});

	// Close the menu after following an in-page link.
	header.addEventListener('click', function (e) {
		if (e.target.closest('.nav a') && header.classList.contains('nav-open')) {
			header.classList.remove('nav-open');
			toggle.setAttribute('aria-expanded', 'false');
		}
	});
})();
