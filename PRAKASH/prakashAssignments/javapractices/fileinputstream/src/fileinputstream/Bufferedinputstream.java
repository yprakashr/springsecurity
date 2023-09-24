package fileinputstream;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;

public class Bufferedinputstream {

	public void fileoperation() throws Exception {
	BufferedInputStream bis=new BufferedInputStream(new FileInputStream("C:\\Users\\Hello\\Documents\\11-06-2022.txt"));
System.out.println("connection established");
	int s=bis.read();
	while((s=bis.read())!=-1) {
		System.out.print((char)s);
	}}
	
	public void fileoperation2() throws Exception{
	BufferedOutputStream bos=new BufferedOutputStream(new FileOutputStream("C:\\Users\\Hello\\Documents\\scriptfile4.txt"));
	String s="hii hello how are you";
	byte[] arr=s.getBytes();
	bos.write(arr);
	bos.close();
	}
	public void fileoperation3() throws Exception {
		BufferedInputStream bis=new BufferedInputStream(new FileInputStream("C:\\Users\\Hello\\Documents\\11-06-2022.txt"));
		BufferedOutputStream bos=new BufferedOutputStream(new FileOutputStream("C:\\Users\\Hello\\Documents\\scriptfile4.txt"));
	int r;
	while((r=bis.read())!=-1) {
		bos.write(r);
		System.out.print((char)r);
	}
	bis.close();
	bos.close();
	
	}
public static void main(String[] args) throws Exception {
	Bufferedinputstream b=new Bufferedinputstream();
//	b.fileoperation();
	b.fileoperation2();
	b.fileoperation3();
}

}
