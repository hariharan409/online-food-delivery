import authKeyService from "../services/auth.key.service.ts";
import { sendResponse } from "../utils/api.response.ts";
import { RequestHandler } from "express";


export const authenticateRequest: RequestHandler = async (req, res, next) => {
    try {
        const accessId      = req.headers['x-access-id'] as string;
        const clientId      = req.headers['x-client-id'] as string;
        const clientSecret  = req.headers['x-client-secret'];

        if (!accessId || !clientId || !clientSecret) {
            sendResponse({request: req, response: res, statusCode: 400, success: false, message: 'Missing authentication headers', data: null});
            return;
        };

        // fetch auth key from database and validate
        const authKey = await authKeyService.findOneAuthKeyByKeys(accessId, clientId);

        if(!authKey) {
            sendResponse({request: req, response: res, statusCode: 401, success: false, message: 'Invalid access ID or client ID', data: null});
            return;
        };

        if(authKey.client_secret !== clientSecret) {
            sendResponse({request: req, response: res, statusCode: 401, success: false, message: 'Invalid client secret', data: null});
            return;
        };

        if(authKey.status !== 'active') {
            sendResponse({request: req, response: res, statusCode: 403, success: false, message: `Auth key is ${authKey.status}`, data: null});
            return;
        };

        next(); // proceed to the next middleware or route handler
    } catch (error: any) {
        sendResponse({ request: req, response: res, statusCode: 500, success: false, message: 'Internal Server Error', data: null });
        return;
    }
};