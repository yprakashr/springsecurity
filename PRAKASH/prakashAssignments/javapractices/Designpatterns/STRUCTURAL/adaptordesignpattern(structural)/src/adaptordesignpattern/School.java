package adaptordesignpattern;

public class School {
public static void main(String[] args) {
	
	Pen p=new PenAdaptor();
	
	
	Assignmentwork a=new Assignmentwork();
	
a.setP(p);
a.writeAssignment("hii iam prakash");
}
}
