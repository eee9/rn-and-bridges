import {NativeModules} from 'react-native';

//--------------------------------------------------------------------------------------------------
// Toast from Android
export const Toast = (msg: string) => {
  NativeModules.MxJToast.show(msg);
};
export const ToastLong = (msg: string) => {
  NativeModules.MxJToast.showLong(msg);
};
export const testLogcat = (msg: string) => {
  NativeModules.MxJToast.testLogcat(msg);
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
