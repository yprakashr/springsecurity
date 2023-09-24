package compositedesignpattern;

import java.util.ArrayList;
import java.util.List;

public interface Component {	
	void showPrice();

}



class Leaf implements Component{
 int price;
 String name;
 
	
	
	
	public Leaf(String name, int price) {
	this.name = name;
	this.price=price;
}


	@Override
	public void showPrice() {
		System.out.println(name+":"+price);
		
		
	}
	
}
class Composite implements Component{
	String name;
	List<Component> components=new ArrayList<>();
	
	
	public Composite(String name) {
		super();
		this.name = name;
	}
	
	
	public void addComponent(Component com) {
		components.add(com);
		
	}
	
	
	@Override
	public void showPrice() {
		
		System.out.println(name);
		for(Component c:components) {
			c.showPrice();
		}
		
	}

	
}
