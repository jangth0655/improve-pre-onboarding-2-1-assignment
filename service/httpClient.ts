import axios, { AxiosInstance } from 'axios';

export default class HttpClient {
  private httpClient: AxiosInstance;
  constructor() {
    this.httpClient = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    });
  }

  carList = (params?: any) => {
    return this.httpClient({
      params,
    });
  };
}
