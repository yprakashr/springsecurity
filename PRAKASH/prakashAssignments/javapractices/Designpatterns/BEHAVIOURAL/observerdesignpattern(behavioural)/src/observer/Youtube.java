package observer;

public class Youtube {
public static void main(String[] args) {

	Channel telugu=new Channel();
	Subscriber sb1=new Subscriber("prakash");
	Subscriber sb2=new Subscriber("mounika");
	Subscriber sb3=new Subscriber("vidya");
	Subscriber sb4=new Subscriber("divya");
	Subscriber sb5=new Subscriber("murali");
	
	telugu.subscribed(sb5);
	telugu.subscribed(sb4);
	telugu.subscribed(sb3);
	telugu.subscribed(sb2);
	telugu.subscribed(sb1);
	
	sb1.subscribeChannel(telugu);
	sb2.subscribeChannel(telugu);
	sb3.subscribeChannel(telugu);
	sb4.subscribeChannel(telugu);
	sb5.subscribeChannel(telugu);
	
	telugu.upload("How to learn programming???");
	
	
	
}
	
}
