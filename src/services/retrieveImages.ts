import { ImageModel } from "../models/image/image";

const API_BASE_URL = 'https://picsum.photos/'; // Could be in .env

const END_POINTS = {
	imageList: 'v2/list'
}

export function retrieveImages(): Promise<ImageModel[]> {
	return fetch(`${API_BASE_URL}${END_POINTS.imageList}`)
		.then(res => res.json());
}