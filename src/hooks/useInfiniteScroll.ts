import { useEffect, useRef } from "react";

type UseInfiniteScrollProps = {
	isFetching: boolean;
	fetchNextPage: () => void | Promise<void>;
};

export function useInfiniteScroll<RefElement extends HTMLElement>({
	fetchNextPage,
	isFetching,
}: UseInfiniteScrollProps) {
	const bottomElementRef = useRef<RefElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting && !isFetching) {
				fetchNextPage();
			}
		});

		if (bottomElementRef.current !== null) {
			observer.observe(bottomElementRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, [isFetching, fetchNextPage]);

	return {
		bottomElementRef,
	};
}
