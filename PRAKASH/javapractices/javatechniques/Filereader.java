package javatechniques;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.Scanner;

public class Filereader {
	void meth2() throws Exception {
		File file=new File("C:\\Users\\ADMIN\\Documents\\prakash.txt");
	Scanner sc=new Scanner(file);
	//loop statement
		while(sc.hasNextLine()) {
			System.out.println(sc.nextLine());
		}
	
	
	}
	void meth1() throws Exception {
		FileReader fr=new FileReader("C:\\Users\\ADMIN\\Documents\\prakash.txt"); 
		BufferedReader br=new BufferedReader(fr);
		String str;
		
		while((str=br.readLine())!=null) {
			System.out.println(str);
		}
		br.close();
	}
	
	
	void meth3() throws Exception {
		File file=new File("C:\\Users\\ADMIN\\Documents\\prakash.txt");
		Scanner sc=new Scanner(file);
		
		sc.useDelimiter("\\z");
		System.out.println(sc.next());
	}
//Approach1: Using FileReader Bufferreader
public static void main(String[] args) throws Exception {
	Filereader f=new Filereader();
	f.meth1();
	f.meth2();
	f.meth3();
	
	}
}
