package fileinputstream;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class Bufferedfilerw {
void fileoperation() throws Exception {
	BufferedReader bis=new BufferedReader(new FileReader("C:\\Users\\Hello\\Documents\\11-06-2022.txt"));
int s1=bis.read();
while((s1=bis.read())!=-1) {
 System.out.print((char)s1);	
}}
void fileoperation2() throws Exception {
	BufferedWriter bos=new BufferedWriter(new FileWriter("C:\\Users\\Hello\\Documents\\file2.txt"));
	String s1="hii hello how are you";
	bos.write(s1);
	bos.close();
}
void fileoperation3() throws Exception {
	BufferedWriter bos=new BufferedWriter(new FileWriter("C:\\Users\\Hello\\Documents\\file2.txt"));
	BufferedReader bis=new BufferedReader(new FileReader("C:\\Users\\Hello\\Documents\\11-06-2022.txt"));
	int s2=bis.read();
while((s2=bis.read())!=-1) {
	bos.write(s2);
}
	
	bos.close();
	bis.close();
}
public static void main(String[] args)throws Exception  {
	Bufferedfilerw brw=new Bufferedfilerw();
	brw.fileoperation();
	brw.fileoperation2();
	brw.fileoperation3();
	
}
}
