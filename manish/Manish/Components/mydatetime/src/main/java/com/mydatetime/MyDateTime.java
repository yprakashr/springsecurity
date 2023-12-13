package com.mydatetime;

/* Package name: com.mydatetime
This is a class which are used to do date and time operations to convert, compare and calculate the desired time, period and date by adding and subtracting time with date.
All the methods in this class are well handled in terms of Exceptions.

This class is totally dependant and uses the following packages for smooth execution;
java.util;
java.text.ParseException;
java.text.SimpleDateFormat;
java.time;
java.time.format.DateTimeFormatter;
java.time.temporal.ChronoUnit;

All the methods inside this class are public and static and does casting internally between Date, LocalDate, String, Calendar objects.
It consists of followig methods:

----------------------------------------------------------------------------------------

1. LocalDateToDate(): This method is used to convert the LocalDate object to Date to the instance of system's default time zone. It returns an object of type Date.
input format: LocalDate object
signature: 
public static Date LocalDateToDate()

----------------------------------------------------------------------------------------

2. dateToString():  This method takes 3 parameters and is used to convert the passed date to String type and returns a string in (dd/mm/yyyy) format. 
It uses SimpleDateFormat to format the date.
input format: dd/mm/yyyy
signature: 
public static String dateToString(int year, int month, int day)

----------------------------------------------------------------------------------------

3. timeToString(): This method takes 3 parameters and is used to convert the passed time to String type and returns a string in (hh:mm:ss) format. 
It uses SimpleDateFormat to format the time.
input format: hh:mm:ss
signature: 
public static String timeToString(int hour, int minute, int second)

----------------------------------------------------------------------------------------

4. dateAndTimeToString(): This method takes 6 parameters and is used to convert the passed date&time to String type and returns a string in (dd/MM/yyyy; hh:mm:ss) format. 
It uses SimpleDateFormat to format the time.
date input format: dd/mm/yyyy
time input format: hh:mm:ss
signature:
public static String dateAndTimeToString(int year, int month, int day, int hour, int minute, int second)

----------------------------------------------------------------------------------------

5. daysGap(): This method takes 2 parameters and is used to find the no of days between the period of 2 dates passed. It converts the passed date to LocalDate and returns the period in String format.
It uses DateTimeFormatter to validate the input date passed.
date input format: dd/mm/yyyy
signature:
public static String daysGap(String date1, String date2)

----------------------------------------------------------------------------------------

6. daysAndTimeGap(): This method takes 2 parameters and is used to find the no of days between the period of 2 dates passed. It converts the passed dates to LocalDate and returns the time period between them in String format.
It uses DateTimeFormatter to validate the input date passed.
date input format: dd/mm/yyyy
time input format: (number of time-unit)
signature:
public static String daysAndTimeGap(String date1, String date2)

----------------------------------------------------------------------------------------

7. addtime(): This method takes 5 parameters and is used to calculate the resultant date and time after adding specific time to a given date. It returns a String object after calculating the final date after the given time.
It uses DateTimeFormatter to validate the input date passed.
signature:
public static String addTime(String date1, int hours, int days, int months, int years)
 */

import java.util.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.*;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;

public final class MyDateTime {

    static DateTimeFormatter DTformatter = DateTimeFormatter.ofPattern(("dd/MM/yyyy; HH:mm:ss"));
    static DateTimeFormatter Tformatter = DateTimeFormatter.ofPattern(("HH:mm:ss"));
    static SimpleDateFormat SDFormatter = new SimpleDateFormat("dd/MM/yyyy");
    static ZoneId zoneId = ZoneId.systemDefault();

    // -----------------------------------------------------------------------
    // method to convert LocalDate to Date.
    public static Date LocalDateToDate(LocalDate lDate) {
        return Date.from(lDate.atStartOfDay(zoneId).toInstant());
    }

    // -----------------------------------------------------------------------
    // method to convert passed date to string.
    public static String dateToString(int year, int month, int day) {

        try {
            // casting string to localDate
            LocalDate myDate = LocalDate.of(year, month, day);
            // formatting casted LocalDate to return a string
            String dateStr = SDFormatter.format(LocalDateToDate(myDate));
            return dateStr;
        } catch (Exception e) {
            e.printStackTrace();
            return e.toString();
        }
    }

    // -----------------------------------------------------------------------
    // method to convert passed time to string.
    public static String timeToString(int hour, int minute, int second) {

        try {
            // casting string to localTime
            LocalTime myTime = LocalTime.of(hour, minute, second);
            // formatting casted LocalTime to return a string
            String timeStr = myTime.format(Tformatter);
            return timeStr;
        } catch (Exception e) {
            e.printStackTrace();
            return e.toString();
        }
    }

    // -----------------------------------------------------------------------
    // method to convert passed date-time to string
    public static String dateAndTimeToString(int year, int month, int day, int hour, int minute, int second) {
        try {
            // casting string to localDateTime
            LocalDateTime myDateTime = LocalDateTime.of(year, month, day, hour, minute, second);
            // formatting casted Localdate-time to return a string
            String dateTimeStr = myDateTime.format(DTformatter);
            return dateTimeStr;
        } catch (Exception e) {
            e.printStackTrace();
            return e.toString();
        }
    }

    // -----------------------------------------------------------------------
    // method to calculate days between 2 dates
    public static String daysGap(String date1, String date2) {
        try {
            // casting string to localDate
            LocalDate d1 = LocalDate.parse(date1);
            LocalDate d2 = LocalDate.parse(date2);

            // calculating days difference
            String daysGap = String.valueOf((int) ChronoUnit.DAYS.between(d1, d2));
            return daysGap + " days";
        } catch (Exception e) {
            e.printStackTrace();
            return e.toString();
        }
    }

    // -----------------------------------------------------------------------
    // method to calculate days and time between 2 dates
    public static String daysAndTimeGap(String date1, String date2) {
        try {
            // casting string to localDateTime
            LocalDateTime d1 = LocalDateTime.parse(date1);
            LocalDateTime d2 = LocalDateTime.parse(date2);

            int YEARS, MONTHS, DAYS, HOURS, MINUTES, SECONDS;

            // calculating duration between two dates in 6 units
            YEARS = (int) ChronoUnit.YEARS.between(d1, d2);
            MONTHS = (int) ChronoUnit.MONTHS.between(d1, d2);
            DAYS = (int) ChronoUnit.DAYS.between(d1, d2);
            HOURS = (int) ChronoUnit.HOURS.between(d1, d2);
            MINUTES = (int) ChronoUnit.MINUTES.between(d1, d2);
            SECONDS = (int) ChronoUnit.SECONDS.between(d1, d2);

            // calculating years difference
            String years = String.valueOf(YEARS) + " years";

            // calculating months difference
            String months = String.valueOf(MONTHS - (YEARS * 12)) + " months";

            // calculating days difference
            String days = String.valueOf(DAYS - (int) (MONTHS * 30.436875)) + " days";

            // calculating hour difference
            String hours = String.valueOf(HOURS - (DAYS * 24)) + " hrs";

            // calculating minute difference
            String minutes = String.valueOf(MINUTES - (HOURS * 60)) + " mins";

            // calculating seconds difference
            String seconds = String.valueOf(SECONDS - (MINUTES * 60)) + " secs";

            return years + "; " + months + "; " + days + "; " + hours + "; " + minutes + "; " + seconds;
        } catch (Exception e) {
            e.printStackTrace();
            return e.toString();
        }
    }

    // -----------------------------------------------------------------------
    // method for calculating resultant date after adding hours
    public static String addHours(String date1, int hours) {
        try {
            // casting string to localDate
            LocalDate localDate = LocalDate.parse(date1);
            // casting localDate to Date
            Date date = LocalDateToDate(localDate);
            // getting an instance of calendar
            Calendar cal = Calendar.getInstance();
            // casting date to calendar
            cal.setTime(date);
            // adding hours to date
            cal.add(Calendar.HOUR, hours);

            // casting calendar to LocalDate and returning in string format
            return LocalDateTime.ofInstant(cal.toInstant(), zoneId)
                    .format(DTformatter).toString();
        } catch (Exception e) {
            e.printStackTrace();
            return e.toString();
        }
    }

    // -----------------------------------------------------------------------
    // method for calculating resultant date after adding years
    public static String addYears(String date1, int year) {
        try {
            // casting string to localDate
            LocalDate localDate = LocalDate.parse(date1);
            // casting localDate to Date
            Date date = LocalDateToDate(localDate);
            // getting an instance of calendar
            Calendar cal = Calendar.getInstance();
            // casting date to calendar
            cal.setTime(date);
            // adding years to date
            cal.add(Calendar.YEAR, year);

            // casting calendar to LocalDate and returning in string format
            return LocalDateTime.ofInstant(cal.toInstant(), zoneId)
                    .format(DTformatter).toString();
        } catch (Exception e) {
            e.printStackTrace();
            return e.toString();
        }
    }

    // -----------------------------------------------------------------------
    // method for calculating resultant date after adding months
    public static String addMonths(String date1, int month) {
        try {
            // casting string to localDate
            LocalDate localDate = LocalDate.parse(date1);
            // casting localDate to Date
            Date date = LocalDateToDate(localDate);
            // getting an instance of calendar
            Calendar cal = Calendar.getInstance();
            // casting date to calendar
            cal.setTime(date);
            // adding months to date
            cal.add(Calendar.MONTH, month);

            // casting calendar to LocalDate and returning in string format
            return LocalDateTime.ofInstant(cal.toInstant(), zoneId)
                    .format(DTformatter).toString();
        } catch (Exception e) {
            e.printStackTrace();
            return e.toString();
        }
    }

    // -----------------------------------------------------------------------
    // method for calculating resultant date after adding days
    public static String addDays(String date1, int day) {
        try {
            // casting string to localDate
            LocalDate localDate = LocalDate.parse(date1);
            // casting localDate to Date
            Date date = LocalDateToDate(localDate);
            // getting an instance of calendar
            Calendar cal = Calendar.getInstance();
            // casting date to calendar
            cal.setTime(date);
            // adding days to date
            cal.add(Calendar.DAY_OF_MONTH, day);

            // casting calendar to LocalDate and returning in string format
            return LocalDateTime.ofInstant(cal.toInstant(), zoneId)
                    .format(DTformatter).toString();
        } catch (Exception e) {
            e.printStackTrace();
            return e.toString();
        }
    }

    // -----------------------------------------------------------------------
    // method for calculating resultant date after adding time
    public static String addTime(String date1, int hours, int days, int months, int years) {
        try {
            // casting string to localDate
            LocalDate localDate = LocalDate.parse(date1);
            // casting localDate to Date
            Date date = LocalDateToDate(localDate);
            // getting an instance of calendar
            Calendar cal = Calendar.getInstance();
            // casting date to calendar
            cal.setTime(date);
            // adding hours to date
            cal.add(Calendar.HOUR, hours);
            cal.getTime();
            // adding hourdays to date
            cal.add(Calendar.DAY_OF_MONTH, days);
            cal.getTime();
            // adding months to date
            cal.add(Calendar.MONTH, months);
            cal.getTime();
            // adding years to date
            cal.add(Calendar.YEAR, years);

            // casting calendar to LocalDate and returning in string format
            return LocalDateTime.ofInstant(cal.toInstant(), zoneId)
                    .format(DTformatter).toString();
        } catch (Exception e) {
            e.printStackTrace();
            return e.toString();
        }
    }

    public static void main(String[] args) throws ParseException {
        System.out.println("Date: " + dateToString(1974, 06, 18));

        System.out.println("Time: " + timeToString(5, 30, 25));

        System.out.println("Date-Time: " + dateAndTimeToString(2023, 8, 8, 12, 30, 45));

        System.out.println("Date and time after adding hours: " + addHours("2022-12-08", 30));

        System.out.println("Date and time after adding years: " + addYears("2022-12-08", 5));

        System.out.println("Date and time after adding months: " + addMonths("2022-12-08", 6));

        System.out.println("Date and time after adding days: " + addDays("2022-12-08", 15));

        System.out.println("Date and time after adding time: " + addTime("2022-12-08", 5, 5, 5, 5));

        System.out.println("Days-gap: " + daysGap("2023-01-08", "2562-06-05"));

        System.out.println("Days-Time-gap: " + daysAndTimeGap("2023-01-08T19:36:25", "2562-06-05T12:50:17"));

    }
}
