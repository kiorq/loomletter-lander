import mixpanel from 'mixpanel-browser';

declare let fbq: (v: string, v2: string, data?: Record<string, string>) => void;

export const track = (name: string, data?: Record<string, string>) => {
	fbq('trackCustom', name, data);
	mixpanel.track(name, data);
};

export const trackLead = () => {
	fbq('track', 'Lead');
};
