package prototype;

public class Book {
private String name;
private int bid;
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public int getBid() {
	return bid;
}
public void setBid(int bid) {
	this.bid = bid;
}
@Override
public String toString() {
	return "Book [name=" + name + ", bid=" + bid + "]";
}

}
