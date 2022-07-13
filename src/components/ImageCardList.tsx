import { ImageModel } from "../models/image/image"
import ImageCard from "./ImageCard"

interface Props {
	imageList: ImageModel[]
}

const ImageCardList = ({ imageList }: Props) => {

	return (<div>
		{imageList.map(image => {
			return <ImageCard key={image.id} image={image} />
		})}
	</div>)
}

export default ImageCardList;