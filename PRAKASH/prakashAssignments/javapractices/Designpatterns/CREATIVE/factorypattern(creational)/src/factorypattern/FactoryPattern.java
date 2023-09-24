package factorypattern;

public class FactoryPattern {

	public OS getInstance(String str) {
		if(str=="open") {
			return new Android();
			
		}else {
			if(str=="close") {
				
				return new IOS();
			}else {
				return new Windows();
			}
			
		
		}
		
	}
	
	
}
