import java.io.File;
import java.io.FileOutputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;

class Employee implements Serializable{
    String name;
    int num;

    Employee(String name,int num){
        this.name=name;
        this.num=num;
    }

}
class serializeDemo{
    public static void main(String[] args) {
        Employee e=new Employee("prakash", 56);
try{
    FileOutputStream fout=new FileOutputStream("D:\\prakash.ser");
    ObjectOutputStream out=new ObjectOutputStream(fout);
    out.writeObject(e);
    out.close();
    fout.close();
    System.out.println("success");
}   catch(Exception t){
t.printStackTrace();
}     
    }
}








