package client;

import factorydesignpattern.Computer;
import factorydesignpattern.ComputerFactory;
//import factorydesignpattern.ComputerType;
import factorydesignpattern.LaptopFactory;
import factorydesignpattern.PCFactory;
import factorydesignpattern.ServerFactory;

public class ClientTest {
public static void main(String[] args) {
	Computer pc=ComputerFactory.getComputer(new PCFactory( "16GB", "120GB", "2,23 HZ", true, false));
	System.out.println("PC Config :"+pc);
	Computer server=ComputerFactory.getComputer(new ServerFactory("64GB", "500GB", "2,29 HZ", true, false));
	System.out.println("Server Config :"+server);
	Computer laptop=ComputerFactory.getComputer(new LaptopFactory( "32GB", "1000GB", "2,23 HZ", true, false));
	System.out.println("Laptop Config :"+laptop);




}
}
