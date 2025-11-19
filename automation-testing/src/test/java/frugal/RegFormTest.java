package frugal;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.*;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.time.Duration;

public class RegFormTest {
    private WebDriver driver;
    private String baseUrl;

    @BeforeClass
    public void setUp(){
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(6));
        // === EDIT THIS PATH TO WHERE YOUR frugal-registration/index.html IS LOCATED ===
        // Example Windows: "file:///C:/Users/Nazil/frugal-registration/index.html"
        // Example Linux/Mac: "file:///home/yourname/frugal-registration/index.html"
        baseUrl = "file:///D:/WEB%20DEVELOPMENT/projectsthatareinresume/frugal-registrationform/index.html";
        ;
        new File("screenshots").mkdirs();
    }

    @AfterClass
    public void tearDown(){
        if(driver != null) driver.quit();
    }

    @Test(priority = 1)
    public void openAndVerifyLandingPage(){
        driver.get(baseUrl);
        System.out.println("Page URL: " + driver.getCurrentUrl());
        System.out.println("Page Title: " + driver.getTitle());
        WebElement form = driver.findElement(By.id("regForm"));
        assert form.isDisplayed();
    }

    @Test(priority = 2)
    public void negativeFlow_missingLastName(){
        driver.get(baseUrl);
        driver.findElement(By.id("firstName")).sendKeys("Nazil");
        driver.findElement(By.id("email")).sendKeys("test.user@example.com");
        driver.findElement(By.id("phone")).sendKeys("+919876543210");
        driver.findElement(By.cssSelector("input[name='gender'][value='Male']")).click();
        driver.findElement(By.id("password")).sendKeys("Abcd1234!");
        driver.findElement(By.id("confirmPassword")).sendKeys("Abcd1234!");
        driver.findElement(By.id("terms")).click();
        driver.findElement(By.id("submitBtn")).click();
        WebElement err = driver.findElement(By.id("err-lastName"));
        takeScreenshot("screenshots/error-state.png");
        assert err.getText().trim().length() > 0 : "Expected error for missing last name";
    }

    @Test(priority = 3)
    public void positiveFlow_validSubmission() throws InterruptedException {
        driver.get(baseUrl);
        driver.findElement(By.id("firstName")).clear();
        driver.findElement(By.id("firstName")).sendKeys("Nazil");
        driver.findElement(By.id("lastName")).sendKeys("Sheikh");
        driver.findElement(By.id("email")).sendKeys("nazil.sheikh@example.com");
        driver.findElement(By.id("phone")).sendKeys("+919876543210");
        driver.findElement(By.cssSelector("input[name='gender'][value='Male']")).click();
        driver.findElement(By.id("address")).sendKeys("Some address");
        WebElement country = driver.findElement(By.id("country"));
        country.findElement(By.xpath("//option[text()='India']")).click();
        WebElement state = driver.findElement(By.id("state"));
        state.findElement(By.xpath("//option[text()='Telangana']")).click();
        WebElement city = driver.findElement(By.id("city"));
        city.findElement(By.xpath("//option[text()='Hyderabad']")).click();
        driver.findElement(By.id("password")).sendKeys("Abcd1234!");
        driver.findElement(By.id("confirmPassword")).sendKeys("Abcd1234!");
        driver.findElement(By.id("terms")).click();
        Thread.sleep(800);
        WebElement submit = driver.findElement(By.id("submitBtn"));
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].scrollIntoView(true);", submit);
        submit.click();
        Thread.sleep(800);
        WebElement alert = driver.findElement(By.id("alert"));
        takeScreenshot("screenshots/success-state.png");
        String txt = alert.getText();
        assert txt.toLowerCase().contains("registration successful") : "Expected success message after submission";
    }

    @Test(priority = 4)
    public void logicValidations() throws InterruptedException {
        driver.get(baseUrl);
        WebElement country = driver.findElement(By.id("country"));
        country.findElement(By.xpath("//option[text()='United States']")).click();
        WebElement state = driver.findElement(By.id("state"));
        state.findElement(By.xpath("//option[text()='California']")).click();
        WebElement city = driver.findElement(By.id("city"));
        assert city.getText().toLowerCase().contains("san francisco") || city.getText().toLowerCase().contains("los angeles");
        driver.findElement(By.id("password")).sendKeys("Password1!");
        driver.findElement(By.id("confirmPassword")).sendKeys("WrongPass!");
        driver.findElement(By.id("terms")).click();
        driver.findElement(By.id("submitBtn")).click();
        WebElement errConfirm = driver.findElement(By.id("err-confirmPassword"));
        assert errConfirm.getText().trim().length() > 0 : "Expected confirm password error";
    }

    private void takeScreenshot(String path){
        File src = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
        try{
            Files.copy(src.toPath(), new File(path).toPath());
            System.out.println("Saved screenshot: " + path);
        } catch(IOException ex){
            ex.printStackTrace();
        }
    }
}
