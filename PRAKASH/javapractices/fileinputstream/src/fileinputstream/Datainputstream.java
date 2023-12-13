package fileinputstream;

import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;

public class Datainputstream {
public Datainputstream(FileInputStream fileInputStream) {
		// TODO Auto-generated constructor stub
	}
void fileoperation() throws Exception {
	DataOutputStream dos=new DataOutputStream(new FileOutputStream("C:\\Users\\Hello\\Documents\\11-06-2022.txt"));
dos.writeBoolean(false);
dos.writeInt(2000);
dos.writeInt(5000);
dos.writeChar('a');
dos.writeDouble(500.02D);
dos.writeFloat(5.5f);
dos.close();
System.out.println("-------------------------------");
DataInputStream dis=new DataInputStream(new FileInputStream("C:\\Users\\Hello\\Documents\\11-06-2022.txt"));
System.out.println(dis.readBoolean());
System.out.println(dis.readInt());
System.out.println(dis.readInt());
System.out.println(dis.readChar());
System.out.println(dis.readDouble());
System.out.println(dis.readFloat());

dis.close();
}
public static void main(String[] args) throws Exception {
	Datainputstream d=new Datainputstream(null);
	d.fileoperation();
}
}
