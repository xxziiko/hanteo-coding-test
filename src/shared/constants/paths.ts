export const API_PATH = {
  CURATIONS: '/api/v1/curations',
  BANNERS: '/api/v1/banners',
} as const;

export const CURATION_PATH = {
  CHART: '/chart',
  WHOOK: '/whook',
  EVENT: '/event',
  NEWS: '/news',
  STORE: '/store',
  CHARGING: '/charging',
} as const;

export type CurationsPath = (typeof CURATION_PATH)[keyof typeof CURATION_PATH];
