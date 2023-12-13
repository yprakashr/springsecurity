package factorydesignpattern;

public class ComputerFactory {
private ComputerFactory() {
	
}

public static Computer getComputer(AbstractComputerFactory abstractComputerFactory) {
	return abstractComputerFactory.createComputer();
	
}
}
