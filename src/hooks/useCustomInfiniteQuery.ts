import {
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  useQueryClient,
} from "react-query";
import { QueryKey } from "react-query/types/core/types";
import { useEffect } from "react";

export type CustomInfiniteQueryOptions<TData = unknown, TError = unknown> = Omit<
  UseInfiniteQueryOptions<TData, TError, TData, TData, QueryKey>,
  "queryFn" | "queryKey"
>;

export const useCustomInfiniteQuery = (
  queryKey: QueryKey,
  options?: CustomInfiniteQueryOptions<ImageData[], Error>
): UseInfiniteQueryResult<ImageData[], Error> => {
  const queryClient = useQueryClient();

  const queryOptions: UseInfiniteQueryOptions<ImageData[], Error> = {
    ...options,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length + 1 : undefined;
    },
    staleTime: 300000,
    cacheTime: 300000,
    keepPreviousData: true,
    refetchOnMount: false,
  };
  const queryResult = useInfiniteQuery<ImageData[], Error>(
    queryKey,
    // ({ pageParam = 1 }) => getInfinityDogs(pageParam),
    queryOptions
  );

  useEffect(() => {
    if (queryResult.isFetchingNextPage) {
      const nextPage = (queryResult.data?.pageParams.reverse()[0] as number) ?? null;
      if (nextPage) {
        // queryClient.prefetchQuery(["dogsPost", nextPage + 2], () => getInfinityDogs(nextPage + 2));
      }
    }
  }, [queryResult.isFetchingNextPage, queryResult.data?.pageParams]);

  return queryResult;
};
