(function() {
	function checkDebugger() {
		debugger;
	}

	setInterval(checkDebugger,
		0);
})();
