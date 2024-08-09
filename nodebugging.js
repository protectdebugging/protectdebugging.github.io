(function() {
	let videoElement;
	let videoSrc = '';

	document.addEventListener('visibilitychange', () => {
		if (document.hidden) {
			if (videoElement) {
				videoElement.pause();
				videoElement.srcObject = null;
				videoElement.src = '';
				if (videoSrc) {
					URL.revokeObjectURL(videoSrc);
				}
				videoElement.remove();
			}
		}
	});

	window.addEventListener('blur',
		() => {
			if (document.hidden) {
				if (videoElement) {
					videoElement.pause();
					videoElement.srcObject = null;
					if (videoSrc) {
						URL.revokeObjectURL(videoSrc);
					}
					videoElement.src = '';
					videoElement.remove();
				}
			}
		});

	window.addEventListener('focus',
		() => {
			videoElement = document.querySelector('video');
			if (videoElement) {
				videoSrc = videoElement.src;
			}
		});

	window.addEventListener('load',
		() => {
			videoElement = document.querySelector('video');
			if (videoElement) {
				videoSrc = videoElement.src;
			}
		});
})();

(function() {
	function checkDebugger() {
		debugger;
	}

	setInterval(checkDebugger,
		50);
})();
