package compositedesignpattern;

public class CompositeTest {
	public static void main(String[] args) {
		Component hd = new Leaf("HDD", 40000);
		Component mouse = new Leaf("mouse", 50000);
		Component monitor = new Leaf("monitor", 60000);
		Component ram = new Leaf("ram", 30000);
		Component CPU = new Leaf("CPU", 55000);

		Composite ph = new Composite("peri");
		Composite cabinet = new Composite("Cabinet");
		Composite mb = new Composite("MB");
		Composite computer = new Composite("computer");
		mb.addComponent(CPU);
		mb.addComponent(ram);
		ph.addComponent(mouse);
		ph.addComponent(monitor);
		cabinet.addComponent(hd);
		cabinet.addComponent(mb);
		

		computer.addComponent(ph);
		computer.addComponent(cabinet);

	computer.showPrice();
	
	}

}
