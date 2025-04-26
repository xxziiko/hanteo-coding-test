import { fetchBanners } from '@/shared/apis';

export const bannerKeys = {
  all: ['banners'],
  list: () => [...bannerKeys.all, 'list'],
};

export const bannerQuery = {
  list: () => ({
    queryKey: bannerKeys.list(),
    queryFn: fetchBanners,
    staleTime: 1000 * 60 * 5,
    throwOnError: true,
  }),
};
