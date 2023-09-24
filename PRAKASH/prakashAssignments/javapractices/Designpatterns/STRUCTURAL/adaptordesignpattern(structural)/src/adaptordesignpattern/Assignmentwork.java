package adaptordesignpattern;

public class Assignmentwork {
	
private Pen p;

public void setP(Pen p) {
	this.p = p;
}

public Pen getP() {
	return p;
}

public void writeAssignment(String str) {
	p.write(str);
	
}



}
