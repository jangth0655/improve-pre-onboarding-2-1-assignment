import axios, { AxiosInstance } from 'axios';
import { CarList } from '../model/types';

export default class HttpClient {
  private httpClient: AxiosInstance;
  constructor() {
    this.httpClient = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    });
  }

  carList = (params?: any) => {
    return this.httpClient<CarList>({
      params,
    });
  };
}
