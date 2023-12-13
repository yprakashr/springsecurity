package observer;

import java.util.ArrayList;
import java.util.List;

public class Channel {
	String title;
	private List<Subscriber> subs = new ArrayList<>();

	public void subscribed(Subscriber sub) {
		subs.add(sub);
	}

	public void unsubscribed(Subscriber sub) {
		subs.remove(sub);
	}

	public void notifySubscriber() {
		for (Subscriber sub : subs) {
			sub.update();
		}
	}

	public void upload(String str) {
		this.title = str;
		notifySubscriber();
	}
}




