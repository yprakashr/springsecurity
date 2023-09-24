package javatechniques;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class Filewriter {

	void filewriter() throws Exception {
		FileWriter fw=new FileWriter("C:\\Users\\ADMIN\\Documents\\prakash4.txt");
		BufferedWriter bw=new BufferedWriter(fw);
	bw.write("selenium with java");
	bw.write("selenium with phthon");
	bw.write("selenium with C#");
	bw.write("selenium with .net");
	bw.write("selenium with javaEE");
	bw.write("selenium with javaSE");
	System.out.println("Finished!!");
	bw.close();
	}
	
	
	public static void main(String[] args) throws Exception {
		Filewriter fwr=new Filewriter();
		fwr.filewriter();
}
}
