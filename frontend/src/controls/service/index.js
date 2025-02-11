import axios from '../axios';

export const getServices = async () => {
    try {
        const response = await axios.get('/services');
        return response.data;
    } catch (error) {
        return error;
    }
};