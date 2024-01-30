package br.com.farmacristo.model.util.format;

import java.text.NumberFormat;
import java.util.Locale;

public class PriceFormat {
	
	public static String getFormattedPrice(Double price) {
		Locale locale = new Locale( "pt", "BR" );  
		NumberFormat numberFormat = NumberFormat.getCurrencyInstance(locale); 
		return numberFormat.format(price);
	}
	
}
