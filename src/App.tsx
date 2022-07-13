import React, { useEffect, useState } from 'react';
import './App.css';
import ImageCardList from './components/ImageCardList';
import { ImageModel } from './models/image/image';

function App() {
	const [imageList, setImageList] = useState<ImageModel[]>([]);

	useEffect(() => {
		fetch('https://picsum.photos/v2/list')
			.then(res => res.json())
			.then(data => {
				setImageList([...data]);
			})
	})

	return (
		<div className="App">
			<ImageCardList imageList={imageList} />
		</div>
	);
}

export default App;
