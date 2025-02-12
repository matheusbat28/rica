import axios from '../axios';
import { isLogged } from '../login';

export const getServices = async () => {
    try {
        const response = await axios.get('services');
        return response.data;
    } catch (error) {
        return error;
    }
};

export const createService = async (formData) => {
    const logged = isLogged();

    if (!logged) {
        return false;
    }

    const accessToken = localStorage.getItem('access');

    try {
        const response = await axios.post('services', formData, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    }
    catch (error) {
        return error;
    }
};  