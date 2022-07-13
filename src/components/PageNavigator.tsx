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
		<div className="container mt-5">
			<input type="button" value="Previous" disabled={currentPageIndex === 0}
				onClick={() => handlePrevNextClick(false)} />
			<span>{currentPageIndex + 1}</span>
			<input type="button" value="Next" disabled={currentPageIndex === totalPageNum - 1}
				onClick={() => handlePrevNextClick(true)} />
		</div>
	)
}

export default PageNavigator;