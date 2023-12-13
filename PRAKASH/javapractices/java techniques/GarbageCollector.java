package javatechniques;

public class GarbageCollector {

	public static void main(String [] args) {
		GarbageCollector g=new GarbageCollector();
		GarbageCollector g1=new GarbageCollector();
//	g=null;
//	g1=null;
//	g=g1;
//	new GarbageCollector();
	System.gc();
	}
	public void finalize() {
	System.out.println( "6arbage Collector Called");
}}
