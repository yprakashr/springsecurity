package dateandtime;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.Month;
import java.util.Calendar;
import java.util.Date;


public class Predefineddateandtime {
	
	
	void date() {
		Calendar c=Calendar.getInstance();
		SimpleDateFormat sf=new SimpleDateFormat("dd/MM/YYYY");
		Date date=new Date();
		date.setHours(444);

		System.out.println(sf.format(date));

		Date today = c.getTime();

		date.setHours(72);
		System.out.println("This is the date in predefined format"+date);
	}
	
	void differencebetweendays() {

		Date date=new Date();
		SimpleDateFormat sf=new SimpleDateFormat("dd/MM/YYYY");
		date.setHours(444);
		System.out.println(date);
		int day1=date.getDay();
		
		
		date.setHours(72);
		int day2=date.getDay();
		int difference=day2-day1;
		System.out.println(sf.format(date));
		System.out.println("This is difference between the to date"+difference);

		
		
		
		
	}
void adding20hrs() {
	Date date=new Date();
	SimpleDateFormat sf=new SimpleDateFormat("dd/MM/YYYY");
	date.setHours(444);
	System.out.println(date);
	date.setHours(20);
	System.out.println(sf.format(date));
	System.out.println("This is the date adding 20hrs in a date"+date);
	
}
void adding5days() {
	Date date=new Date();
	SimpleDateFormat sf=new SimpleDateFormat("dd/MM/YYYY");
	date.setHours(444);

	date.setHours(120);
	System.out.println(sf.format(date));
	System.out.println("This is the date adding 5days in a date"+date);
}
	public static void main(String[] args) {

		
		Predefineddateandtime lo=new Predefineddateandtime();
lo.date();
lo.differencebetweendays();
		lo.adding20hrs();
	lo.adding5days();
	}

}
