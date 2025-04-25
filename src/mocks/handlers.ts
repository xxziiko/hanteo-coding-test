import { API_PATH } from '@/shared/constants/paths';
import { http, HttpResponse } from 'msw';
import { BANNER_LIST } from './index';

export const handlers = [
  http.get(API_PATH.CURATIONS, () => {
    return HttpResponse.json({
      id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
      title: 'John',
      description: 'Maverick',
    });
  }),
  http.get(API_PATH.BANNERS, () => {
    return HttpResponse.json(BANNER_LIST);
  }),
];
