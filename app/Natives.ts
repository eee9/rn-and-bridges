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
// Kotlin
export const ToastK = (msg: string) => {
  NativeModules.MxKToast.show(msg);
};
export const ToastLongK = (msg: string) => {
  NativeModules.MxKToast.showLong(msg);
};
export const testPromise = async (): Promise<string> => {
  return await NativeModules.MxKToast.testPromise();
};
export const test = async (): Promise<string> => {
  return await NativeModules.MxKToast.test();
};
export const testCallback = (cb: (r: string) => void) => {
  NativeModules.MxKToast.testCallback(cb);
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
