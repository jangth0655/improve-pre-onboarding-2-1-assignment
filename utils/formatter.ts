import { FuelCase, SegmentCase } from '../model/enums';
import { FuelType, Segment } from '../model/types';

class Format {
  convertCurrency = (currency?: number, month = '월') => {
    if (!currency) return;
    const formatter = new Intl.NumberFormat('ko');
    return `${month} ${formatter.format(currency)} 원`;
  };

  convertFuel = (fuel?: FuelType) => {
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

  convertSegment = (segment?: Segment) => {
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
  convertDate = (date?: Date) => {
    if (!date) return;
    const newDate = new Date(date);
    const formateDate = newDate?.toLocaleDateString('ko', {
      month: 'short',
      day: 'numeric',
      weekday: 'short',
    });
    return formateDate;
  };
}

const formatter = new Format();

export default formatter;
