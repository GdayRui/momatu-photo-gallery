import { ImageModel } from "../models/image/image"
import ImageCard from "./ImageCard"

interface Props {
	imageList: ImageModel[]
}

const ImageCardList = ({ imageList }: Props) => {

	return (
		<div className="container mt-5">
			<div className="row g-5">
				{imageList.map(image => {
					return <ImageCard key={image.id} image={image} />
				})}
			</div>
		</div>
	)
}

export default ImageCardList;