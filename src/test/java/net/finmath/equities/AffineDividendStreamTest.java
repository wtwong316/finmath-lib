package net.finmath.equities;

import java.text.DecimalFormat;
import java.time.LocalDate;
import java.util.HashMap;

import static org.junit.Assert.*;
import org.junit.Test;
import net.finmath.exception.CalculationException;
import net.finmath.time.daycount.DayCountConvention;
import net.finmath.time.daycount.DayCountConventionFactory;
import net.finmath.equities.marketdata.*;
import net.finmath.equities.models.*;


/**
 * Tests for the classes handling Buehle dividends.
 *
 * @author Andreas Grotz
 */

public class AffineDividendStreamTest {
	/*
	 */
	static final DecimalFormat decform = new DecimalFormat("#0.00");
	DayCountConvention dcc = DayCountConventionFactory.getDayCountConvention("act/365") ;

	@Test
	public void Test_sorting() throws CalculationException
	{
		var dividends = new AffineDividendStream(new AffineDividend[]
				{new AffineDividend(LocalDate.parse("2021-09-17"), 10.0, 0.0),
						new AffineDividend(LocalDate.parse("2019-09-17"), 20.0, 0.0),
						new AffineDividend(LocalDate.parse("2020-09-17"), 30.0, 0.0)});
		var dates = dividends.getDividendDates();
		assertTrue(dates.get(0).isBefore(dates.get(1)) && dates.get(1).isBefore(dates.get(2)));
	}

	@Test
	public void Test_affineDividendConversion() throws CalculationException
	{
		var valDate = LocalDate.parse("2019-06-15");
		var spot = 100.0;
		var rate = 0.01;
		var curve = new FlatYieldCurve(valDate, rate, dcc);
		var cashDividends = new AffineDividendStream(new AffineDividend[]
				{new AffineDividend(LocalDate.parse("2019-09-17"), 10.0, 0.0),
						new AffineDividend(LocalDate.parse("2020-09-17"), 10.0, 0.0),
						new AffineDividend(LocalDate.parse("2021-09-17"), 10.0, 0.0)});

		var conversionRates = new HashMap<LocalDate, Double>() {
			private static final long serialVersionUID = 8454377222706940302L;
			{
				put(LocalDate.parse("2019-09-17"), 0.0);
				put(LocalDate.parse("2020-09-17"), 0.5);
				put(LocalDate.parse("2021-09-17"), 1.0);
			}};

			var affineDividends = AffineDividendStream.getAffineDividendsFromCashDividends(
					cashDividends, conversionRates, valDate, spot, curve);

			var fsCash = new BuehlerDividendForwardStructure(valDate, spot, curve, cashDividends, dcc);
			var fsAffine = new BuehlerDividendForwardStructure(valDate, spot, curve, affineDividends, dcc);

			var tol = 1e-13;
			assertEquals(fsCash.getForward(LocalDate.parse("2019-09-16")),
					fsAffine.getForward(LocalDate.parse("2019-09-16")),
					tol);
			assertEquals(fsCash.getForward(LocalDate.parse("2019-09-17")),
					fsAffine.getForward(LocalDate.parse("2019-09-17")),
					tol);
			assertEquals(fsCash.getForward(LocalDate.parse("2020-09-16")),
					fsAffine.getForward(LocalDate.parse("2020-09-16")),
					tol);
			assertEquals(fsCash.getForward(LocalDate.parse("2020-09-17")),
					fsAffine.getForward(LocalDate.parse("2020-09-17")),
					tol);
			assertEquals(fsCash.getForward(LocalDate.parse("2021-09-16")),
					fsAffine.getForward(LocalDate.parse("2021-09-16")),
					tol);
			assertEquals(fsCash.getForward(LocalDate.parse("2021-09-17")),
					fsAffine.getForward(LocalDate.parse("2021-09-17")),
					tol);
	}
}