import java.util.ArrayList;
import java.util.List;

public class assignment11 {

    // method to search element
    public static boolean ListHas(List<Integer> list, int key) {
        boolean flag = false;
        for (int i = 0; i < list.size(); i++) {
            // checking if key is matching with elements in list
            if (list.get(i) == key) {
                flag = true;
                break;
            }
        }
        return flag;
    }

    // method to bubble sorting list
    public static void sort(List<Integer> list) {
        int temp;
        for (int i = 0; i < list.size(); i++) {
            for (int j = i + 1; j < list.size(); j++) {

                // comparing consequent elements of list
                if (list.get(i) > list.get(j)) {
                    temp = list.get(i);
                    list.set(i, list.get(j));
                    list.set(j, temp);
                }
            }
        }
    }

    // method to return non unique elements
    public static List<Integer> returnNonUniqueElements(List<Integer> list1, List<Integer> list2) {
        int num;
        List<Integer> list3 = new ArrayList<>();

        for (int i = 0; i < list1.size(); i++) {
            num = list1.get(i);

            for (int j = 0; j < list2.size(); j++) {

                // checking element of list1 present in list2 or not
                if (!ListHas(list2, num)) {
                    list3.add(num);
                    break;
                }
            }
        }
        return list3;
    }

    public static void main(String[] args) {

        // list1
        List<Integer> l1 = new ArrayList<>();
        l1.add(1);
        l1.add(2);
        l1.add(8);
        l1.add(3);
        l1.add(9);
        l1.add(10);

        // list2
        List<Integer> l2 = new ArrayList<>();
        l2.add(8);
        l2.add(9);
        l2.add(6);
        l2.add(3);
        l2.add(10);
        l2.add(11);
        l2.add(12);

        // printing list1
        System.out.println("list1: " + l1);

        // printing list2
        System.out.println("list2: " + l2);

        // Declaring list to store elements present in list1 but not in list2
        List<Integer> l3 = returnNonUniqueElements(l1, l2);

        // Declaring list to store elements present in list2 but not in list1
        List<Integer> l4 = returnNonUniqueElements(l2, l1);

        // sorting list3
        sort(l3);

        // sorting list4
        sort(l4);

        // printing list3
        System.out.println("elements present in list1 but not in list2: " + l3);

        // printing list4
        System.out.println("elements present in list2 but not in list1: " + l4);

        // sorting list1
        sort(l1);

        // sorting list2
        sort(l2);

        // printing sorted list1
        System.out.println("sorted list1: " + l1);

        // printing sorted list2
        System.out.println("sorted list2: " + l2);
    }
}