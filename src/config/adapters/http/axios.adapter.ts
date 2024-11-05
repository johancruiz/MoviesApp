import axios, {AxiosInstance} from 'axios'
import { HttpAdapter } from "./http.adapter";

interface Options {
    baseUrl: string;
    params: Record<string, string> 
}


export class Axiosadapter implements HttpAdapter{

    private axiosInstance: AxiosInstance;

    constructor( options: Options ) {
        this.axiosInstance = axios.create({
            baseURL: options.baseUrl,
            params: options.params
        })
    }

    async get<T>(url: string, options?: Record<string, unknown>): Promise<T> {
        try {
            const {data} = await axios.get<T>(url, options)
            return data;
        } catch (error) {
            throw new Error('Error fetching')
        }
    }

}