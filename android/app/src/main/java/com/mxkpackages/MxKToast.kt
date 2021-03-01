package com.mxkpackages

import android.widget.Toast
import com.facebook.react.bridge.*
import java.util.*


class CustomNative(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return "MxKToast"
  }

  companion object {
    private const val DURATION_SHORT_KEY = "SHORT"
    private const val DURATION_LONG_KEY = "LONG"
  }

  override fun getConstants(): Map<String, Any>? {
    val constants = HashMap<String, Any>()
    constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT)
    constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG)
    return constants
  }

  @ReactMethod
  fun toast(message: String, duration: Int) {
    Toast.makeText(reactApplicationContext, message, duration).show()
  }

  @ReactMethod
  fun show(message: String) {
    Toast.makeText(reactApplicationContext, "Kt: $message", Toast.LENGTH_SHORT).show()
  }

  @ReactMethod
  fun showLong(message: String) {
    Toast.makeText(reactApplicationContext, "Kt: $message", Toast.LENGTH_LONG).show()
  }

  @ReactMethod
  fun testCallback(callback: Callback) {
    val res = "Kt testCallback(), L2A."
    callback.invoke(res)
  }

  @ReactMethod
  fun testPromise(promise: Promise) {
    val res = "Kt of testPromise(), L2A."
    promise.resolve(res)
  }

  @ReactMethod
  fun testPromise2(t: String, promise: Promise) {
    promise.resolve("$t = $t")
  }

  @ReactMethod
  fun test(promise: Promise) {
    // something from Kotlin
    var res: String = "Kt res: "
    for(i in 0..6 step 2) {      // 3
      res += "$i-"
    }
    promise.resolve(res)
  }
}
