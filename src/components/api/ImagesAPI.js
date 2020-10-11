import axios from 'axios';

const getImagesFromApi = (searchQuery, page)=>{
    const keyAPI = '17975511-a1a75a89facdad63fcb9c5ee1';
    return axios
    .get(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${keyAPI}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(resp => resp.data.hits)
}

export default getImagesFromApi;
