import ImageCardList from "../components/ImageCardList";
import { ImageModel } from "../models/image/image";

interface Props {
	imageList: ImageModel[],
	error: null | string
}

const ImageOverview = ({ imageList, error }: Props) => {

	return (
		<>
			{error && <div className="mt-5">{error}</div>}
			<ImageCardList imageList={imageList}></ImageCardList>
		</>
	)
}

export default ImageOverview;