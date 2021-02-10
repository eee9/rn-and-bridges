import {NativeModules} from 'react-native';

//--------------------------------------------------------------------------------------------------
// Toast from Android
export const Toast = (msg: string) => {
  NativeModules.MxRNToast.show(msg);
};
export const ToastLong = (msg: string) => {
  NativeModules.MxRNToast.showLong(msg);
};
export const testLogcat = (msg: string) => {
  NativeModules.MxRNToast.testLogcat(msg);
};

//--------------------------------------------------------------------------------------------------
// Fullscreen funcs from Android
export const toggleFullscreenAnd = () => {
  NativeModules.MxRNFullScreen.toggle();
};
export const enableFullscreenAnd = () => {
  NativeModules.MxRNFullScreen.enable();
};
export const disableFullscreenAnd = () => {
  NativeModules.MxRNFullScreen.disable();
};
export const isFullscreenCBAnd = (cb: (r: string) => void) => {
  NativeModules.MxRNFullScreen.isFullscreenCB(cb);
};
export const isFullscreenAsyncAnd = async (): Promise<boolean> => {
  return await NativeModules.MxRNFullScreen.isFullscreenAsync();
};
