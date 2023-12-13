package dateandtime;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.time.temporal.TemporalQuery;
import java.util.Calendar;
import java.util.Date;
import java.util.Scanner;

public class Userdefineddateandtime {

	public static void convertingtimetoAMPM() {
		
		Date date=new Date();
		
		SimpleDateFormat format=new SimpleDateFormat("dd/MM/yyyy hh:mm aa");
		
		System.out.println("\n Display Current Time in 12 hours format"+format.format(date));
        
	}
public static void 	datetimeformatteram() {
	System.out.println("");
	System.out.println("");
	System.out.println("*********************local date and time format in AM/PM************************");
	
	LocalTime loti=LocalTime.of(15, 55,55);
	LocalDate loda=LocalDate.of(2022, 12, 21);
	LocalDateTime ti=LocalDateTime.of(loda, loti);

	
	DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy hh:mm a");
	//SimpleDateFormat format=new SimpleDateFormat("dd/MM/yyyy hh:mm aa");
	//System.out.println(format.format(ti));
	System.out.println(formatter.format(ti));
}
	
	
	public static String
    convertDateToString(String date)
    {
		
		
		
        // Converts the string
        // format to date object
        DateFormat df = new SimpleDateFormat(date);
  
        // Get the date using calendar object
        Date today = Calendar.getInstance()
                         .getTime();
  
        // Convert the date into a
        // string using format() method
        String dateToString = df.format(today);
  
        // Return the result
        return dateToString;
        
    }
	
	
	public static void
     convertingDateandTimetoString()
    {
		System.out.println("");
		System.out.println("");
		System.out.println("");
		System.out.println("");
	      System.out.println("---------------converting Local date and time to string--------------");
	      

	      
		// Get current date time
		LocalDateTime currentDateTime = LocalDateTime.of(2022, 11, 27,03,00,00);

		// Inbuilt format
		//DateTimeFormatter formatter = DateTimeFormatter.ISO_DATE_TIME;

		// Custom format if needed
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");

		// Format LocalDateTime
		String formattedDateTime = currentDateTime.format(formatter);

		// Verify
		System.out.println("Formatted LocalDateTime : " + formattedDateTime);
		
	
    }
	
	
	public static void addingHoursTocurrentdateandtime() {
		
		System.out.println("");
		System.out.println("");
		System.out.println("");
		System.out.println("");
		
		System.out.println("---------------this is the method to add HOURS to current Date and Time---------------");
		SimpleDateFormat format=new SimpleDateFormat("dd/MM/yyyy hh:mm:ss aa");
		Date d1 = new Date();
	      Calendar cl = Calendar.getInstance();
	      cl.setTime(d1);
	      System.out.println("today is " + format.format(d1) );

	      
	      
//	      System.out.println("please enter the required HOURS to be added");
	    cl.add(Calendar.HOUR,12);
	   Date d2=cl.getTime();
	      System.out.println("date after 12 hrs will be " + format.format(d2) );
	     
	      System.out.println("");
	      System.out.println("");
		}
		
	
	
	
	
	
	
	public static void addingDaysTocurrentday() {
		
		System.out.println("");
		System.out.println("");
		System.out.println("");
		System.out.println("");
System.out.println("---------------this is the method to add DAYS to current Date and Time---------------");
SimpleDateFormat format=new SimpleDateFormat("dd/MM/yyyy hh:mm:ss aa");

		Date d1 = new Date();
	      Calendar cl = Calendar.getInstance();
	      cl.setTime(d1);
	      System.out.println("today is " + d1.toString());
	      
		
	      cl.add(Calendar.DAY_OF_MONTH,5);
	      System.out.println("date after 5 Days will be " + format.format(cl.getTime())  );
	      
	}
		
	public static void LocaldatetoinstantdateaddingHours() {
		
		System.out.println("");
		System.out.println("");
		System.out.println("");
		System.out.println("");
		
		System.out.println("-------------adding HOURS to given date------------------------");
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:MM:SS a");
        SimpleDateFormat format=new SimpleDateFormat("dd/MM/yyyy hh:mm:ss a");

		
		// Get current date time
				LocalDateTime loti=LocalDateTime.of(2022, 05, 25, 20, 56, 56);

						ZoneId zoneid=ZoneId.systemDefault();
				// Inbuilt format
//				DateTimeFormatter formatter = DateTimeFormatter.ISO_DATE_TIME;

				//casting localdate to Date
					Date d=Date.from(loti.toLocalDate().atStartOfDay(zoneid).toInstant());
					
					System.out.println("Formatted LocalDateTime : "+format.format(d));
				
				// Custom format if needed
					Calendar cal=Calendar.getInstance();
					cal.setTime(d);
				// Format LocalDateTime
				
				cal.add(Calendar.HOUR, 55);

				// Verify
				
				
				//Instant instant = currentDateTime.toInstant(ZoneOffset.UTC);
				//Date currentDate = Date.from(instant);
				//currentDateTime.plusDays(12);
			
				
				
			    System.out.println(format.format(cal.getTime()));
		
		
	}
	
	
	public static void LocaldatetoinstantdateaddDays(String date1,int day) {
		System.out.println("");
		System.out.println("");
		System.out.println("");
		System.out.println("");
		System.out.println("adding days to object string");
		
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");

        SimpleDateFormat format=new SimpleDateFormat("dd/MM/yyyy hh:mm:ss a");

		// casting string to localDate
        LocalDate localDate = LocalDate.of(2022, 12, 25);
    
        ZoneId zoneId = ZoneId.systemDefault();
        
        // casting localDate to Date
        Date date = Date.from(localDate.atStartOfDay(zoneId).toInstant());
//        Date date = new Date();
        
        // getting an instance of calendar
        Calendar cal = Calendar.getInstance();
        
        
        // casting date to calendar
        cal.setTime(date);
        
        // adding days to date
        cal.add(Calendar.DAY_OF_MONTH, day);
        
        System.out.println(format.format(cal.getTime()));
        //return cal.getTime().toString();
        
        
        
        
	}
	
	
	
	
	public static void plusdays() {
		System.out.println("");
		System.out.println("");
		System.out.println("");
		System.out.println("");
		
		System.out.println("---------adding required Days to given date----------------\\r\\n");
		
		
		 // 2. DateTimeFormatter
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        
        
		// create a LocalDate object
        LocalDate date
            = LocalDate.of(2022, 12, 25);
        
        
  
        // print instance
        System.out.println("LocalDate before"
                           + " adding days: " +dateTimeFormatter.format(date));
        
        
        //adding dynamic values
        Scanner sc=new Scanner(System.in);
		System.out.println("Add  HOURS you want for  given date");
		int days=sc.nextInt();
        
		
		// add 5 days
        LocalDate returnvalue
            = date.plusDays(days);
  
        
        // print result
        System.out.println("LocalDate after 5 days"
                           + " adding days: " + dateTimeFormatter.format(returnvalue));
	}
	
	
	public static void plushours() {
		System.out.println("");
		System.out.println("");
		System.out.println("");
		System.out.println("");
		
		
		System.out.println("---------adding required hours to given date----------------");
		
		
//		formatting date
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:MM:SS");
		
//		creating local date object
		LocalDateTime currentDateTime = LocalDateTime.of(2022, 12, 25,5,00,00);
		System.out.println("LocalDate before"
                + " adding hours: " +formatter.format(currentDateTime));
		
		
//		taking dynamic value to add number of days
		Scanner sc=new Scanner(System.in);
		System.out.println("Add  HOURS you want for  given date");
		int hours=sc.nextInt();
		
		
//		adding number of hours to local object
		LocalDateTime returnvalue
        = currentDateTime.plusHours(hours);
		
		
		System.out.println("LocalDate after 5 days"
                + " adding days: " + formatter.format(returnvalue));
		
	}
	public static void main(String[] args) {
		convertingtimetoAMPM();
		datetimeformatteram();
		convertDateToString("2022-11-27");
		convertingDateandTimetoString();
		addingHoursTocurrentdateandtime();
		addingDaysTocurrentday();
		LocaldatetoinstantdateaddDays("2022-11-27",5);
		LocaldatetoinstantdateaddingHours();
		plushours();
		plusdays();
		
		
		
		
		
	}
	
}
