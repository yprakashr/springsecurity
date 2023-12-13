package fileinputstream;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

public class Objectstreams {
	
	public static void main(String[] args) throws Exception {
	ClassA aobj=new ClassA();
	ClassA bobj=new ClassA();
System.out.println("implementing object stream");		
ObjectOutputStream obj1=new ObjectOutputStream(new FileOutputStream("C:\\Users\\Hello\\Documents\\serfile2.ser"));
obj1.writeObject(aobj);
obj1.writeObject(bobj);
obj1.close();
ObjectInputStream obj2=new ObjectInputStream(new FileInputStream("C:\\Users\\Hello\\Documents\\serfile2.ser"));
//
ClassA objr=(ClassA) obj2.readObject();
ClassB objb=(ClassB) obj2.readObject();
System.out.println(objr.a+" "+objr.b);
System.out.println(objb);
obj2.close();

//ObjectInputStream obj2=new ObjectInputStream(new FileInputStream("C:\\Users\\Hello\\Documents\\serfile2.ser"));
//System.out.println(obj2.readObject());

}}
















