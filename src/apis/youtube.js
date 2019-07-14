import axios from 'axios';

const KEY = 'AIzaSyA0y99JlReshTiw7_zb7rtZT2kZMYL9sYc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});