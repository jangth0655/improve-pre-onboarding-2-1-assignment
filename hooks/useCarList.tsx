import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useState } from 'react';

import CarService from '../service/carService';
import HttpClient from '../service/httpClient';
import HttpError from '../service/httpError';

import { CarListType } from '../model/types';

const httpClient = new HttpClient();
const carService = new CarService(httpClient);

export const useCarList = () => {
  const router = useRouter();
  const segment = router.query.segment;
  const rootPath = router.asPath === '/';

  const [errors, setErrors] = useState('');
  const {
    data: carList,
    isLoading,
    error,
  } = useQuery<CarListType[] | undefined>(
    ['carList'],
    async () => {
      try {
        const data = await carService.fetchCarList();
        return data?.payload;
      } catch (error) {
        if (error instanceof HttpError) {
          setErrors(error.errorMessage);
        }
      }
    },
    {
      select: filterData,
    }
  );

  function filterData(data?: CarListType[]) {
    if (segment && segment !== 'all' && !rootPath) {
      return data?.filter((car) => segment === car.attribute.segment);
    }
    return data;
  }

  return {
    carList,
    isLoading,
    error: error || errors,
  };
};
