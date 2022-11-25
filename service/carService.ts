import axios from 'axios';
import { Segment } from '../model/types';
import HttpClient from './httpClient';
import HttpError from './httpError';

export default class CarService {
  constructor(private apiClient: HttpClient) {}

  fetchCarList = async (segment?: Segment) => {
    try {
      const { data } = await this.apiClient.carList({
        segment,
      });
      return data;
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        if (axios.isAxiosError(error) && error.response) {
          console.log('response', error.response);
          console.log('message', error.message);
          throw new HttpError(error.status, error.message);
        }
      }
    }
  };
}
