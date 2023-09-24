package fileinputstream;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

public class Fileoperations {
	
	void fileoperation1() throws Exception {
		FileInputStream fis=new FileInputStream("C:\\Users\\Hello\\Documents\\11-06-2022.txt");
	System.out.println("connection created");
		int i;
	while((i=fis.read())!=-1) {
		System.out.print((char)i);
	}	}
	void fileoperation2() throws Exception {
		FileOutputStream fos=new FileOutputStream("C:\\Users\\Hello\\Documents\\file2.txt",true);
		String data=", because it is awesome";
		byte arr[]=data.getBytes();
		fos.write(arr);
	}
	void fileoperation3() throws Exception {
		FileInputStream fis=new FileInputStream("C:\\Users\\Hello\\Documents\\pic1.png");
		FileOutputStream fos=new FileOutputStream("C:\\Users\\Hello\\Documents\\pic2.png");
		int x;
		while((x=fis.read())!=-1) {
		fos.write(x);
		System.out.print((char)x);
		}
		System.out.println(" ");
		System.out.println("Data Copied");
		fis.close();
		fos.close();
	}
	
public static void main(String[] args) throws Exception {
	Fileoperations fs=new Fileoperations();
	fs.fileoperation1();
	fs.fileoperation2();
	fs.fileoperation3();
	
	
	
}
}
