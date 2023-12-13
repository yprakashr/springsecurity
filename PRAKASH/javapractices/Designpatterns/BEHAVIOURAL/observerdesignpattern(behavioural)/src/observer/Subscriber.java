package observer;

public class Subscriber {
private String name;
private Channel channel=new Channel();
	
	public Subscriber(String name) {
	super();
	this.name = name;
}

	void update() {
		System.out.println("Hey1,"+name+" video uploaded  "+channel.title);
	}
	
	public void subscribeChannel(Channel ch) {
		
		channel =ch;
	
	
	}
	
	
}
