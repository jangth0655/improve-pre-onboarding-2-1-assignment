export default class HttpError extends Error {
  constructor(public statusCode: number | undefined, public message: string) {
    super(message);
  }

  get errorMessage() {
    switch (this.statusCode) {
      case 404:
        this.message = '해당 데이터를 찾을 수 없습니다.';
        break;
    }
    return this.message;
  }
}
