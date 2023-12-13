package serialization;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.ObjectInputStream;
import java.io.Serializable;

class Employee implements Serializable{

	String name;
	int num;
	Employee(String name,int num){
		this.name=name;
		this.num=num;
	}
}
	class Deserializable{
	public static void main(String[] args) throws Exception {
	
	FileInputStream fin=new FileInputStream("C:\\Users\\ADMIN\\Documents\\prakash1.txt");	
		ObjectInputStream in=new ObjectInputStream(fin);
		Employee e2=(Employee) in.readObject();
			in.close();
			fin.close();
			System.out.println(e2.name+" "+e2.num);
			
}}
