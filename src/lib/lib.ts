export function whenInView(node: HTMLElement, callback: () => void) {
	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				callback();
				// observer.disconnect();
			}
		},
		{ threshold: 0.4 } // Adjust the threshold as needed
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
