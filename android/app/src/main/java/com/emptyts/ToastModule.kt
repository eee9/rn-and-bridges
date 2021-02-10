package com.emptyts

import android.widget.Toast
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.util.*

class CustomNative(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "CustomNative"
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
    fun showK(message: String) {
        Toast.makeText(reactApplicationContext, "KB: $message", Toast.LENGTH_SHORT).show()
    }

    @ReactMethod
    fun showLongK(message: String) {
        Toast.makeText(reactApplicationContext, "KB: $message", Toast.LENGTH_LONG).show()
    }

    companion object {
        private const val DURATION_SHORT_KEY = "SHORT"
        private const val DURATION_LONG_KEY = "LONG"
    }
}
