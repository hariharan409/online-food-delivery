import { Request, Response } from 'express';
import logger from '../config/logger.ts';

interface SendResponseParams {
  request: Request;
  response: Response;
  statusCode: 200 | 400 | 401 | 403 | 500;
  success: boolean;
  message: string;
  data?: any;
};

export const sendResponse = ({ request, response, statusCode, success, message, data = null }: SendResponseParams): Response => {

  // log only when there's an error
  if(statusCode === 500 || statusCode === 401) {
    logger.error(`${request.method} ${request.originalUrl} ${statusCode} - ${message}`);
  };

  // Hide sensitive messages for production 500 errors
  const responseMessage = (statusCode === 500 && process.env.NODE_ENV !== 'dev') ? 'Internal Server Error' : message;

  return response.status(statusCode).send({
    success,
    message: responseMessage,
    data,
  });
};
  