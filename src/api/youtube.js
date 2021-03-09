import axios from 'axios'

const KEY = 'AIzaSyBcFCQ5bHPLbWZpGDG1ZEKsuMUjn-AnEeE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});