import type { CurationItem } from '@/features/curation/types';
import { fetchCurations } from '@/shared/apis';
import type { CurationsPath } from '@/shared/constants/paths';

export const curationKeys = {
  all: ['curations'],
  list: (path: CurationsPath) => [...curationKeys.all, 'list', path],
};

export const curationQuery = {
  list: (path: CurationsPath, isActive: boolean) => ({
    queryKey: curationKeys.list(path),
    queryFn: async ({ pageParam }: { pageParam: number }) => {
      return await fetchCurations(path, pageParam);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage: CurationItem[], pages: CurationItem[][]) => {
      return lastPage.length === 0 ? undefined : pages.length + 1;
    },
    select: (data: { pages: CurationItem[][] }) => {
      return data.pages.flat();
    },
    enabled: isActive,
    throwOnError: true,
    keepPreviousData: true,
    staleTime: 1000 * 60 * 60 * 2,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  }),
};
