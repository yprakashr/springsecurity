package reflectionapi;

import java.lang.reflect.Array;

public class GetAndSetArrayUsingreflectiontest {
public static void main(String[] args) {
	double[] doubleArray=(double[]) Array.newInstance(double.class, 5);
	System.out.println("length of array:  "+doubleArray.length);
System.out.println("--------setting values using setDouble and set methods-----");
Array.setDouble(doubleArray,0,15.0);
Array.setDouble(doubleArray,2,45.0);
Array.set(doubleArray,1,29.0);
System.out.println("------Getting values using getDouble and get methods");
System.out.println("Fist element: "+Array.get(doubleArray,1));
System.out.println("second element: "+Array.getDouble(doubleArray, 2));
System.out.println("third element: "+Array.getDouble(doubleArray,3));
System.out.println("fourth element: "+Array.get(doubleArray,0));
System.out.println("fifth element: "+Array.get(doubleArray,4));
}
}
