// MxRNToast.java

package com.mxrnpackages;

import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class MxRNToast extends ReactContextBaseJavaModule {

  private static String MODULE_NAME = "MxRNToast";
  @Override
  public String getName() {
    return MODULE_NAME;
  }
  private static String TAG = MODULE_NAME;

  MxRNToast(ReactApplicationContext context) { super(context); }

  @ReactMethod
  public void show(String message) {
    Toast.makeText(getReactApplicationContext(), "jb: " + message, Toast.LENGTH_SHORT).show();
  }

  @ReactMethod
  public void showLong(String message) {
    Toast.makeText(getReactApplicationContext(), "jb: " + message, Toast.LENGTH_LONG).show();
  }

  @ReactMethod
  public void testLogcat(String message) {
    Log.d(TAG, message);
  }

}
