(function() {
	var devtoolsOpen = false;
	var checkInterval;

	function blockPage() {
		window.location.replace('https://protectdebugging.github.io/harika-icerik.html');
		clearInterval(checkInterval);
		debugger;
	}

	function detectDevTools() {
		const start = Date.now();
		debugger;
		if (Date.now() - start > 100) {
			devtoolsOpen = true;
			blockPage();
		}
	}

	checkInterval = setInterval(detectDevTools, 100);

	window.addEventListener('load', function() {
		detectDevTools();
	});
})();
