import axios from 'axios'
import { HttpAdapter } from "./http.adapter";


export class Axiosadapter implements HttpAdapter{
    get<T>(url: string, options?: Record<string, unknown>): Promise<T> {
        try {
            const resp = axios.get(url, options)
        } catch (error) {
            throw new Error('Error fetching')
        }
    }

}