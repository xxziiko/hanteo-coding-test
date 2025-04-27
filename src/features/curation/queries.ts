import { fetchCurations } from '@/shared/apis';
import type { CurationsPath } from '@/shared/constants/paths';

export const curationKeys = {
  all: ['curations'],
  list: (path: CurationsPath) => [...curationKeys.all, 'list', path],
};

export const curationQuery = {
  list: (path: CurationsPath) => ({
    queryKey: curationKeys.list(path),
    queryFn: async ({ pageParam }: { pageParam: number }) => {
      return await fetchCurations(path, pageParam);
    },
  }),
};
