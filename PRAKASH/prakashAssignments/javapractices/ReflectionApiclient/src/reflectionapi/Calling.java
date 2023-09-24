package reflectionapi;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.Arrays;

public class Calling {
	public static void main(String[] args) throws Exception {
		Class<?> cls=	Class.forName("reflectionapi.Gettinginfoofclasses");
			Constructor<?>[] con=cls.getDeclaredConstructors();
			System.out.println(Arrays.toString(con));
			Method[] meth=cls.getDeclaredMethods();
			System.out.println(Arrays.toString(meth));
			Field[] meth1=cls.getDeclaredFields();
			System.out.println(Arrays.toString(meth1));
			System.out.println(cls.getName());
			System.out.println(cls.getSimpleName());
			System.out.println(cls.getModifiers());
			System.out.println(cls.getPackageName());
			System.out.println(cls.getTypeName());
			System.out.println(cls.getClassLoader());
			System.out.println(cls.getTypeParameters());
			System.out.println(cls.getPackage());
			
		}
}
