import axios from '../axios';
import { isLogged } from '../login';

export const getServices = async () => {
    try {
        const response = await axios.get('/services');
        return response.data;
    } catch (error) {
        return error;
    }
};

export const createService = async (formData) => {
    try {
        const token = isLogged();
        const response = await axios.post('/services', formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        return error;
    }
};