import type { BannerItem } from '@/features/banner/types';
import type { CurationItem } from '@/features/curation/types';
import type { CurationsPath } from '@/shared/constants/paths';
import { assert } from '@/shared/utils';
import { API_PATH } from './constants/paths';

export const fetchBanners = async () => {
  const response = await fetch(API_PATH.BANNERS);
  const data = await response.json();

  assert(response.ok, 'Failed to fetch banners');
  return data as BannerItem[];
};

export const fetchCurations = async (path: CurationsPath, page = 1) => {
  const response = await fetch(`${API_PATH.CURATIONS}${path}?page=${page}`);
  const data = await response.json();

  assert(response.ok, 'Failed to fetch curations');
  return data as CurationItem[];
};
