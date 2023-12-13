package compositedesignpattern;

import java.util.ArrayList;
import java.util.List;

public interface Component2 {

	void show();
}

class Leaf2 implements Component2{

	private String name;
	private int price;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}



	@Override
	public void show() {

		
		
	}
	
}


class Composite2 implements Component2{
	private String name;
	private List<Component2> components=new ArrayList<>();
	
	
	public Composite2(String name) {
		super();
		this.name = name;
	}

public void addcomponent(Component2 com) {
	components.add(com);
}
	@Override
	public void show() {

		for(Component2 c:components) {
			
			c.show();
			
			
		}
		
	}
	
}