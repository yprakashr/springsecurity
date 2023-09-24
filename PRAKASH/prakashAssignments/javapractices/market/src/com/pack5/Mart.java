package com.pack5;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.Scanner;

public class Mart {
	//Groceries
		String evrycaseerror[]=new String[] {"Error Happened Please Select Correct Option: "};
		String evrycase[]=new String[] {"\n\tPlease enter the Qyantity : \n"+"\tTo return previous menu enter 000 \t\t\t"};
		String Menu[]=new String[] {"\t\t\t***Main Menu***\n\n \t\t\t1. Groceries\n"+" \t\t\t2. Fruits & Veggies\n"+" \t\t\t3. Beverages\n"+" \t\t\t4. Chocolates\n"+" \t\t\t5. Snacks\n"+" \t\t\t0. Start Menu\n"+" \t\t\t100. To Get Bill\t\t\t\t"};
		String Bill[]=new String[] {"\t\t\t1. Main Menu\n"+"\t\t\t00. Get Bill\t\t\t"};
		String AfterPurchase[]=new String[] {"\n\tTo Shop More\n\tPlease Select your Option\n\tTo Exit Select 000"};

		String Groceries[]=new String[] {"\n\t\t\t***Groceries***\n\n\t\t\t1. Spices\n"+" \t\t\t2. Diary\n"+" \t\t\t3. Meat\n"+" \t\t\t4. Grains\n"+" \t\t\t0. Previous Menu\t\t\t\n"+ "\t\t\t100.Get Bill\t\t\t\t\t"};

		//1.1Spices Data{Prices; ItemCode, Spices Menu}
		int spicesPrices[]=new int[] {380,280,280,135,17};
		int spicesItemCode[]=new int[] {101,102,103,104,105};
		String SpicesMenu[]=new String[] {"\n\t\t\t***Spices***\n\t\t\t\n\t\t"+spicesItemCode[0]+"\tTurmeric Powder: \t₹"+spicesPrices[0]+" ~ 1 Kg \n\t\t"+spicesItemCode[1]+"\tCoriander Powder: \t₹"+spicesPrices[1]+" ~ 1 Kg \n\t\t"+spicesItemCode[2]+"\tChilli Powder: \t\t₹"+spicesPrices[2]+" ~ 1 Kg \n\t\t"+spicesItemCode[3]+"\tPepper Powder: \t\t₹"+spicesPrices[3]+" ~ 100 Gms Pack \n\t\t"+spicesItemCode[4]+"\tSalt: \t\t\t₹"+spicesPrices[4]+"  ~ 1 Kg\n\t\t000. \tPrevious Menu \t\t\t\t\n"+"\t\t100. \tGet Bill\t\t\t\t\t"};
		String spicesnames[]=new String[] {"𝐓𝐮𝐫𝐦𝐞𝐫𝐢𝐜 𝐏𝐨𝐰𝐝𝐞𝐫","𝐂𝐨𝐫𝐢𝐚𝐧𝐝𝐞𝐫 𝐏𝐨𝐰𝐝𝐞𝐫","𝐂𝐡𝐢𝐥𝐥𝐢 𝐏𝐨𝐰𝐝𝐞𝐫","𝐏𝐞𝐩𝐩𝐞𝐫 𝐏𝐨𝐰𝐝𝐞𝐫","𝐒𝐚𝐥𝐭 "};

		//Spices 1st time purchase total prices
		static int turmeric;
		static int coriander;
		static int chilli;
		static int pepper;
		static int salt;

		//Spices Quantities
		int spicesQuantity[]=new int[] {turmeric/spicesPrices[0],coriander/spicesPrices[1],chilli/spicesPrices[2],pepper/spicesPrices[3],salt/spicesPrices[4]};

		//1.2Dairy Data{Prices; ItemCode, Spices Menu}
		int dairyPrices[]=new int[] {32,70,32,50,400};
		int dairyItemCode[]=new int[] {111,112,113,114,115};
		String DairyMenu[]=new String[] {"\n\t\t\t***Dairy***\n\t\t\t\n\t\t"+dairyItemCode[0]+"\tMilk : \t\t\t₹"+dairyPrices[0]+" ~ 1/2 litre/Pack \n\t\t"+dairyItemCode[1]+"\tEggs : \t\t\t₹"+dairyPrices[1]+" ~ 1 Dozen \n\t\t"+dairyItemCode[2]+"\tYogurt : \t\t₹"+dairyPrices[2]+" ~ 1/2 Liter \n\t\t"+dairyItemCode[3]+"\tButter: \t\t₹"+dairyPrices[3]+" ~ 100 Gms Pack \n\t\t"+dairyItemCode[4]+"\tGhee: \t\t\t₹"+dairyPrices[4]+"  ~ 1/2 Liter\n\t\t000. \tPrevious Menu \t\t\t\t\n"+"\t\t100. \tGet Bill\t\t\t\t\t"};
		String dairynames[]=new String[] {"𝐌𝐢𝐥𝐤","𝐄𝐠𝐠𝐬","𝐘𝐨𝐠𝐮𝐫𝐭","𝐁𝐮𝐭𝐭𝐞𝐫","𝐆𝐡𝐞𝐞"};

		//Dairy 1st time purchase total prices
		static int milk;
		static int eggs;
		static int yogurt;
		static int butter;
		static int ghee;

		//Dairy Quantities
		int dairyQuantity[]=new int[] {milk/dairyPrices[0],eggs/dairyPrices[1],yogurt/dairyPrices[2],butter/dairyPrices[3],ghee/dairyPrices[4]};

		//1.3Meat Data{Prices; ItemCode, Spices Menu}
		int meatPrices[]=new int[] {180,400,1050,150,400,300};
		int meatItemCode[]=new int[] {121,122,123,124,125,126};
		String MeatMenu[]=new String[] {"\n\t\t\t***Meat***\n\t\t\t\n\t\t"+meatItemCode[0]+"\tChicken : \t\t\t₹"+meatPrices[0]+" ~ 1 Kg \n\t\t"+meatItemCode[1]+"\tMutton : \t\t\t₹"+meatPrices[1]+" ~ 1 Kg \n\t\t"+meatItemCode[2]+"\tSalmon Fish : \t\t\t₹"+meatPrices[2]+" ~ 1 Kg \n\t\t"+meatItemCode[3]+"\tCrabs: \t\t\t\t₹"+meatPrices[3]+" ~ 1 Kg \n\t\t"+meatItemCode[4]+"\tJilebi: \t\t\t₹"+meatPrices[4]+"  ~ 1 Kg \n\t\t"+meatItemCode[5]+"\tPrawns: \t\t\t₹"+meatPrices[5]+"  ~ 1 Kg\n\t\t000. \tPrevious Menu \t\t\t\t\n"+" \t\t100. \tTo Get Bill\t\t\t\t\t"};
		String meatNames[]=new String[] {"𝐂𝐡𝐢𝐜𝐤𝐞𝐧","𝐌𝐮𝐭𝐭𝐨𝐧","𝐒𝐚𝐥𝐦𝐨𝐧\t","𝐂𝐫𝐚𝐛\t\t","𝐓𝐢𝐥𝐚𝐩𝐢𝐚","𝐏𝐫𝐚𝐰𝐧𝐬"};


		//Meat 1st time purchase total prices
		static int chicken;
		static int mutton;
		static int salmon;
		static int crab;
		static int jilebi;
		static int prawns;

		//Meat Quantities
		int meatQuantity[]=new int[] {chicken/meatPrices[0],mutton/meatPrices[1],salmon/meatPrices[2],crab/meatPrices[3],jilebi/meatPrices[4],prawns/meatPrices[5]};

		//1.4Grains Data{Prices; ItemCode, Spices Menu}
		int grainsPrices[]=new int[] {58,30,58,400};
		int grainsItemCode[]=new int[] {131,132,133,134};
		String grainsMenu[]=new String[] {"\n\t\t\t***Grains***\n\t\t\t\n\t\t"+grainsItemCode[0]+"\tRice : \t\t\t₹"+grainsPrices[0]+" ~ 1 Kg \n\t\t"+grainsItemCode[1]+"\tBread : \t\t₹"+grainsPrices[1]+" ~ 1 Kg \n\t\t"+grainsItemCode[2]+"\tFlour Fish : \t\t₹"+grainsPrices[2]+" ~ 1 Kg \n\t\t"+grainsItemCode[3]+"\tCereal: \t\t₹"+grainsPrices[3]+" ~ 1 Kg \n\t\t000. \tPrevious Menu \t\t\t\t\n"+" \t\t100. \tTo Get Bill\t\t\t\t\t"};
		String grainsnames[]=new String[] {"𝐑𝐢𝐜𝐞","𝐁𝐫𝐞𝐚𝐝","𝐅𝐥𝐨𝐮𝐫","𝐂𝐞𝐫𝐞𝐚𝐥"};

		//Grains 1st time purchase total prices
		static int Rice;
		static int Bread;
		static int Flour;
		static int Cereal;

		//Grains Quantities
		int grainsQuantity[]=new int[] {Rice/grainsPrices[0],Bread/grainsPrices[1],Flour/grainsPrices[2],Cereal/grainsPrices[3]};


		//Fruits & Vegetables
		String FruitsVeggies[]=new String[] {"\n\t\t\t***Fruits & Veggies***\n\n\t\t\t1. Fruits\n"+" \t\t\t2. Veggies\n"+" \t\t\t3. Herbs\n"+" \t\t\t0. Previous Menu\t\t\t\n"+" \t\t\t100. To Get Bill\t\t\t\t"};

		//2.1fruits Data{Prices; ItemCode, Spices Menu}
		int fruitsPrices[]=new int[] {100,30,80,80,200};
		int fruitsItemCode[]=new int[] {201,202,203,204,205};
		String fruitsMenu[]=new String[] {"\n\t\t\t***Fruits***\n\t\t\t\n\t\t"+fruitsItemCode[0]+"\tMangoes : \t\t₹"+fruitsPrices[0]+" ~ 1 Kg \n\t\t"+fruitsItemCode[1]+"\tBanana : \t\t₹"+fruitsPrices[1]+" ~ 1 Dozen \n\t\t"+fruitsItemCode[2]+"\tWatermelon : \t\t₹"+fruitsPrices[2]+" ~ 1 Kg \n\t\t"+fruitsItemCode[3]+"\tOranges: \t\t₹"+fruitsPrices[3]+" ~ 1 Kg \n\t\t"+fruitsItemCode[4]+"\tApples: \t\t₹"+fruitsPrices[4]+"  ~ 1 Kg\n\t\t000. \tPrevious Menu \t\t\t\t\n"+" \t\t100. \tTo Get Bill\t\t\t\t\t"};
		String fruitsnames[]=new String[] {"𝐌𝐚𝐧𝐠𝐨","𝐁𝐚𝐧𝐚𝐧𝐚","𝐖𝐚𝐭𝐞𝐫𝐦𝐞𝐥𝐨𝐧","𝐎𝐫𝐚𝐧𝐠𝐞𝐬","𝐀𝐩𝐩𝐥𝐞𝐬"};

		//Fruits 1st time purchase total prices
		static int mango;
		static int banana;
		static int watermelon;
		static int oranges;
		static int apples;

		//fruits Quantities
		int fruitsQuantity[]=new int[] {mango/fruitsPrices[0],banana/fruitsPrices[1],watermelon/fruitsPrices[2],oranges/fruitsPrices[3],apples/fruitsPrices[4]};

		//2.2Vegetables Data{Prices; ItemCode, Spices Menu}
		int veggiesPrices[]=new int[] {50,30,120,80,150};
		int veggiesItemCode[]=new int[] {211,212,213,214,215};
		String veggiesMenu[]=new String[] {"\n\t\t\t***Veggies***\n\t\t\t\n\t\t"+veggiesItemCode[0]+"\tOnions: \t\t₹"+veggiesPrices[0]+" ~ 1 Kg \n\t\t"+veggiesItemCode[1]+"\tTomatoes: \t\t₹"+veggiesPrices[1]+" ~ 1 Kg \n\t\t"+veggiesItemCode[2]+"\tGinger: \t\t₹"+veggiesPrices[2]+" ~ 1 Kg \n\t\t"+veggiesItemCode[3]+"\tGarlic: \t\t₹"+veggiesPrices[3]+" ~ 1 Kg \n\t\t"+veggiesItemCode[4]+"\tGreenChilli: \t\t₹"+veggiesPrices[4]+"  ~ 1 Kg\n\t\t000. \tPrevious Menu \t\t\t\t\n"+" \t\t100. \tTo Get Bill\t\t\t\t"};
		String veggiesnames[]=new String[] {"𝐎𝐧𝐢𝐨𝐧𝐬","𝐓𝐨𝐦𝐚𝐭𝐨𝐞𝐬","𝐆𝐢𝐧𝐠𝐞𝐫","𝐆𝐚𝐫𝐥𝐢𝐜","𝐆𝐫𝐞𝐞𝐧𝐂𝐡𝐢𝐥𝐥𝐢"};

		//Vegetable 1st time purchase total prices
		static int Onions;
		static int Tomatoes;
		static int Ginger;
		static int Garlic;
		static int GreenChilli;

		//Vegetables Quantities
		int veggiesQuantity[]=new int[] {Onions/veggiesPrices[0],Tomatoes/veggiesPrices[1],Ginger/veggiesPrices[2],Garlic/veggiesPrices[3],GreenChilli/veggiesPrices[4]};

		//2.3Herbs Data{Prices; ItemCode, Menu}
		int herbsPrices[]=new int[] {25,15,10};
		int herbsItemCode[]=new int[] {221,222,223};
		String herbsMenu[]=new String[] {"\n\t\t\t***Herbs***\n\t\t\t\n\t\t"+herbsItemCode[0]+"\tCoriander Leaves: \t₹"+herbsPrices[0]+" ~ 1 Kg \n\t\t"+herbsItemCode[1]+"\tMint Leaves: \t\t₹"+herbsPrices[1]+" ~ 1 Kg \n\t\t"+herbsItemCode[2]+"\tCurry Leaves: \t\t₹"+herbsPrices[2]+" ~ 1 Kg \n\t\t000. \tPrevious Menu \t\t\t\t\n"+" \t\t100. \tTo Get Bill\t\t\t\t\t"};
		String herbsnames[]=new String[] {"𝐂𝐨𝐫𝐢𝐚𝐧𝐝𝐞𝐫 𝐥𝐞𝐚𝐯𝐞𝐬","𝐌𝐢𝐧𝐭 𝐥𝐞𝐚𝐯𝐞𝐬","𝐂𝐮𝐫𝐫𝐲 𝐥𝐞𝐚𝐯𝐞𝐬"};

		//herbs 1st time purchase total prices
		static int Corianderleaves;
		static int mintleaves;
		static int curryleaves;

		//herbs Quantities
		int herbsQuantity[]=new int[] {Corianderleaves/herbsPrices[0],mintleaves/herbsPrices[1],curryleaves/herbsPrices[2]};

		//Beverages Menu
		String BeveragesMenu[]=new String[] {"\n\t\t\t***Beverages***\n\n\t\t\t1. Juices\n"+" \t\t\t2. Soft Drinks\n"+" \t\t\t0. Previous Menu\t\t\t\n"+" \t\t\t100. To Get Bill\t\t\t\t"};

		//3.0Juices Data{Prices; ItemCode, Menu}
		int JuicesPrices[]=new int[] {40,70,45,40,50,40};
		int JuicesItemCode[]=new int[] {341,342,343,344,345,346};
		String JuicesMenu[]=new String[] {"\n\t\t\t***Juices***\n\t\t\t\n\t\t"+JuicesItemCode[0]+"\tMango: \t\t\t₹"+JuicesPrices[0]+" ~ 1 Glass \n\t\t"+JuicesItemCode[1]+"\tAvacadoo: \t\t₹"+JuicesPrices[1]+" ~ 1 Glass \n\t\t"+JuicesItemCode[2]+"\tGrape: \t\t\t₹"+JuicesPrices[2]+" ~ 1 Glass \n\t\t"+JuicesItemCode[3]+"\tOrange: \t\t₹"+JuicesPrices[3]+" ~ 1 Glass \n\t\t"+JuicesItemCode[4]+"\tApple: \t\t\t₹"+JuicesPrices[4]+" ~ 1 Glass \n\t\t"+JuicesItemCode[5]+"\tPapaya: \t\t₹"+JuicesPrices[5]+" ~ 1 Glass \n\t\t000. \tPrevious Menu \t\t\t\t\n"+" \t\t100. \tTo Get Bill\t\t\t\t\t"};
		String Juicesnames[]=new String[] {"𝐌𝐚𝐧𝐠𝐨","𝐀𝐯𝐚𝐜𝐚𝐝𝐨𝐨","𝐆𝐫𝐚𝐩𝐞","𝐎𝐫𝐚𝐧𝐠𝐞","𝐀𝐩𝐩𝐥𝐞","𝐏𝐚𝐩𝐚𝐲𝐚"};

		//Juices 1st time purchase total prices
		static int Mango;
		static int Avacadoo;
		static int Grape;
		static int Orange;
		static int Apple;
		static int Papaya;

		//Juices Quantities
		int JuicesQuantity[]=new int[] {Mango/JuicesPrices[0],Avacadoo/JuicesPrices[1],Grape/JuicesPrices[2],Orange/JuicesPrices[3],Apple/JuicesPrices[4],Papaya/JuicesPrices[5]};

		//3.1SoftDrinks Data{Prices; ItemCode, Menu}
		int SoftDrinksPrices[]=new int[] {50,55,45,55,55};
		int SoftDrinksItemCode[]=new int[] {351,352,353,354,355};
		String SoftDrinksMenu[]=new String[] {"\n\t\t\t***Soft Drinks***\n\t\t\t\n\t\t"+SoftDrinksItemCode[0]+"\tPepsi: \t\t\t₹"+SoftDrinksPrices[0]+" ~ 1 Litre \n\t\t"+SoftDrinksItemCode[1]+"\tCoCo-Cola: \t\t₹"+SoftDrinksPrices[1]+" ~ 1 Litre \n\t\t"+SoftDrinksItemCode[2]+"\tMazza: \t\t\t₹"+SoftDrinksPrices[2]+" ~ 1 Litre \n\t\t"+SoftDrinksItemCode[3]+"\tSprite: \t\t₹"+SoftDrinksPrices[3]+" ~ 1 Litre \n\t\t"+SoftDrinksItemCode[4]+"\tThumpsUp: \t\t₹"+SoftDrinksPrices[4]+" ~ 1 Litre \n\t\t000. \tPrevious Menu \t\t\t\t\n"+" \t\t100. \tTo Get Bill\t\t\t\t\t"};
		String SoftDrinksnames[]=new String[] {"𝐏𝐞𝐩𝐬𝐢","𝐂𝐨𝐂𝐨𝐂𝐨𝐥𝐚","𝐌𝐚𝐳𝐳𝐚","𝐒𝐩𝐫𝐢𝐭𝐞","𝐓𝐡𝐮𝐦𝐩𝐬𝐔𝐩"};

		//Juices 1st time purchase total prices
		static int Pepsi;
		static int CoCoCola;
		static int Mazza;
		static int Sprite;
		static int ThumpsUp;

		//Juices Quantities
		int SoftDrinksQuantity[]=new int[] {Pepsi/SoftDrinksPrices[0],CoCoCola/SoftDrinksPrices[1],Mazza/SoftDrinksPrices[2],Sprite/SoftDrinksPrices[3],ThumpsUp/SoftDrinksPrices[4]};

		//4.0Chocolates Data{Prices; ItemCode, Menu}
		int ChocolatesPrices[]=new int[] {40,20,20,140,35,140};
		int ChocolatesItemCode[]=new int[] {401,402,403,404,405,406};
		String ChocolatesMenu[]=new String[] {"\n\t\t\t***Chocolates***\n\t\t\t\n\t\t"+ChocolatesItemCode[0]+"\tDiaryMilk: \t\t₹"+ChocolatesPrices[0]+" ~ Each \n\t\t"+ChocolatesItemCode[1]+"\tKitkat: \t\t₹"+ChocolatesPrices[1]+" ~ Each \n\t\t"+ChocolatesItemCode[2]+"\tCadbury 5 Star: \t₹"+ChocolatesPrices[2]+" ~ Each \n\t\t"+ChocolatesItemCode[3]+"\tKisses: \t\t₹"+ChocolatesPrices[3]+" ~ Each \n\t\t"+ChocolatesItemCode[4]+"\tSnickers: \t\t₹"+ChocolatesPrices[4]+" ~ Each \n\t\t"+ChocolatesItemCode[5]+"\tFlakes: \t\t₹"+ChocolatesPrices[5]+" ~ Each \n\t\t000. \tPrevious Menu \t\t\t\t\n"+" \t\t100. \tTo Get Bill\t\t\t\t\t"};
		String Chocolatesnames[]=new String[] {"𝐃𝐢𝐚𝐫𝐲 𝐌𝐢𝐥𝐤","𝐊𝐢𝐭𝐤𝐚𝐭","𝐂𝐚𝐝𝐛𝐮𝐫𝐲 𝟓 𝐒𝐭𝐚𝐫","𝐊𝐢𝐬𝐬𝐞𝐬","𝐒𝐧𝐢𝐜𝐤𝐞𝐫𝐬","𝐅𝐥𝐚𝐤𝐞𝐬"};

		//Chocolates 1st time purchase total prices
		static int DiaryMilk;
		static int Kitkat;
		static int Cadbury5Star;
		static int Kisses;
		static int Snickers;
		static int Flakes;

		//Chocolates Quantities
		int ChocolatesQuantity[]=new int[] {DiaryMilk/ChocolatesPrices[0],Kitkat/ChocolatesPrices[1],Cadbury5Star/ChocolatesPrices[2],Kisses/ChocolatesPrices[3],Snickers/ChocolatesPrices[4],Flakes/ChocolatesPrices[5]};

		//5.0Snacks Data{Prices; ItemCode, Menu}
		int SnacksPrices[]=new int[] {140,20,20,40,35,10,20};
		int SnacksItemCode[]=new int[] {501,502,503,504,505,506,507};
		String SnacksMenu[]=new String[] {"\n\t\t\t***Snacks***\n\t\t\t\n\t\t"+SnacksItemCode[0]+"\tMaggie: \t\t₹"+SnacksPrices[0]+" ~ Each \n\t\t"+SnacksItemCode[1]+"\tLays: \t\t\t₹"+SnacksPrices[1]+" ~ Each \n\t\t"+SnacksItemCode[2]+"\tKurkure: \t\t₹"+SnacksPrices[2]+" ~ Each \n\t\t"+SnacksItemCode[3]+"\tHide N Seek: \t\t₹"+SnacksPrices[3]+" ~ Each \n\t\t"+SnacksItemCode[4]+"\tDark Fantacy: \t\t₹"+SnacksPrices[4]+" ~ Each \n\t\t"+SnacksItemCode[5]+"\tLittle Hearts: \t\t₹"+SnacksPrices[5]+" ~ Each \n\t\t"+SnacksItemCode[6]+"\tAct 2 Popcorn: \t\t₹"+SnacksPrices[6]+" ~ Each \n\t\t000. \tPrevious Menu \t\t\t\t\n"+" \t\t100. \tTo Get Bill\t\t\t\t\t"};
		String Snacksnames[]=new String[] {"𝐌𝐚𝐠𝐠𝐢𝐞","𝐋𝐚𝐲𝐬","𝐊𝐮𝐫𝐤𝐮𝐫𝐞","𝐇𝐢𝐝𝐞 𝐍 𝐒𝐞𝐞𝐤","𝐃𝐚𝐫𝐤 𝐅𝐚𝐧𝐭𝐚𝐜𝐲","𝐋𝐢𝐭𝐭𝐥𝐞 𝐇𝐞𝐚𝐫𝐭𝐬","𝐀𝐜𝐭 𝟐 𝐏𝐨𝐩𝐜𝐨𝐫𝐧"};

		//Snacks 1st time purchase total prices
		static int Maggie;
		static int Lays;
		static int Kurkure;
		static int HideNSeek;
		static int DarkFantacy;
		static int LittleHearts;
		static int Act2Popcorn;


		//Snacks Quantities
		int SnacksQuantity[]=new int[] {Maggie/SnacksPrices[0],Lays/SnacksPrices[1],Kurkure/SnacksPrices[2],HideNSeek/SnacksPrices[3],DarkFantacy/SnacksPrices[4],LittleHearts/SnacksPrices[5],Act2Popcorn/SnacksPrices[6]};

		//-------------------------------------------------------------------------------------------------------------------------------------------

		//AllItemCode----Always Last
		int AllItemCode[]=new int[] {101,102,103,104,105,111,112,113,114,115,121,122,123,124,125,126,131,132,133,134,201,202,203,204,205,211,212,213,214,215,221,222,223,341,342,343,344,345,346,351,352,353,354,355,401,402,403,404,405,406,501,502,503,504,505,506,507};
		//AllItemNames
		String AllItemNames[]=new String[] {"𝐓𝐮𝐫𝐦𝐞𝐫𝐢𝐜 𝐏𝐨𝐰𝐝𝐞𝐫","𝐂𝐨𝐫𝐢𝐚𝐧𝐝𝐞𝐫 𝐏𝐨𝐰𝐝𝐞𝐫","𝐂𝐡𝐢𝐥𝐥𝐢 𝐏𝐨𝐰𝐝𝐞𝐫","𝐏𝐞𝐩𝐩𝐞𝐫 𝐏𝐨𝐰𝐝𝐞𝐫","𝐒𝐚𝐥𝐭\t","𝐌𝐢𝐥𝐤\t","𝐄𝐠𝐠𝐬\t","𝐘𝐨𝐠𝐮𝐫𝐭\t","𝐁𝐮𝐭𝐭𝐞𝐫\t","𝐆𝐡𝐞𝐞\t","𝐂𝐡𝐢𝐜𝐤𝐞𝐧\t","𝐌𝐮𝐭𝐭𝐨𝐧\t","𝐒𝐚𝐥𝐦𝐨𝐧\t","𝐂𝐫𝐚𝐛\t","𝐓𝐢𝐥𝐚𝐩𝐢𝐚\t","𝐏𝐫𝐚𝐰𝐧𝐬\t","𝐑𝐢𝐜𝐞\t","𝐁𝐫𝐞𝐚𝐝\t","𝐅𝐥𝐨𝐮𝐫\t","𝐂𝐞𝐫𝐞𝐚𝐥\t","𝐌𝐚𝐧𝐠𝐨\t","𝐁𝐚𝐧𝐚𝐧𝐚\t","𝐖𝐚𝐭𝐞𝐫𝐦𝐞𝐥𝐨𝐧\t","𝐎𝐫𝐚𝐧𝐠𝐞𝐬\t","𝐀𝐩𝐩𝐥𝐞𝐬\t","𝐎𝐧𝐢𝐨𝐧𝐬\t","𝐓𝐨𝐦𝐚𝐭𝐨𝐞𝐬\t","𝐆𝐢𝐧𝐠𝐞𝐫\t","𝐆𝐚𝐫𝐥𝐢𝐜\t","𝐆𝐫𝐞𝐞𝐧 𝐂𝐡𝐢𝐥𝐥𝐢","𝐂𝐨𝐫𝐢𝐚𝐧𝐝𝐞𝐫 𝐥𝐞𝐚𝐯𝐞𝐬","𝐌𝐢𝐧𝐭 𝐥𝐞𝐚𝐯𝐞𝐬\t","𝐂𝐮𝐫𝐫𝐲 𝐥𝐞𝐚𝐯𝐞𝐬","𝐌𝐚𝐧𝐠𝐨 𝐉𝐮𝐢𝐜𝐞","𝐀𝐯𝐚𝐜𝐚𝐝𝐨𝐨 𝐉𝐮𝐢𝐜𝐞","𝐆𝐫𝐚𝐩𝐞 𝐉𝐮𝐢𝐜𝐞\t","𝐎𝐫𝐚𝐧𝐠𝐞 𝐉𝐮𝐢𝐜𝐞","𝐀𝐩𝐩𝐥𝐞 𝐉𝐮𝐢𝐜𝐞\t","𝐏𝐚𝐩𝐚𝐲𝐚 𝐉𝐮𝐢𝐜𝐞","𝐏𝐞𝐩𝐬𝐢\t","𝐂𝐨𝐂𝐨𝐂𝐨𝐥𝐚\t","𝐌𝐚𝐳𝐳𝐚\t","𝐒𝐩𝐫𝐢𝐭𝐞\t","𝐓𝐡𝐮𝐦𝐩𝐬𝐔𝐩\t","𝐃𝐢𝐚𝐫𝐲 𝐌𝐢𝐥𝐤\t","𝐊𝐢𝐭𝐤𝐚𝐭\t","𝐂𝐚𝐝𝐛𝐮𝐫𝐲 𝟓 𝐒𝐭𝐚𝐫","𝐊𝐢𝐬𝐬𝐞𝐬\t","𝐒𝐧𝐢𝐜𝐤𝐞𝐫𝐬\t","𝐅𝐥𝐚𝐤𝐞𝐬\t","𝐌𝐚𝐠𝐠𝐢𝐞\t","𝐋𝐚𝐲𝐬\t","𝐊𝐮𝐫𝐤𝐮𝐫𝐞\t","𝐇𝐢𝐝𝐞 𝐍 𝐒𝐞𝐞𝐤","𝐃𝐚𝐫𝐤 𝐅𝐚𝐧𝐭𝐚𝐜𝐲","𝐋𝐢𝐭𝐭𝐥𝐞 𝐇𝐞𝐚𝐫𝐭𝐬","𝐀𝐜𝐭 𝟐 𝐏𝐨𝐩𝐜𝐨𝐫𝐧"};
		//AllTotal----Always Last
		int AllPrices[]=new int[] {380,280,280,135,17,32,70,32,50,400,180,400,1050,150,400,300,58,30,58,400,100,30,80,80,200,50,30,120,80,150,25,15,10,40,70,45,40,50,40,50,55,45,55,55,40,20,20,140,35,140,140,20,20,40,35,10,20};

		public void menu()
		{
		@SuppressWarnings("resource")
		Scanner input = new Scanner(System.in);
		System.out.println(Arrays.toString(Menu)+"\n");
		System.out.print("Please Select Code for Further Details: ");
		int Categories=input.nextInt();
		switch(Categories)
		{
		case 0:
		Mart.main(null);
		break;
		case 1:
		this.Groceries();
		break;
		case 2:
		this.fruitsVeggies();
		break;
		case 3:
		this.Beverages();
		break;
		case 4:
		this.Chocolates();
		break;
		case 5:
		Snacks();
		break;
		case 100:
		this.Total();
		break;
		default:
		System.out.println("Invalid Input Please Try again");
		menu();
		}
		}
		public void Groceries()
		{
		@SuppressWarnings("resource")
		Scanner input = new Scanner(System.in);
		System.out.println(Arrays.toString(Groceries));
		System.out.println("Please Select Code for Further Details: ");
		int Categories=input.nextInt();
		switch(Categories)
		{
		case 0:
		menu();
		break;
		case 1:
		this.spices();
		break;
		case 2:
		this.dairy();
		break;
		case 3:
		this.Meat();
		break;
		case 4:
		this.Grains();
		break;
		case 100:
		this.Total();
		break;
		default:
		System.out.println("Invalid Input Please Try again");
		Groceries();
		}
		}
		public void spices()
		{
		@SuppressWarnings("resource")
		Scanner input = new Scanner(System.in);
		System.out.println(Arrays.toString(SpicesMenu));
		System.out.print("Please Select any Option for Further Details: ");
		int SpicesCategories=input.nextInt();
		switch(SpicesCategories)
		{
		case 000:
		Groceries();
		break;
		case 101:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int TQty=input.nextInt();
		if(TQty==000)
		spices();
		else
		{
		int Total=TQty*spicesPrices[0];
		System.out.println("    "+TQty+" 𝐊𝐠'𝐬 𝐓𝐮𝐫𝐦𝐞𝐫𝐢𝐜 𝐏𝐨𝐰𝐝𝐞𝐫 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int turmeric=TQty*spicesPrices[0];
		Mart.turmeric=turmeric;
		spices();
		}
		break;
		case 102:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int CQty=input.nextInt();
		if(CQty==000)
		spices();
		else
		{
		int Total=spicesPrices[1]*CQty;
		System.out.println("    "+CQty+" 𝐊𝐠'𝐬 𝐂𝐨𝐫𝐢𝐚𝐧𝐝𝐞𝐫 𝐏𝐨𝐰𝐝𝐞𝐫 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int coriander=CQty*spicesPrices[1];
		Mart.coriander=coriander;
		spices();
		}
		break;
		case 103:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int ChQty=input.nextInt();
		if(ChQty==000)
		spices();
		else
		{
		int Total1=spicesPrices[2]*ChQty;
		System.out.println("    "+ChQty+" 𝐊𝐠'𝐬 𝐂𝐡𝐢𝐥𝐥𝐢 𝐏𝐨𝐰𝐝𝐞𝐫 𝐏𝐫𝐢𝐜𝐞: "+Total1);
		System.out.println(Arrays.toString(AfterPurchase));
		int chilli=ChQty*spicesPrices[2];
		Mart.chilli=chilli;
		spices();
		}
		break;
		case 104:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int PQty=input.nextInt();
		if(PQty==000)
		spices();
		else
		{
		int Total=spicesPrices[3]*PQty;
		System.out.println("    "+PQty+" 𝐊𝐠'𝐬 𝐏𝐞𝐩𝐩𝐞𝐫 𝐏𝐨𝐰𝐝𝐞𝐫 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int pepper=PQty*spicesPrices[3];
		Mart.pepper=pepper;
		spices();
		}
		break;
		case 105:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int SQty=input.nextInt();
		if(SQty==000)
		spices();
		else
		{
		int Total=spicesPrices[4]*SQty;
		System.out.println("    "+SQty+" 𝐊𝐠'𝐬 𝐒𝐚𝐥𝐭 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int salt=SQty*spicesPrices[4];
		Mart.salt=salt;
		spices();
		}
		break;
		case 100:
		this.Total();
		break;
		default:
		System.out.println(Arrays.toString(evrycaseerror));
		spices();
		}
		}
		public void dairy()
		{
		@SuppressWarnings("resource")
		Scanner input = new Scanner(System.in);
		System.out.println(Arrays.toString(DairyMenu));
		System.out.print("Please Select any Option for Further Details: ");
		int DairyCategories=input.nextInt();
		switch(DairyCategories)
		{
		case 000:
		Groceries();
		break;
		case 111:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int MQty=input.nextInt();
		if(MQty==000)
		dairy();
		else
		{
		int Total=MQty*dairyPrices[0];
		System.out.println("    "+MQty+" 𝟏/𝟐 𝐋𝐢𝐭𝐞𝐫 𝐏𝐚𝐜𝐤 𝐌𝐢𝐥𝐤 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int milk=MQty*dairyPrices[0];
		Mart.milk=milk;
		dairy();
		}
		break;
		case 112:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int EQty=input.nextInt();
		if(EQty==000)
		dairy();
		else
		{
		int Total=EQty*dairyPrices[1];
		System.out.println("    "+EQty+" 𝐃𝐨𝐳𝐞𝐧 𝐄𝐠𝐠𝐬 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int eggs=EQty*dairyPrices[1];
		Mart.eggs=eggs;
		dairy();
		}
		break;
		case 113:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int YQty=input.nextInt();
		if(YQty==000)
		dairy();
		else
		{
		int Total=YQty*dairyPrices[2];
		System.out.println("    "+YQty+" 𝟏/𝟐 𝐋𝐢𝐭𝐞𝐫 𝐏𝐚𝐜𝐤 𝐘𝐨𝐠𝐮𝐫𝐭 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int yogurt=YQty*dairyPrices[2];
		Mart.yogurt=yogurt;
		dairy();
		}
		break;
		case 114:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int BQty=input.nextInt();
		if(BQty==000)
		dairy();
		else
		{
		int Total=BQty*dairyPrices[3];
		System.out.println("    "+BQty+" *𝟏𝟎𝟎 𝐆𝐫𝐚𝐦𝐬 𝐁𝐮𝐭𝐭𝐞𝐫 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int butter=BQty*dairyPrices[3];
		Mart.butter=butter;
		dairy();
		}
		break;
		case 115:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int GQty=input.nextInt();
		if(GQty==000)
		dairy();
		else
		{
		int Total=GQty*dairyPrices[4];
		System.out.println("    "+GQty+"* 𝟏/𝟐 𝐋𝐢𝐭𝐞𝐫 𝐏𝐚𝐜𝐤 𝐆𝐡𝐞𝐞 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int ghee=GQty*dairyPrices[4];
		Mart.ghee=ghee;
		dairy();
		}
		break;
		case 100:
		this.Total();
		break;
		default:
		System.out.println(Arrays.toString(evrycaseerror));
		dairy();
		}
		}
		public void Meat()
		{
		@SuppressWarnings("resource")
		Scanner input = new Scanner(System.in);
		System.out.println(Arrays.toString(MeatMenu));
		System.out.print("Please Select any Option for Further Details: ");
		int MeatCategories=input.nextInt();
		switch(MeatCategories)
		{
		case 000:
		Groceries();
		break;
		case 121:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int CQty=input.nextInt();
		if(CQty==000)
		Meat();
		else
		{
		int Total=CQty*meatPrices[0];
		System.out.println("    "+CQty+" 𝐊𝐠 𝐂𝐡𝐢𝐜𝐤𝐞𝐧 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int chicken=CQty*meatPrices[0];
		Mart.chicken=chicken;
		Meat();
		}
		break;
		case 122:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int MQty=input.nextInt();
		if(MQty==000)
		Meat();
		else
		{
		int Total=MQty*meatPrices[1];
		System.out.println("    "+MQty+" 𝐊𝐠 𝐌𝐮𝐭𝐭𝐨𝐧 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int mutton=MQty*meatPrices[1];
		Mart.mutton=mutton;
		Meat();
		System.out.println();
		}
		break;
		case 123:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int SQty=input.nextInt();
		if(SQty==000)
		Meat();
		else
		{
		int Total=SQty*meatPrices[2];
		System.out.println("    "+SQty+" 𝐊𝐠 𝐒𝐚𝐥𝐦𝐨𝐧 𝐅𝐢𝐬𝐡 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int salmon=SQty*meatPrices[2];
		Mart.salmon=salmon;
		Meat();
		}
		break;
		case 124:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int CrQty=input.nextInt();
		if(CrQty==000)
		Meat();
		else
		{
		int Total=CrQty*meatPrices[3];
		System.out.println("    "+CrQty+" 𝐊𝐠 𝐂𝐫𝐚𝐛 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int crab=CrQty*meatPrices[3];
		Mart.crab=crab;
		Meat();
		}
		break;
		case 125:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int JiQty=input.nextInt();
		if(JiQty==000)
		Meat();
		else
		{
		int Total=JiQty*meatPrices[4];
		System.out.println("    "+JiQty+" 𝐊𝐠 𝐓𝐢𝐥𝐚𝐩𝐢𝐚 (𝐉𝐢𝐥𝐞𝐛𝐢) 𝐅𝐢𝐬𝐡 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int jilebi=JiQty*meatPrices[4];
		Mart.jilebi=jilebi;
		Meat();
		}
		break;
		case 126:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int PrQty=input.nextInt();
		if(PrQty==000)
		Meat();
		else
		{
		int Total=PrQty*meatPrices[5];
		System.out.println("    "+PrQty+" 𝐊𝐠 𝐏𝐫𝐚𝐰𝐧𝐬 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int prawns=PrQty*meatPrices[5];
		Mart.prawns=prawns;
		Meat();
		}
		break;
		case 100:
		this.Total();
		break;
		default:
		System.out.println(Arrays.toString(evrycaseerror));
		Meat();
		}
		}
		public void Grains()
		{
		@SuppressWarnings("resource")
		Scanner input = new Scanner(System.in);
		System.out.println(Arrays.toString(grainsMenu));
		System.out.print("Please Select any Option for Further Details: ");
		int GrainsCategories=input.nextInt();
		switch(GrainsCategories)
		{
		case 000:
		Groceries();
		break;
		case 131:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int RQty=input.nextInt();
		if(RQty==000)
		Grains();
		else
		{
		int Total=RQty*grainsPrices[0];
		System.out.println("    "+RQty+" 𝐊𝐠 𝐑𝐢𝐜𝐞 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int rice=RQty*grainsPrices[0];
		Mart.Rice=rice;
		Grains();
		}
		break;
		case 132:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int BQty=input.nextInt();
		if(BQty==000)
		Grains();
		else
		{
		int Total=BQty*grainsPrices[1];
		System.out.println("    "+BQty+" 𝐏𝐚𝐜𝐤 𝐁𝐫𝐞𝐚𝐝 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int bread=BQty*grainsPrices[1];
		Mart.Bread=bread;
		Grains();
		}
		break;
		case 133:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int FQty=input.nextInt();
		if(FQty==000)
		Grains();
		else
		{
		int Total=FQty*grainsPrices[2];
		System.out.println("    "+FQty+" 𝐊𝐠 𝐅𝐥𝐨𝐮𝐫 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int flour=FQty*grainsPrices[2];
		Mart.Flour=flour;
		Grains();
		}
		break;
		case 134:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int CQty=input.nextInt();
		if(CQty==000)
		Grains();
		else
		{
		int Total=CQty*grainsPrices[3];
		System.out.println("    "+CQty+" 𝟏 𝐏𝐚𝐜𝐤 𝐂𝐞𝐫𝐞𝐚𝐥 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int cereal=CQty*grainsPrices[3];
		Mart.Cereal=cereal;
		Grains();
		}
		break;
		case 100:
		this.Total();
		break;
		default:
		System.out.println("Invalid Input Please Try again");
		Grains();
		}
		}
		//----------------------------------------------------------------------------------------------------------//
		public void fruitsVeggies()
		{
		@SuppressWarnings("resource")
		Scanner input = new Scanner(System.in);
		System.out.println(Arrays.toString(FruitsVeggies));
		System.out.println("Please Select Code for Further Details: ");
		int Categories=input.nextInt();
		switch(Categories)
		{
		case 0:
		menu();
		break;
		case 1:
		this.fruits();
		break;
		case 2:
		this.veggies();
		break;
		case 3:
		this.herbs();
		break;
		case 100:
		this.Total();
		break;
		default:
		System.out.println("Invalid Input Please Try again");
		fruitsVeggies();
		}
		}
		public void fruits()
		{
		@SuppressWarnings("resource")
		Scanner input = new Scanner(System.in);
		System.out.println(Arrays.toString(fruitsMenu));
		System.out.print("Please Select any Option for Further Details: ");
		int fruitsCategories=input.nextInt();
		switch(fruitsCategories)
		{
		case 000:
		fruitsVeggies();
		break;
		case 201:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int MQty=input.nextInt();
		if(MQty==000)
		fruits();
		else
		{
		int Total=MQty*fruitsPrices[0];
		System.out.println("    "+MQty+" 𝐊𝐠'𝐬 "+fruitsnames[0]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int mango=MQty*fruitsPrices[0];
		Mart.mango=mango;
		fruits();
		}
		break;
		case 202:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int BQty=input.nextInt();
		if(BQty==000)
		fruits();
		else
		{
		int Total=BQty*fruitsPrices[1];
		System.out.println("    "+BQty+" 𝐊𝐠'𝐬 "+fruitsnames[1]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int banana=BQty*fruitsPrices[1];
		Mart.banana=banana;
		fruits();
		}
		break;
		case 203:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int WQty=input.nextInt();
		if(WQty==000)
		fruits();
		else
		{
		int Total=WQty*fruitsPrices[2];
		System.out.println("    "+WQty+" 𝐊𝐠'𝐬 "+fruitsnames[2]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int watermelon=WQty*fruitsPrices[2];
		Mart.watermelon=watermelon;
		fruits();
		}
		break;
		case 204:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int OQty=input.nextInt();
		if(OQty==000)
		fruits();
		else
		{
		int Total=OQty*fruitsPrices[3];
		System.out.println("    "+OQty+" 𝐊𝐠'𝐬 "+fruitsnames[3]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int oranges=OQty*fruitsPrices[3];
		Mart.oranges=oranges;
		fruits();
		}
		break;
		case 205:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int AQty=input.nextInt();
		if(AQty==000)
		fruits();
		else
		{
		int Total=AQty*fruitsPrices[4];
		System.out.println("    "+AQty+" 𝐊𝐠'𝐬 "+fruitsnames[4]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int apples=AQty*fruitsPrices[4];
		Mart.apples=apples;
		fruits();
		}
		break;
		case 100:
		this.Total();
		break;
		default:
		System.out.println(Arrays.toString(evrycaseerror));
		fruits();
		}
		}
		public void veggies()
		{
		@SuppressWarnings("resource")
		Scanner input = new Scanner(System.in);
		System.out.println(Arrays.toString(veggiesMenu));
		System.out.print("Please Select any Option for Further Details: ");
		int veggiesCategories=input.nextInt();
		switch(veggiesCategories)
		{
		case 000:
		fruitsVeggies();
		break;
		case 211:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int MQty=input.nextInt();
		if(MQty==000)
		veggies();
		else
		{
		int Total=MQty*veggiesPrices[0];
		System.out.println("    "+MQty+" 𝐊𝐠'𝐬 "+veggiesnames[0]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int Onions=MQty*veggiesPrices[0];
		Mart.Onions=Onions;
		veggies();
		}
		break;
		case 212:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int BQty=input.nextInt();
		if(BQty==000)
		veggies();
		else
		{
		int Total=BQty*veggiesPrices[1];
		System.out.println("    "+BQty+" 𝐊𝐠'𝐬 "+veggiesnames[1]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int Tomatoes=BQty*veggiesPrices[1];
		Mart.Tomatoes=Tomatoes;
		veggies();
		}
		break;
		case 213:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int WQty=input.nextInt();
		if(WQty==000)
		veggies();
		else
		{
		int Total=WQty*veggiesPrices[2];
		System.out.println("    "+WQty+" 𝐊𝐠'𝐬 "+veggiesnames[2]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int Ginger=WQty*veggiesPrices[2];
		Mart.Ginger=Ginger;
		veggies();
		}
		break;
		case 214:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int OQty=input.nextInt();
		if(OQty==000)
		veggies();
		else
		{
		int Total=OQty*veggiesPrices[3];
		System.out.println("    "+OQty+" 𝐊𝐠'𝐬 "+veggiesnames[3]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int Garlic=OQty*veggiesPrices[3];
		Mart.Garlic=Garlic;
		veggies();
		}
		break;
		case 215:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int AQty=input.nextInt();
		if(AQty==000)
		veggies();
		else
		{
		int Total=AQty*veggiesPrices[4];
		System.out.println("    "+AQty+" 𝐊𝐠'𝐬 "+veggiesnames[4]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int GreenChilli=AQty*veggiesPrices[4];
		Mart.GreenChilli=GreenChilli;
		veggies();
		}
		break;
		case 100:
		Total();
		break;
		default:
		System.out.println(Arrays.toString(evrycaseerror));
		veggies();
		}
		}
		public void herbs()
		{
		@SuppressWarnings("resource")
		Scanner input = new Scanner(System.in);
		System.out.println(Arrays.toString(herbsMenu));
		System.out.print("Please Select any Option for Further Details: ");
		int herbsCategories=input.nextInt();
		switch(herbsCategories)
		{
		case 000:
		fruitsVeggies();
		break;
		case 221:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int MQty=input.nextInt();
		if(MQty==000)
		herbs();
		else
		{
		int Total=MQty*herbsPrices[0];
		System.out.println("    "+MQty+" 𝐁𝐮𝐧𝐝𝐥𝐞 "+herbsnames[0]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int Corianderleaves=MQty*herbsPrices[0];
		Mart.Corianderleaves=Corianderleaves;
		herbs();
		}
		break;
		case 222:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int BQty=input.nextInt();
		if(BQty==000)
		herbs();
		else
		{
		int Total=BQty*herbsPrices[1];
		System.out.println("    "+BQty+" 𝐁𝐮𝐧𝐝𝐥𝐞 "+herbsnames[1]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int mintleaves=BQty*herbsPrices[1];
		Mart.mintleaves=mintleaves;
		herbs();
		}
		break;
		case 223:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int WQty=input.nextInt();
		if(WQty==000)
		herbs();
		else
		{
		int Total=WQty*herbsPrices[2];
		System.out.println("    "+WQty+" 𝐁𝐮𝐧𝐝𝐥𝐞 "+herbsnames[2]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int curryleaves=WQty*herbsPrices[2];
		Mart.curryleaves=curryleaves;
		herbs();
		}
		break;
		case 100:
		Total();
		break;
		default:
		System.out.println(Arrays.toString(evrycaseerror));
		herbs();
		}
		}
		public void Beverages()
		{
		@SuppressWarnings("resource")
		Scanner input = new Scanner(System.in);
		System.out.println(Arrays.toString(BeveragesMenu));
		System.out.println("Please Select Code for Further Details: ");
		int Categories=input.nextInt();
		switch(Categories)
		{
		case 0:
		menu();
		break;
		case 1:
		this.Juices();
		break;
		case 2:
		SoftDrinks();
		break;
		case 100:
		this.Total();
		break;
		default:
		System.out.println("Invalid Input Please Try again");
		Beverages();
		}
		}
		public void Juices()
		{
		@SuppressWarnings("resource")
		Scanner input = new Scanner(System.in);
		System.out.println(Arrays.toString(JuicesMenu));
		System.out.print("Please Select any Option for Further Details: ");
		int fruitsCategories=input.nextInt();
		switch(fruitsCategories)
		{
		case 000:
		Beverages();
		break;
		case 341:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int MQty=input.nextInt();
		if(MQty==000)
		Juices();
		else
		{
		int Total=MQty*JuicesPrices[0];
		System.out.println("    "+MQty+" 𝐆𝐥𝐚𝐬𝐬 "+Juicesnames[0]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int Mango=MQty*JuicesPrices[0];
		Mart.Mango=Mango;
		Juices();
		}
		break;
		case 342:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int BQty=input.nextInt();
		if(BQty==000)
		Juices();
		else
		{
		int Total=BQty*JuicesPrices[1];
		System.out.println("    "+BQty+" 𝐆𝐥𝐚𝐬𝐬 "+Juicesnames[1]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int Avacadoo=BQty*JuicesPrices[1];
		Mart.Avacadoo=Avacadoo;
		Juices();
		}
		break;
		case 343:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int WQty=input.nextInt();
		if(WQty==000)
		Juices();
		else
		{
		int Total=WQty*JuicesPrices[2];
		System.out.println("    "+WQty+" 𝐆𝐥𝐚𝐬𝐬 "+Juicesnames[2]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int Grape=WQty*JuicesPrices[2];
		Mart.Grape=Grape;
		Juices();
		}
		break;
		case 344:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int OQty=input.nextInt();
		if(OQty==000)
		Juices();
		else
		{
		int Total=OQty*JuicesPrices[3];
		System.out.println("    "+OQty+" 𝐆𝐥𝐚𝐬𝐬 "+Juicesnames[3]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int Orange=OQty*JuicesPrices[3];
		Mart.Orange=Orange;
		Juices();
		}
		break;
		case 345:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int AQty=input.nextInt();
		if(AQty==000)
		Juices();
		else
		{
		int Total=AQty*JuicesPrices[4];
		System.out.println("    "+AQty+" 𝐆𝐥𝐚𝐬𝐬 "+Juicesnames[4]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int Apple=AQty*JuicesPrices[4];
		Mart.Apple=Apple;
		Juices();
		}
		break;
		case 346:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int Qty=input.nextInt();
		if(Qty==000)
		Juices();
		else
		{
		int Total=Qty*JuicesPrices[5];
		System.out.println("    "+Qty+" 𝐆𝐥𝐚𝐬𝐬 "+Juicesnames[5]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int Papaya=Qty*JuicesPrices[5];
		Mart.Papaya=Papaya;
		Juices();
		}
		break;
		case 100:
		Total();
		break;
		default:
		System.out.println(Arrays.toString(evrycaseerror));
		Juices();
		}
		}
		public void SoftDrinks()
		{
		@SuppressWarnings("resource")
		Scanner input = new Scanner(System.in);
		System.out.println(Arrays.toString(SoftDrinksMenu));
		System.out.print("Please Select any Option for Further Details: ");
		int JuiceCategories=input.nextInt();
		switch(JuiceCategories)
		{
		case 000:
		Beverages();
		break;
		case 351:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int MQty=input.nextInt();
		if(MQty==000)
		SoftDrinks();
		else
		{
		int Total=MQty*SoftDrinksPrices[0];
		System.out.println("    "+MQty+" 𝐍𝐨'𝐬 "+SoftDrinksnames[0]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int Pepsi=MQty*SoftDrinksPrices[0];
		Mart.Pepsi=Pepsi;
		SoftDrinks();
		}
		break;
		case 352:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int BQty=input.nextInt();
		if(BQty==000)
		SoftDrinks();
		else
		{
		int Total=BQty*SoftDrinksPrices[1];
		System.out.println("    "+BQty+" 𝐍𝐨'𝐬 "+SoftDrinksnames[1]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int CoCoCola=BQty*SoftDrinksPrices[1];
		Mart.CoCoCola=CoCoCola;
		SoftDrinks();
		}
		break;
		case 353:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int WQty=input.nextInt();
		if(WQty==000)
		SoftDrinks();
		else
		{
		int Total=WQty*SoftDrinksPrices[2];
		System.out.println("    "+WQty+" 𝐍𝐨'𝐬 "+SoftDrinksnames[2]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int Mazza=WQty*SoftDrinksPrices[2];
		Mart.Mazza=Mazza;
		SoftDrinks();
		}
		break;
		case 354:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int OQty=input.nextInt();
		if(OQty==000)
		SoftDrinks();
		else
		{
		int Total=OQty*SoftDrinksPrices[3];
		System.out.println("    "+OQty+" 𝐍𝐨'𝐬 "+SoftDrinksnames[3]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int Sprite=OQty*SoftDrinksPrices[3];
		Mart.Sprite=Sprite;
		SoftDrinks();
		}
		break;
		case 355:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int AQty=input.nextInt();
		if(AQty==000)
		SoftDrinks();
		else
		{
		int Total=AQty*SoftDrinksPrices[4];
		System.out.println("    "+AQty+" 𝐍𝐨'𝐬 "+SoftDrinksnames[4]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int ThumpsUp=AQty*SoftDrinksPrices[4];
		Mart.ThumpsUp=ThumpsUp;
		SoftDrinks();
		}
		break;
		case 100:
		Total();
		break;
		default:
		System.out.println(Arrays.toString(evrycaseerror));
		SoftDrinks();
		}
		}
		public void Chocolates()
		{
		@SuppressWarnings("resource")
		Scanner input = new Scanner(System.in);
		System.out.println(Arrays.toString(ChocolatesMenu));
		System.out.print("Please Select Code for Further Details: ");
		int Types=input.nextInt();
		switch(Types)
		{
		case 0:
		this.menu();
		break;
		case 401:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int Qty1=input.nextInt();
		if(Qty1==000)
		Chocolates();
		else
		{
		int Total=Qty1*ChocolatesPrices[0];
		System.out.println("    "+Qty1+" 𝐏𝐢𝐞𝐜𝐞𝐬 "+Chocolatesnames[0]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int DiaryMilk=Qty1*ChocolatesPrices[0];
		Mart.DiaryMilk=DiaryMilk;
		Chocolates();
		}
		break;
		case 402:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int Qty2=input.nextInt();
		if(Qty2==000)
		Chocolates();
		else
		{
		int Total=Qty2*ChocolatesPrices[1];
		System.out.println("    "+Qty2+" 𝐏𝐢𝐞𝐜𝐞𝐬 "+Chocolatesnames[1]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int Kitkat=Qty2*ChocolatesPrices[1];
		Mart.Kitkat=Kitkat;
		Chocolates();
		}
		break;
		case 403:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int Qty3=input.nextInt();
		if(Qty3==000)
		Chocolates();
		else
		{
		int Total=Qty3*ChocolatesPrices[2];
		System.out.println("    "+Qty3+" 𝐏𝐢𝐞𝐜𝐞𝐬 "+Chocolatesnames[2]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int Cadbury5Star=Qty3*ChocolatesPrices[2];
		Mart.Cadbury5Star=Cadbury5Star;
		Chocolates();
		}
		break;
		case 404:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int Qty4=input.nextInt();
		if(Qty4==000)
		Chocolates();
		else
		{
		int Total=Qty4*ChocolatesPrices[3];
		System.out.println("    "+Qty4+" 𝐏𝐢𝐞𝐜𝐞𝐬 "+Chocolatesnames[3]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int Kisses=Qty4*ChocolatesPrices[3];
		Mart.Kisses=Kisses;
		Chocolates();
		}
		break;
		case 405:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int Qty5=input.nextInt();
		if(Qty5==000)
		Chocolates();
		else
		{
		int Total=Qty5*ChocolatesPrices[4];
		System.out.println("    "+Qty5+" 𝐏𝐢𝐞𝐜𝐞𝐬 "+Chocolatesnames[4]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int Snickers=Qty5*ChocolatesPrices[4];
		Mart.Snickers=Snickers;
		Chocolates();
		}
		break;
		case 406:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int Qty6=input.nextInt();
		if(Qty6==000)
		Chocolates();
		else
		{
		int Total=Qty6*ChocolatesPrices[5];
		System.out.println("    "+Qty6+" 𝐏𝐢𝐞𝐜𝐞𝐬 "+Chocolatesnames[5]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int Flakes=Qty6*ChocolatesPrices[5];
		Mart.Flakes=Flakes;
		Chocolates();
		}
		break;
		case 100:
		this.Total();
		break;
		default:
		System.out.println("Invalid Input Please Try again");
		Chocolates();
		}
		}
		public void Snacks()
		{
		@SuppressWarnings("resource")
		Scanner input = new Scanner(System.in);
		System.out.println(Arrays.toString(SnacksMenu)+"\n");
		System.out.print("Please Select Code for Further Details: ");
		int Categories=input.nextInt();
		switch(Categories)
		{
		case 0:
		this.menu();
		break;
		case 501:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int Qty1=input.nextInt();
		if(Qty1==000)
		Snacks();
		else
		{
		int Total=Qty1*SnacksPrices[0];
		System.out.println("    "+Qty1+" 𝐏𝐚𝐜𝐤 "+Snacksnames[0]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int Maggie=Qty1*SnacksPrices[0];
		Mart.Maggie=Maggie;
		Snacks();
		}
		break;
		case 502:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int Qty2=input.nextInt();
		if(Qty2==000)
		Snacks();
		else
		{
		int Total=Qty2*SnacksPrices[1];
		System.out.println("    "+Qty2+" 𝐏𝐚𝐜𝐤 "+Snacksnames[1]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int Lays=Qty2*SnacksPrices[1];
		Mart.Lays=Lays;
		Snacks();
		}
		break;
		case 503:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int Qty3=input.nextInt();
		if(Qty3==000)
		Snacks();
		else
		{
		int Total=Qty3*SnacksPrices[2];
		System.out.println("    "+Qty3+" 𝐏𝐚𝐜𝐤 "+Snacksnames[2]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int Kurkure=Qty3*SnacksPrices[2];
		Mart.Kurkure=Kurkure;
		Snacks();
		}
		break;
		case 504:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int Qty4=input.nextInt();
		if(Qty4==000)
		Snacks();
		else
		{
		int Total=Qty4*SnacksPrices[3];
		System.out.println("    "+Qty4+" 𝐏𝐚𝐜𝐤 "+Snacksnames[3]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int HideNSeek=Qty4*SnacksPrices[3];
		Mart.HideNSeek=HideNSeek;
		Snacks();
		}
		break;
		case 505:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int Qty5=input.nextInt();
		if(Qty5==000)
		Snacks();
		else
		{
		int Total=Qty5*SnacksPrices[0];
		System.out.println("    "+Qty5+" 𝐏𝐚𝐜𝐤 "+Snacksnames[0]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int DarkFantacy=Qty5*SnacksPrices[0];
		Mart.DarkFantacy=DarkFantacy;
		Snacks();
		}
		break;
		case 506:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int Qty6=input.nextInt();
		if(Qty6==000)
		Snacks();
		else
		{
		int Total=Qty6*SnacksPrices[5];
		System.out.println("    "+Qty6+" 𝐏𝐚𝐜𝐤 "+Snacksnames[5]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int LittleHearts=Qty6*SnacksPrices[5];
		Mart.LittleHearts=LittleHearts;
		Snacks();
		}
		break;
		case 507:
		System.out.println(Arrays.toString(evrycase));
		System.out.println();
		int Qty7=input.nextInt();
		if(Qty7==000)
		Snacks();
		else
		{
		int Total=Qty7*SnacksPrices[6];
		System.out.println("    "+Qty7+" 𝐏𝐚𝐜𝐤 "+Snacksnames[6]+" 𝐏𝐫𝐢𝐜𝐞: "+Total);
		System.out.println(Arrays.toString(AfterPurchase));
		int Act2Popcorn=Qty7*SnacksPrices[6];
		Mart.Act2Popcorn=Act2Popcorn;
		Snacks();
		}
		break;
		case 100:
		this.Total();
		break;
		default:
		System.out.println("Invalid Input Please Try again");
		Snacks();
		}
		}
		public void Total()
		{
		int AllQuantities[]=new int[] {turmeric/spicesPrices[0],coriander/spicesPrices[1],chilli/spicesPrices[2],pepper/spicesPrices[3],salt/spicesPrices[4],milk/dairyPrices[0],eggs/dairyPrices[1],yogurt/dairyPrices[2],butter/dairyPrices[3],ghee/dairyPrices[4],chicken/meatPrices[0],mutton/meatPrices[1],salmon/meatPrices[2],crab/meatPrices[3],jilebi/meatPrices[4],prawns/meatPrices[5],Rice/grainsPrices[0],Bread/grainsPrices[1],Flour/grainsPrices[2],Cereal/grainsPrices[3],mango/fruitsPrices[0],banana/fruitsPrices[1],watermelon/fruitsPrices[2],oranges/fruitsPrices[3],apples/fruitsPrices[4],Onions/veggiesPrices[0],Tomatoes/veggiesPrices[1],Ginger/veggiesPrices[2],Garlic/veggiesPrices[3],GreenChilli/veggiesPrices[4],Corianderleaves/herbsPrices[0],mintleaves/herbsPrices[1],curryleaves/herbsPrices[2],Mango/JuicesPrices[0],Avacadoo/JuicesPrices[1],Grape/JuicesPrices[2],Orange/JuicesPrices[3],Apple/JuicesPrices[4],Papaya/JuicesPrices[5],Pepsi/SoftDrinksPrices[0],CoCoCola/SoftDrinksPrices[1],Mazza/SoftDrinksPrices[2],Sprite/SoftDrinksPrices[3],ThumpsUp/SoftDrinksPrices[4],DiaryMilk/ChocolatesPrices[0],Kitkat/ChocolatesPrices[1],Cadbury5Star/ChocolatesPrices[2],Kisses/ChocolatesPrices[3],Snickers/ChocolatesPrices[4],Flakes/ChocolatesPrices[5],Maggie/SnacksPrices[0],Lays/SnacksPrices[1],Kurkure/SnacksPrices[2],HideNSeek/SnacksPrices[3],DarkFantacy/SnacksPrices[4],LittleHearts/SnacksPrices[5],Act2Popcorn/SnacksPrices[6]};
		int sum=0;
		for(int Q=0;Q<AllQuantities.length;Q++)
		sum=sum+AllQuantities[Q];
		if(sum==0)
		{
		System.out.println("\n\t𝙊𝙊𝙋𝙎𝙎...\n𝙔𝙤𝙪 𝙝𝙖𝙫𝙚 𝙣𝙤𝙩 𝙨𝙚𝙡𝙚𝙘𝙩𝙚𝙙 𝙖𝙣𝙮 𝙞𝙩𝙚𝙢𝙨\n𝙋𝙡𝙚𝙖𝙨𝙚 𝙎𝙚𝙡𝙚𝙘𝙩 𝙊𝙣𝙚 𝙤𝙧 𝙈𝙤𝙧𝙚 𝙄𝙩𝙚𝙢𝙨 𝙩𝙤 𝙂𝙚𝙣𝙚𝙧𝙖𝙩𝙚 𝙔𝙤𝙪𝙧 𝘽𝙞𝙡𝙡...");
		Mart.main(null);
		}
		else
		{
		Scanner sc=new Scanner(System.in);
		System.out.print("\n\t\t\tPlease Enter Your Name: ");
		String Name=sc.next();
		System.out.print("\n\t\t\tPlease Enter Your Mobile Number: ");
		long phNo=sc.nextLong();
		System.out.print("\n\t\t\tPlease Enter Your Area: ");
		String Address=sc.next();
		System.out.println("\n\n\n");
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");  
		LocalDateTime now = LocalDateTime.now();  
		System.out.println(" ◤⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔⏔◥");
		System.out.println(" ¦※⁜※⁜※⁜※⁜※⁜※⁜※⁜※ 𝕎𝔼𝕃ℂ𝕆𝕄𝔼 𝕋𝕆 𝔻𝔸𝕀𝕃𝕐 𝔽ℝ𝔼𝕊ℍ 𝕄𝔸ℝ𝕋 ⁜※⁜※⁜※⁜※⁜※⁜※⁜※⁜¦");
		System.out.println(" ◣⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕⏕◢\n");
		System.out.println("   Purchase Date & Time: \t\t\t"+dtf.format(now));
		System.out.println(" ----------------------------------------------------------------------");
		System.out.println("\tProduct Code \tProduct Name \tPrice/Kg \tQty \tPrice");
		for(int Q=0;Q<AllQuantities.length;Q++)
		{
		if(AllQuantities[Q]>0)
		{
		System.out.println("\t\t"+AllItemCode[Q]+"\t"+AllItemNames[Q]+"\t"+AllPrices[Q]+"\t\t"+AllQuantities[Q]+"\t"+(AllPrices[Q]*AllQuantities[Q]));
		}
		}
		int Total=0;
		for(int Q=0;Q<AllQuantities.length;Q++)
		Total=Total+(AllQuantities[Q]*AllPrices[Q]);

		int TotalItems=0;
		for(int Q=0;Q<AllQuantities.length;Q++)
		if(AllQuantities[Q]>0)
		TotalItems=TotalItems+1;

		int TotalQuantity=0;
		for(int Q=0;Q<AllQuantities.length;Q++)
		TotalQuantity=TotalQuantity+AllQuantities[Q];

		System.out.println(" ---------------------------------------------------------------------\n\t\t\t\t\t\t🆃🅾🆃🅰🅻:     ₹"+Total+"/-\n ---------------------------------------------------------------------");
		if(Total>1000)
		System.out.println("\n\t Hey!!! You Saved ₹"+(Total*5/100)+" on your purchase.");
		System.out.println(" ---------------------------------------------------------------------\n\t\t\t\t\t🅶🆁🅰🅽🅳 🆃🅾🆃🅰🅻:\t₹"+(Total-(Total*5/100))+"/- Only.\n ---------------------------------------------------------------------");

		System.out.println("\n\t𝙔𝙤𝙪 𝙋𝙪𝙧𝙘𝙝𝙖𝙨𝙚𝙙 "+TotalItems+" 𝙄𝙩𝙚𝙢𝙨 & 𝐓𝐨𝐭𝐚𝐥 𝐐𝐮𝐚𝐧𝐭𝐢𝐭𝐲 𝐨𝐟 𝐚𝐥𝐥 𝐏𝐮𝐫𝐜𝐡𝐚𝐬𝐞𝐝 𝐈𝐭𝐞𝐦𝐬 𝐢𝐬 "+TotalQuantity+".");
		System.out.println("\tThanks You For Shopping With Us");
		System.out.println("\tVisit Us Again\n");

		System.out.println(" \tCustomer Details: \n\n\t"+"\tCustomer Name: \t\t"+Name+"\n\t\tMobile Number: \t\t"+phNo+"\n\t\tArea: \t\t\t"+Address);
		System.out.println(" ---------------------------------------------------------------------\n\t\t\t\tThank You\n ---------------------------------------------------------------------");
		sc.close();
		}
		}
		public void unused()
		{
		for(int Q=0;Q<spicesQuantity.length;Q++)
		{
		if(spicesQuantity[Q]>0)
		{
		System.out.println("\t"+spicesItemCode[Q]+"\t\t"+spicesnames[Q]+"\t"+spicesPrices[Q]+"\t\t"+spicesQuantity[Q]+"\t"+(spicesPrices[Q]*spicesQuantity[Q]));
		}
		}
		for(int Q=0;Q<dairyQuantity.length;Q++)
		{
		if(dairyQuantity[Q]>0)
		{
		System.out.println("\t"+dairyItemCode[Q]+"\t\t"+dairynames[Q]+"\t"+dairyPrices[Q]+"\t\t"+dairyQuantity[Q]+"\t"+(dairyPrices[Q]*dairyQuantity[Q]));
		}
		}
		for(int Q=0;Q<meatQuantity.length;Q++)
		{
		if(meatQuantity[Q]>0)
		{
		System.out.println("\t"+meatItemCode[Q]+"\t\t"+meatNames[Q]+"\t"+meatPrices[Q]+"\t\t"+meatQuantity[Q]+"\t"+(meatPrices[Q]*meatQuantity[Q]));
		}
		}
		for(int Q=0;Q<grainsQuantity.length;Q++)
		{
		if(grainsQuantity[Q]>0)
		{
		System.out.println("\t"+grainsItemCode[Q]+"\t\t"+grainsnames[Q]+"\t"+grainsPrices[Q]+"\t\t"+grainsQuantity[Q]+"\t"+(grainsPrices[Q]*grainsQuantity[Q]));
		}
		}
		for(int Q=0;Q<fruitsQuantity.length;Q++)
		{
		if(fruitsQuantity[Q]>0)
		{
		System.out.println("\t"+fruitsItemCode[Q]+"\t\t"+fruitsnames[Q]+"\t"+fruitsPrices[Q]+"\t\t"+fruitsQuantity[Q]+"\t"+(fruitsPrices[Q]*fruitsQuantity[Q]));
		}
		}
		for(int Q=0;Q<veggiesQuantity.length;Q++)
		{
		if(veggiesQuantity[Q]>0)
		{
		System.out.println("\t"+veggiesItemCode[Q]+"\t\t"+veggiesnames[Q]+"\t"+veggiesPrices[Q]+"\t\t"+veggiesQuantity[Q]+"\t"+(veggiesPrices[Q]*veggiesQuantity[Q]));
		}
		}
		for(int Q=0;Q<herbsQuantity.length;Q++)
		{
		if(herbsQuantity[Q]>0)
		{
		System.out.println("\t"+herbsItemCode[Q]+"\t\t"+herbsnames[Q]+"\t"+herbsPrices[Q]+"\t\t"+herbsQuantity[Q]+"\t"+(herbsPrices[Q]*herbsQuantity[Q]));
		}
		}
		}
		public static void main(String[] args)
		{
		Mart obj=new Mart();
		@SuppressWarnings("resource")
		Scanner input=new Scanner(System.in);
		System.out.println(" ◤–—————————————————————————————————————–———————————◥");
		System.out.println(" ¦▶◀▶▰▱▰▱▰▱▰▱ ▀▄▀▄ 𝕎𝔼𝕃ℂ𝕆𝕄𝔼 𝕋𝕆 𝔻𝔸𝕀𝕃𝕐 𝔽ℝ𝔼𝕊ℍ 𝕄𝔸ℝ𝕋 ▄▀▄▀ ▰▱▰▱▰▱▰▱◀▶▶¦");
		System.out.println(" ◣––—————————————–———————————————————————–———————————◢\n");
		System.out.println("\t\t\t1. Menu \n\t\t\t2. Exit\n");
		System.out.print("Please Select Your Option: ");
		int goToMenu=input.nextInt();
		System.out.println();
		if(goToMenu==1)
		obj.menu();
		else
		{
		System.out.println("You are about exit shopping... \n———————————————————————————————\nIf you want to Shop please click 1 \n———————————————————————————————\nTo Confirm Exit Click 2");
		System.out.println("");
		int goToMenu2=input.nextInt();
		if(goToMenu2==1)
		{
		new Mart().menu();
		System.out.println("\nYou have Successfully Exited from Shopping...Thank you");
		System.out.println("Your Bill is as follows: ");
		}
		else
		System.out.println("\nYou have Successfully Exited from Shopping...Thank you");
		}
		}
}
