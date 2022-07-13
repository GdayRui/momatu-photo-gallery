import { ImageModel } from "../models/image/image";

const API_BASE_URL = 'https://picsum.photos/'; // Could be in .env

const END_POINTS = {
	imageList: 'v2/list'
} // Could be in a seperate file.

export function retrieveImages(): Promise<ImageModel[]> {
	return fetch(`${API_BASE_URL}${END_POINTS.imageList}`)
		.then(res => {
			if (!res.ok) {
				throw Error('There is something wrong when retrieving images..')
			}
			return res.json()
		});
}