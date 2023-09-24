package builderdesignpattern;

public class Shop {
	public static void main(String[] args) {
		String p = new Phone(8, "solventek", "i3", 50000.00, "android").toString();
		System.out.println(p);

		Phone pp = new Phonebuilder().setCompany("Qualcomm").setCost(50000.00).getPhone();
		System.out.println(pp);

	}
}
