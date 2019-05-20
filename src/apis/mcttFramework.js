import axios from 'axios';

export default axios.create({
    // Docker service framework
    //baseURL: 'http://mctt-framework:8080'

    baseURL: 'http://localhost:8080'
});