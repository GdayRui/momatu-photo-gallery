import React, { useEffect, useState } from 'react';
import './App.css';
import ImageCardList from './components/ImageCardList';
import { ImageModel } from './models/image/image';
import { retrieveImages } from './services/retrieveImages';
import './styles/app.scss'

function App() {
	const [imageList, setImageList] = useState<ImageModel[]>([]);

	useEffect(() => {
		retrieveImages()
			.then((data) => setImageList(data))
	}, [])

	return (
		<div className="App">
			<ImageCardList imageList={imageList} />
		</div>
	);
}

export default App;
