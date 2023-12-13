package adaptordesignpattern;

import com.krishna.PilotPen;

public class PenAdaptor implements Pen{

	PilotPen pp=new PilotPen();
	
	
	@Override
	public void write(String str) {
		pp.mark(str);
	}

	

}
