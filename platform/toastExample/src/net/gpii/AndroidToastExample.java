package net.gpii;

import org.meshpoint.anode.bridge.Env;
import org.meshpoint.anode.idl.IDLInterface;
import org.meshpoint.anode.java.Base;


public abstract class AndroidToastExample extends Base {
//	private static short classId = Env.getInterfaceId(ToastExample.class);
//    protected ToastExample() { super(classId); }
    private static IDLInterface iface = Env.getCurrent().getInterfaceManager().getByClass(AndroidToastExample.class);
	protected AndroidToastExample() { super(iface.getId()); }
	
	public abstract void showToast();
}

