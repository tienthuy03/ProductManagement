import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AxiosInstance = (contentType = 'application/json') => {
    const axiosInstance = axios.create({
        baseURL: 'http://192.168.113.16:3000/api/',
        headers: {
            'Accept': 'application/json',
            'Content-Type': contentType,
            
        },
    });
    // axiosInstance.interceptors.request.use(
    //     async (config) => {
    //         const token = await AsyncStorage.getItem('token'); //Lay Token
    //         config.headers = {
    //             'Authorization': `Bearer ${token}`,
    //             'Accept': 'application/json',
    //             'Content-Type': contentType
    //         }
    //         return config;
    //     },
    //     err => Promise.reject(err)
    // );

    // axiosInstance.interceptors.response.use(
    //     res => res.data,
    //     err => Promise.reject(err)
    // );
    return axiosInstance;

};


export default AxiosInstance;