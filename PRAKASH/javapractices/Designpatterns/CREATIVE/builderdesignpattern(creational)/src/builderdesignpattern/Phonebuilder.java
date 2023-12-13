package builderdesignpattern;

public class Phonebuilder {
	private int ram;
	private String company;
	private String processor;
	private double cost;
	private String os;
	public Phonebuilder setRam(int ram) {
		this.ram = ram;
		return this;
	}
	public Phonebuilder setCompany(String company) {
		this.company = company;
		return this;
	}
	public Phonebuilder setProcessor(String processor) {
		this.processor = processor;
		return this;
	}
	public Phonebuilder setCost(double cost) {
		this.cost = cost;
		return this;
	}
	public Phonebuilder setOs(String os) {
		this.os = os;
		return this;
	}
	
	public Phone getPhone() {
		return new Phone(ram, company, processor, cost, os);
		
	}

	
	
	
	
	
	
	
	
	
	
}
