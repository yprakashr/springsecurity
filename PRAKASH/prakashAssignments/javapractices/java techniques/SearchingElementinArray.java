package javatechniques;

public class SearchingElementinArray {
	void search() {
		int a[] = { 10, 20, 20, 30, 742, 0, 632, 65 };
		int search_ele = 30;
		boolean flag = false;
		for (int i = 0; i < a.length; i++) {
//		System.out.println(a[i]);
			if (search_ele == a[i]) {
				System.out.println("Element fount at :" + i);
				break;
			}
		}
		if (flag == true) {
			System.out.println("Element not found");
		}
	}

	public static void main(String[] args) {
		SearchingElementinArray sa = new SearchingElementinArray();
		sa.search();

	}
}
