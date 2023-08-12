import { toast } from 'react-toastify';
import { ToastOptions } from 'react-toastify/dist/types';
import { ToastType } from '../configs/enums';
import { defaultToastConfig } from '../configs/default-values';

export const getErrorMessage = (message: any) => {
  let errorMessage;
  switch (true) {
    case typeof message === 'string':
      errorMessage = message;
      break;
    case Array.isArray(message):
      errorMessage = message.join(', ');
      break;
    default:
      errorMessage = 'Server Error';
      break;
  }
  return errorMessage;
};

export const showToast = (type: ToastType, message: string, config?: ToastOptions) => {
  switch (type) {
    case ToastType.INFO:
      toast.info(message ?? 'No information available', config ?? defaultToastConfig);
      break;
    case ToastType.ERROR:
      toast.error(message ?? 'Something went wrong', config ?? defaultToastConfig);
      break;
    case ToastType.SUCCESS:
      toast.success(message ?? 'successs', config ?? defaultToastConfig);
      break;
  }
};
