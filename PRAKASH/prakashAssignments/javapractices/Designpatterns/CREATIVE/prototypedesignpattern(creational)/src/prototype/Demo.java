package prototype;

public class Demo {
	public static void main(String[] args) throws CloneNotSupportedException {
		BookShop bs = new BookShop();
		bs.setShopName("novalty");
		bs.loaddata();
		
		
		
		
	BookShop bs1= bs.clone();
	bs.getBooks().remove(2);
	bs1.setShopName("prakash");

	
	System.out.println(bs);
	System.out.println(bs1);
	
	
		
	}
}
