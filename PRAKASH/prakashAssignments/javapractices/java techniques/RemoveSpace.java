package javatechniques;

public class RemoveSpace {

	public static void main(String[] args) {
		String s="java  is  awesome";
		String a=s.replaceAll("\\s", "");
		System.out.println(a);

	}

}
