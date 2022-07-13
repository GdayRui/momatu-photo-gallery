import { useState } from "react";

interface Props {
	totalPageNum: number;
	onPageNavigate: (newPage: number) => void;
}

const PageNavigator = ({ totalPageNum, onPageNavigate }: Props) => {
	const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);

	const handlePrevNextClick = (isNext: boolean) => {
		const nextPageIndex = isNext ? currentPageIndex + 1 : currentPageIndex - 1;
		setCurrentPageIndex(nextPageIndex);
		onPageNavigate(nextPageIndex);
	}

	return (
		<div className="mt-5">
			<input className="btn btn-outline-secondary me-3" type="button" value="Previous" disabled={currentPageIndex === 0}
				onClick={() => handlePrevNextClick(false)} />
			<span>Page <strong>{currentPageIndex + 1}</strong> of {totalPageNum}</span>
			<input className="btn btn-outline-secondary ms-3" type="button" value="Next" disabled={currentPageIndex === totalPageNum - 1}
				onClick={() => handlePrevNextClick(true)} />
		</div>
	)
}

export default PageNavigator;