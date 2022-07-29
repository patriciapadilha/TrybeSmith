class HttpException extends Error {
  status: number;
  // a interface erro já possui message
 
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

export default HttpException;