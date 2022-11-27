# 과제 개선해보기

- 프리온보딩 교육과정에서 진행 하였던 기업과제를 학습한 내용을 바탕으로 개선해보았습니다.

## 🏁 프로젝트 실행 방법

1. 의존성 패키지를 설치합니다.

```zsh
$ npm install
```

2. 프로젝트를 실행합니다.

```zsh
$ npm start
```

[배포 링크 보러가기](https://improve-pre-onboarding-2-1-assignment.vercel.app/)

✓ 모바일 사이즈에 맞게 제작하였습니다.

---

> 개선사항

- contextAPI와 useReducer를 활용해 카테고리별 상태관리와 상태에 따른 데이터를 가져오는 부분을
  **query string**에 따라 상태를 관리하고 데이터를 가져오도록 변경하였습니다.
- React-query 사용

  - cache·stale time을 설정하여
    한번 참조한 페이지는 다시 참조할 경우 **캐시데이터를 사용**하여 네트워크 부담을 줄였습니다.
  - **react-query**에 select를 사용하여 패치한 데이터를 조작해 카테고리별 데이터를 보여주었습니다.

    <br />

  - 카테고리

  ```typescript
  import { CategoryType } from '../model/types';
  const categories: CategoryType[] = [
    { text: '전체', segment: 'all' },
    { text: '대형', segment: 'E' },
    { text: '중형', segment: 'D' },
    { text: '소형', segment: 'C' },
    { text: 'SUV', segment: 'SUV' },
  ];
  class Category {
    constructor(private categoryData: CategoryType[]) {}

    get categories() {
      return [...this.categoryData];
    }
  }

  const categoryItems = new Category(categories);
  export default categoryItems;
  ```

  - query string 사용

  ```typescript
  import { useRouter } from 'next/router';
  import { CategoryType, Segment } from '../../model/types';
  import cls from '../../utils/cls';

  interface Props {
    category: CategoryType;
  }

  const CategoryItem = ({ category }: Props) => {
    const router = useRouter();
    const activeSegment = router.query.segment;

    const handleCategory = (segment?: Segment) => {
      router.push({
        pathname: router.route,
        query: {
          segment,
        },
      });
    };
    return (
      <div>
        <span
          onClick={() => handleCategory(category.segment)}
          className={cls(
            activeSegment === category.segment
              ? 'bg-black text-white'
              : 'bg-gray',
            'inline-block px-2 rounded-full transition-all'
          )}
        >
          {category.text}
        </span>
      </div>
    );
  };
  export default CategoryItem;
  ```

  - react-query default 옵션

  ```typescript
  import '../styles/globals.css';
  import type { AppProps } from 'next/app';

  import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000 * 60,
        cacheTime: 60 * 1000 * 60,
      },
    },
  });
  export default function App({ Component, pageProps }: AppProps) {
    return (
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    );
  }
  ```

  - react-query select 사용

  ```typescript
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
  ```

  <br />
