import type { CurationsPath } from '@/shared/constants/paths';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { curationQuery } from '../queries';
import type { CurationItem } from '../types';

export default function useQurationInfiniteQuery({
  path,
}: {
  path: CurationsPath;
}) {
  return useSuspenseInfiniteQuery({
    ...curationQuery.list(path),
    initialPageParam: 1,
    getNextPageParam: (lastPage: CurationItem[], pages: CurationItem[][]) => {
      return lastPage.length === 0 ? undefined : pages.length + 1;
    },
    select: (data: { pages: CurationItem[][] }) => {
      return data.pages.flat();
    },
    staleTime: 1000 * 60 * 60 * 2,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}
