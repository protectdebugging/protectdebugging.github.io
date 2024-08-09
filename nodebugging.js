(function() {
	function checkDebugger() {
		debugger;
	}

	setInterval(checkDebugger,
		50);
})();
