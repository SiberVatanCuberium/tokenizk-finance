import type { AxiosResponse } from 'axios';
import { $axiosCoreService } from './client';
import type { ResponseError } from './response-error';

type ResponseSuccessCallback = (response: AxiosResponse) => void;
type ResponseErrorCallback = (error: ResponseError) => void;

interface CallbackTrigger {
    responseSuccess: ResponseSuccessCallback;
    responseError: ResponseErrorCallback;
}


$axiosCoreService.interceptors.response.use(
    (response: AxiosResponse) => {
        if (callbackTrigger.responseSuccess) callbackTrigger.responseSuccess(response);
        return response;
    },

    async (error: ResponseError) => {
     try{
        if (error.response && error.response.status !== 0) {
            error.isNetworkError = false;
        } else {
            error.isNetworkError = true;
        }
      }catch(error){
         console.log(error)
      }
        if (callbackTrigger.responseError) {
            callbackTrigger.responseError(error);
        }
        return Promise.reject(error);
    }
);
export function onResponseSuccess(callback: ResponseSuccessCallback): void {
    callbackTrigger.responseSuccess = callback;
}

export function onResponseError(callback: ResponseErrorCallback): void {
    callbackTrigger.responseError = callback;
}
