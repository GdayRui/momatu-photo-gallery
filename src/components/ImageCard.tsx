import React from 'react';
import { ImageModel } from '../models/image/image';

interface Props {
	image: ImageModel
}

const ImageCard = ({ image }: Props) => {

	return (
		<div>
			<img src={image.download_url} alt='' />
			<div>
				<p>{image.author}</p>
			</div>
		</div>
	)
}

export default ImageCard;