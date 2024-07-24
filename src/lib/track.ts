import mixpanel from 'mixpanel-browser';

declare let fbq: (v: string, v2: string, data?: Record<string, string>) => void;

export const track = (name: string, data?: Record<string, string>) => {
	fbq('trackCustom', name, data);
	mixpanel.track(name, data);
};

export const trackLead = () => {
	fbq('track', 'Lead');
};

function getUTMTags() {
	const params = new URLSearchParams(window.location.search);
	const utmTags: Record<string, string> = {};

	['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach((tag) => {
		if (params.has(tag)) {
			utmTags[tag] = params.get(tag)!;
		}
	});

	return utmTags;
}

export const refererData = () => {
	return {
		...getUTMTags(),
		x_referrer: document.referrer
	};
};
