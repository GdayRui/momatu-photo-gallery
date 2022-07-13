import React from 'react';
import { ImageModel } from '../models/image/image';

interface Props {
	image: ImageModel
}

const ImageCard = ({ image }: Props) => {

	return (
		<div className='col col-12 col-sm-6 col-lg-4'>
			<div className='card'>
				<img className='card-img-top top-img-fit' src={image.download_url} alt='' />
				<div className='card-body'>
					<p className='card-text'>{image.author}</p>
				</div>
			</div>
		</div>
	)
}

export default ImageCard;