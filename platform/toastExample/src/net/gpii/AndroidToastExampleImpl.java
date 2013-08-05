package net.gpii;

import org.meshpoint.anode.AndroidContext;
import org.meshpoint.anode.module.IModule;
import org.meshpoint.anode.module.IModuleContext;

import android.content.Context;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;
import android.widget.Toast;


public class AndroidToastExampleImpl extends AndroidToastExample implements IModule {

	IModuleContext ctx;
	private Context androidContext;

	@Override
	public void showToast() {
		doShowToast("Hello from Java module!");
	}

	@Override
	public Object startModule(IModuleContext ctx) {
		this.ctx = ctx;
		this.androidContext = ((AndroidContext)ctx).getAndroidContext();
		doShowToast("Loading ToastExampleImpl java module");

	    Log.d("GPII TOAST EXAMPLE", "this = " + this); 
		return this;
	}

	@Override
	public void stopModule() {

	}

	private void doShowToast(final String text){
		Handler handler = new Handler(Looper.getMainLooper());	
		handler.post(new Runnable() {
		@Override
		public void run() {
		    Toast.makeText(androidContext, text, Toast.LENGTH_LONG).show();
		};
	    });
	}
}
