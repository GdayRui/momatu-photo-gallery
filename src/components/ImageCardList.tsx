import { useEffect, useState } from "react"
import { ImageModel } from "../models/image/image"
import ImageCard from "./ImageCard"
import PageNavigator from "./PageNavigator"

// If needed, this number can be made dynamic by adding a prop 
// to the ImageCardList component and passed down from upper level or config files
const ITEMS_PER_PAGE = 6;

interface Props {
	imageList: ImageModel[],
}

const ImageCardList = ({ imageList }: Props) => {
	const [currentPageList, setCurrentPageList] = useState<ImageModel[]>([]);
	useEffect(() => {
		if (imageList) {
			setCurrentPageList(imageList.filter((img, idx) => idx < ITEMS_PER_PAGE))
		}
	}, [imageList])

	const handlePageNavigation = (currentPageIndex: number) => {
		if (imageList) {
			setCurrentPageList(imageList.filter(
				(img, idx) =>
					idx < ITEMS_PER_PAGE * (currentPageIndex + 1) && idx >= ITEMS_PER_PAGE * currentPageIndex
			))
		}
	}

	return (
		<>
			{(currentPageList.length > 0) && (
				<div className="container mt-5">
					<div className="row g-5">
						{currentPageList.map(image => {
							return <ImageCard key={image.id} image={image} />
						})}
					</div>

					<PageNavigator totalPageNum={Math.ceil(imageList.length / ITEMS_PER_PAGE)}
						onPageNavigate={handlePageNavigation} />
				</div>
			)}
			{(currentPageList.length === 0) && (
				<div className="alert alert-info">Image list is empty.</div>
			)}
		</>
	)
}

export default ImageCardList;