import axios from 'axios';
import { CarListType, Segment } from '../model/types';
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
        if (axios.isAxiosError(error)) {
          throw new HttpError(error.response?.status, error.message);
        }
      }
    }
  };
}
