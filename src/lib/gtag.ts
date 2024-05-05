type EventAction = Gtag.EventNames | "click_ios_appstore" | "click_android_playstore";

export const pageview = (url: URL | string) => {
  window.gtag("config", "G-1B5D11GK85", {
    page_path: url,
  });
};
export const event = (action: EventAction, { event_category, event_label, value }: Gtag.EventParams) => {
  window.gtag("event", action, {
    event_category,
    event_label,
    value,
  });
};
