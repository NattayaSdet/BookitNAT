package com.bookit.step_definitions;



import com.bookit.utilities.DBUtils;
import com.bookit.utilities.Driver;
import cucumber.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import java.util.concurrent.TimeUnit;

public class Hooks {

    @Before("@db")
    public void dbHook(){
        System.out.println("creating database connection");
        DBUtils.createConnection();

    }

    @After("@db")
    public void afterDbHook(){
        System.out.println("closing database connection");
        DBUtils.destroyConnection();
    }

    @Before
    public void setUp(){
        Driver.get().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }

    @After
    public void tearDown(Scenario scenario){
        if(scenario.isFailed()){
            final byte[] screenshot = ((TakesScreenshot) Driver.get()).getScreenshotAs(OutputType.BYTES);
             scenario.embed(screenshot, "image/png");
        }
        Driver.closeDriver();
    }


}
