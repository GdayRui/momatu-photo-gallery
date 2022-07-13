import React, { useEffect, useState } from 'react';
import './App.css';
import ImageCardList from './components/ImageCardList';
import { ImageModel } from './models/image/image';
import { retrieveImages } from './services/imageService';
import './styles/app.scss'

function App() {
	const [imageList, setImageList] = useState<ImageModel[]>([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		retrieveImages()
			.then(data => {
				setImageList(data);
				setError(null);
			})
			.catch(err => setError(err.message))
	}, [])

	return (
		<div className="App">
			<ImageCardList imageList={imageList} error={error} />
		</div>
	);
}

export default App;
