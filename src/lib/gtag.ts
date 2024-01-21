export const GA_MEASUREMENT_ID = String(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID)

export const existsGaId = GA_MEASUREMENT_ID !== ''

export const EventClickOfficial = {
  action: 'click',
  category: 'external_link',
  label: 'official',
}

export const EventClickGithub = {
  action: 'click',
  category: 'external_link',
  label: 'github',
}

export const EventClickCongrant = {
  action: 'click',
  category: 'external_link',
  label: 'congrant',
}

type Event = {
  action: string
  category: string
  label: string
}

export const pageview = (path: string): void => {
  if (!GA_MEASUREMENT_ID) {
    return
  }
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: path,
  })
}

export const event = (event: Event): void => {
  if (!GA_MEASUREMENT_ID) {
    return
  }
  window.gtag('event', event.action, {
    event_category: event.category,
    event_label: JSON.stringify(event.label),
  })
}
