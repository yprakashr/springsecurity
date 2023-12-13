package factorypattern;

public class Shop {
	public static void main(String[] args) {
		FactoryPattern f=new FactoryPattern();
		
		OS s=f.getInstance("close");
		
		s.spec();
	}
}
