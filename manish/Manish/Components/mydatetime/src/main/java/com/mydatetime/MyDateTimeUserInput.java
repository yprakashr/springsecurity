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

----------------------------------------------------------------------------------------*/

import java.util.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.*;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;

public class MyDateTimeUserInput {

    static DateTimeFormatter DTformatter = DateTimeFormatter.ofPattern(("dd/MM/yyyy; HH:mm:ss"));
    static DateTimeFormatter Tformatter = DateTimeFormatter.ofPattern(("HH:mm:ss"));
    static DateTimeFormatter Dformatter = DateTimeFormatter.ofPattern(("dd/MM/yyyy"));
    static SimpleDateFormat SDFormatter = new SimpleDateFormat("dd/MMMMM/yyyy E z ");
    static ZoneId zoneId = ZoneId.systemDefault();
    static Scanner sc = new Scanner(System.in);

    // -----------------------------------------------------------------------
    // method to convert LocalDate to Date.
    public static Date LocalDateToDate(LocalDate lDate) {
        return Date.from(lDate.atStartOfDay(zoneId).toInstant());
    }

    // -----------------------------------------------------------------------
    // method to convert passed date to string.
    public static String dateToString() {
        System.out.print("Enter Date in (dd/MM/yyyy): ");
        String date = sc.next();
        try {
            // casting string to localDate
            LocalDate myDate = LocalDate.parse(date, Dformatter);
            // formatting casted LocalDate to return a string
            String dateStr = SDFormatter.format(LocalDateToDate(myDate));
            System.out.println("Entered date is: " + dateStr);
            return dateStr;
        } catch (Exception e) {
            e.printStackTrace();
            return e.toString();
        }
    }

    // -----------------------------------------------------------------------
    // method to convert passed time to string.
    public static String timeToString() {
        System.out.print("Enter Time in (hh:mm:ss): ");
        String time = sc.next();
        try {
            // casting string to localTime
            LocalTime myTime = LocalTime.parse(time, Tformatter);
            // formatting casted LocalTime to return a string
            String timeStr = myTime.format(Tformatter);
            System.out.println("Entered time is: " + timeStr);
            return timeStr;
        } catch (Exception e) {
            e.printStackTrace();
            return e.toString();
        }
    }

    // -----------------------------------------------------------------------
    // method to convert passed date-time to string
    public static String dateAndTimeToString() {
        System.out.print("Enter Date in (dd/MM/yyyy): ");
        String date = sc.next();
        System.out.print("Enter Time in (hh:mm:ss): ");
        String time = sc.next();
        String dateTime = date + "; " + time;
        try {
            // casting string to localDateTime
            LocalDateTime myDateTime = LocalDateTime.parse(dateTime, DTformatter);
            // formatting casted Localdate-time to return a string
            String dateTimeStr = myDateTime.format(DTformatter);
            System.out.println("Entered date-time is: " + dateTimeStr);
            return dateTimeStr;
        } catch (Exception e) {
            e.printStackTrace();
            return e.toString();
        }
    }

    // -----------------------------------------------------------------------
    // method to calculate days between 2 dates
    public static String daysGap() {
        System.out.print("Enter Date1 in (dd/MM/yyyy): ");
        String date1 = sc.next();
        System.out.print("Enter Date2 in (dd/MM/yyyy): ");
        String date2 = sc.next();

        try {
            // casting string to localDate
            LocalDate d1 = LocalDate.parse(date1, Dformatter);
            LocalDate d2 = LocalDate.parse(date2, Dformatter);

            // calculating days difference
            String daysGap = String.valueOf((int) ChronoUnit.DAYS.between(d1, d2));
            System.out.println("Days gap is: " + daysGap);
            return daysGap + " days";
        } catch (Exception e) {
            e.printStackTrace();
            return e.toString();
        }
    }

    // -----------------------------------------------------------------------
    // method to calculate days and time between 2 dates
    public static String daysAndTimeGap() {
        System.out.print("Enter Date-time1 in (dd/MM/yyyy; HH:mm:ss): ");
        String dt1 = sc.nextLine();
        System.out.print("Enter Date-time2 in (dd/MM/yyyy; HH:mm:ss): ");
        String dt2 = sc.nextLine();

        try {
            // casting string to localDateTime
            LocalDateTime d1 = LocalDateTime.parse(dt1, DTformatter);
            LocalDateTime d2 = LocalDateTime.parse(dt2, DTformatter);

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

            String timegap = years + "; " + months + "; " + days + "; " + hours + "; " + minutes + "; " + seconds;
            System.out.println("time gap is: " + timegap);
            return timegap;
        } catch (Exception e) {
            e.printStackTrace();
            return e.toString();
        }
    }

    // -----------------------------------------------------------------------
    // method for calculating resultant date after adding hours
    public static String addHours() {
        System.out.print("Enter Date in (dd/MM/yyyy): ");
        String date1 = sc.next();
        System.out.print("Enter hours to add: ");
        int hours = sc.nextInt();
        try {
            // casting string to localDate
            LocalDate localDate = LocalDate.parse(date1, Dformatter);
            // casting localDate to Date
            Date date = LocalDateToDate(localDate);
            // getting an instance of calendar
            Calendar cal = Calendar.getInstance();
            // casting date to calendar
            cal.setTime(date);
            // adding hours to date
            cal.add(Calendar.HOUR, hours);

            // casting calendar to LocalDate and returning in string format
            String finalDT = LocalDateTime.ofInstant(cal.toInstant(), zoneId)
                    .format(DTformatter).toString();
            System.out.println("Date and time after adding hours: " + finalDT);
            return finalDT;
        } catch (Exception e) {
            e.printStackTrace();
            return e.toString();
        }
    }

    // -----------------------------------------------------------------------
    // method for calculating resultant date after adding years
    public static String addYears() {
        System.out.print("Enter Date in (dd/MM/yyyy): ");
        String date1 = sc.next();
        System.out.print("Enter years to add: ");
        int years = sc.nextInt();
        try {
            // casting string to localDate
            LocalDate localDate = LocalDate.parse(date1, Dformatter);
            // casting localDate to Date
            Date date = LocalDateToDate(localDate);
            // getting an instance of calendar
            Calendar cal = Calendar.getInstance();
            // casting date to calendar
            cal.setTime(date);
            // adding years to date
            cal.add(Calendar.YEAR, years);

            // casting calendar to LocalDate and returning in string format
            String finalDT = LocalDateTime.ofInstant(cal.toInstant(), zoneId)
                    .format(DTformatter).toString();
            System.out.println("Date and time after adding years: " + finalDT);
            return finalDT;
        } catch (Exception e) {
            e.printStackTrace();
            return e.toString();
        }
    }

    // -----------------------------------------------------------------------
    // method for calculating resultant date after adding months
    public static String addMonths() {
        System.out.print("Enter Date in (dd/MM/yyyy): ");
        String date1 = sc.next();
        System.out.print("Enter months to add: ");
        int months = sc.nextInt();
        try {
            // casting string to localDate
            LocalDate localDate = LocalDate.parse(date1, Dformatter);
            // casting localDate to Date
            Date date = LocalDateToDate(localDate);
            // getting an instance of calendar
            Calendar cal = Calendar.getInstance();
            // casting date to calendar
            cal.setTime(date);
            // adding months to date
            cal.add(Calendar.MONTH, months);

            // casting calendar to LocalDate and returning in string format
            String finalDT = LocalDateTime.ofInstant(cal.toInstant(), zoneId)
                    .format(DTformatter).toString();
            System.out.println("Date and time after adding months: " + finalDT);
            return finalDT;
        } catch (Exception e) {
            e.printStackTrace();
            return e.toString();
        }
    }

    // -----------------------------------------------------------------------
    // method for calculating resultant date after adding days
    public static String addDays() {
        System.out.print("Enter Date in (dd/MM/yyyy): ");
        String date1 = sc.next();
        System.out.print("Enter days to add: ");
        int days = sc.nextInt();
        try {
            // casting string to localDate
            LocalDate localDate = LocalDate.parse(date1, Dformatter);
            // casting localDate to Date
            Date date = LocalDateToDate(localDate);
            // getting an instance of calendar
            Calendar cal = Calendar.getInstance();
            // casting date to calendar
            cal.setTime(date);
            // adding days to date
            cal.add(Calendar.DAY_OF_MONTH, days);

            // casting calendar to LocalDate and returning in string format
            String finalDT = LocalDateTime.ofInstant(cal.toInstant(), zoneId)
                    .format(DTformatter).toString();
            System.out.println("Date and time after adding days: " + finalDT);
            return finalDT;
        } catch (Exception e) {
            e.printStackTrace();
            return e.toString();
        }
    }

    // -----------------------------------------------------------------------
    // method for calculating resultant date after adding time
    public static String addTime() {
        System.out.print("Enter Date in (dd/MM/yyyy): ");
        String date1 = sc.next();
        System.out.print("Enter years to add: ");
        int years = sc.nextInt();
        System.out.print("Enter months to add: ");
        int months = sc.nextInt();
        System.out.print("Enter days to add: ");
        int days = sc.nextInt();
        System.out.print("Enter hours to add: ");
        int hours = sc.nextInt();
        try {
            // casting string to localDate
            LocalDate localDate = LocalDate.parse(date1, Dformatter);
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
            String finalDT = LocalDateTime.ofInstant(cal.toInstant(), zoneId)
                    .format(DTformatter).toString();
            System.out.println("Date and time after adding time: " + finalDT);
            return finalDT;
        } catch (Exception e) {
            e.printStackTrace();
            return e.toString();
        }
    }

    public static void main(String[] args) throws ParseException {
        daysAndTimeGap();
        System.out.println("------------------------------------------------------------");
        dateToString();
        System.out.println("------------------------------------------------------------");
        timeToString();
        System.out.println("------------------------------------------------------------");
        dateAndTimeToString();
        System.out.println("------------------------------------------------------------");
        daysGap();
        System.out.println("------------------------------------------------------------");
        addHours();
        System.out.println("------------------------------------------------------------");
        addYears();
        System.out.println("------------------------------------------------------------");
        addMonths();
        System.out.println("------------------------------------------------------------");
        addDays();
        System.out.println("------------------------------------------------------------");
        addTime();
    }
}
