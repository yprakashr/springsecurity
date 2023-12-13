package fileinputstream;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class Characterstreamoperations {
	void fileoperation1() throws Exception {
		FileReader fr = new FileReader("C:\\Users\\Hello\\Documents\\java script.txt");
		int i = fr.read();
		while ((i = fr.read()) != -1) {
			System.out.print(i);
		}
	}

	void fileoperation2() throws Exception {
		FileWriter fw = new FileWriter("C:\\Users\\Hello\\Documents\\filescript2.txt");
		System.out.println("connection created");
		String data = "hii hello I Love Jesus";
		fw.write(data);
		System.out.println("data created");
		fw.close();
	}
	
	void fileoperation3() throws Exception {
		System.out.println("copying the data from one file to one file");
		FileReader fr=new FileReader("C:\\Users\\Hello\\Documents\\java script.txt");
		System.out.println("connection created");
		FileWriter fw=new FileWriter("C:\\Users\\Hello\\Documents\\filescript3.txt");
		int x=fr.read();
		while((x=fr.read())!=-1) {
			fw.write(x);
			
		}
		System.out.println("data copied");
		fr.close();
		fw.close();
		
	}

	public static void main(String[] args) throws Exception {
		Characterstreamoperations cs = new Characterstreamoperations();
//		cs.fileoperation1();
		cs.fileoperation2();
		cs.fileoperation3();
	}
}
