import { FuelCase, SegmentCase } from '../model/enums';
import { FuelType, Segment } from '../model/types';

class Format {
  convertCurrency = (currency: number, month = '월') => {
    const formatter = new Intl.NumberFormat('ko');
    return `${month} ${formatter.format(currency)} 원`;
  };

  convertFuel = (fuel: FuelType) => {
    switch (fuel) {
      case 'ev':
        return FuelCase.EV;
      case 'gasoline':
        return FuelCase.GASOLINE;
      case 'hybrid':
        return FuelCase.HYBRID;
      default:
        return;
    }
  };

  convertSegment = (segment: Segment) => {
    switch (segment) {
      case 'C':
        return SegmentCase.C;
      case 'D':
        return SegmentCase.D;
      case 'E':
        return SegmentCase.E;
      case 'SUV':
        return SegmentCase.SUV;
      default:
        return;
    }
  };
}

const formatter = new Format();

export default formatter;
