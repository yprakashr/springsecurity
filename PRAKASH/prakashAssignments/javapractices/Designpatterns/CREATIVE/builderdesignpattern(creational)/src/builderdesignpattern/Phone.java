package builderdesignpattern;

public class Phone {
	private int ram;
	private String company;
	private String processor;
	private double cost;
	private String os;
	
	
	
	
	public Phone(int ram, String company, String processor, double cost, String os) {
		this.ram = ram;
		this.company = company;
		this.processor = processor;
		this.cost = cost;
		this.os = os;
	}




	@Override
	public String toString() {
		return "Phone [ram=" + ram + ", company=" + company + ", processor=" + processor + ", cost=" + cost + ", OS="
				+ os + "]";
	}

}
