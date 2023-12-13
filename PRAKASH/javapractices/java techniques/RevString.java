package javatechniques;

public class RevString {

	public static void main(String[] args) {
	String str="java is awesome being logical";
		String word[]=str.split(" ");
		String reverse="";
		for(String w:word) {
			String reverseword="";
			for(int i=w.length()-1;i>=0;i--) {
				reverseword=reverseword+w.charAt(i);
			}
			reverse=reverse+reverseword+" ";
		}
System.out.println(reverse);
	}

}
