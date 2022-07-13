import { useEffect, useState } from "react"
import { ImageModel } from "../models/image/image"
import ImageCard from "./ImageCard"
import PageNavigator from "./PageNavigator"

const ITEMS_PER_PAGE = 6;

interface Props {
	imageList: ImageModel[]
}

const ImageCardList = ({ imageList }: Props) => {
	const [currentPageList, setCurrentPageList] = useState<ImageModel[]>([]);
	useEffect(() => {
		setCurrentPageList(imageList.filter((img, idx) => idx < ITEMS_PER_PAGE))
	}, [imageList])

	const handlePageNavigation = (currentPageIndex: number) => {
		setCurrentPageList(imageList.filter(
			(img, idx) =>
				idx < ITEMS_PER_PAGE * (currentPageIndex + 1) && idx >= ITEMS_PER_PAGE * currentPageIndex
		))
	}

	return (
		<div className="container mt-5">
			<div className="row g-5">
				{currentPageList.map(image => {
					return <ImageCard key={image.id} image={image} />
				})}
			</div>

			<PageNavigator totalPageNum={Math.ceil(imageList.length / ITEMS_PER_PAGE)}
				onPageNavigate={handlePageNavigation} />
		</div>
	)
}

export default ImageCardList;