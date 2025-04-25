import type { BannerItem } from '@/features/banner/types';
import { API_PATH } from './constants/paths';

export const fetchBanners = async () => {
  const response = await fetch(API_PATH.BANNERS);
  const data = await response.json();
  return data as BannerItem[];
};

export const fetchCuration = async (page: number) => {
  const response = await fetch(`${API_PATH.CURATIONS}?page=${page}`);
  const data = await response.json();
  return data;
};
