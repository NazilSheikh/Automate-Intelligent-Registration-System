<!-- Project Header -->
<h1 align="center">🚀 Frugal Registration System — Frontend + Automation</h1>

<p align="center">
  <b>A complete assignment submitted for the Frugal Testing Software Engineer Role</b><br/>
  Fully responsive Registration Form + Selenium Automation Framework
</p>

---

## 🏆 **Project Overview**

This repository contains the complete solution for the **Frugal Testing SE Assignment**, including:

- **Modern Registration Form UI (Frontend)**
- **Client-side Validation (JavaScript)**
- **Dynamic Country → State → City Dropdown System**
- **Password Strength Meter**
- **Inline Error Handling**
- **Success Alerts with Animations**
- **Full Selenium Test Automation Suite (Maven + TestNG)**  
- **Screenshots for Positive and Negative Flows**

This repo is organized in a clean, professional structure suitable for recruiters and evaluators.

---

## ✨ **Frontend Features (Registration Form)**

### ✔️ Core Functionalities
- First Name & Last Name validation  
- Email validation (blocks disposable domains)  
- Phone validation with country code  
- Gender, Address, Location selection  
- Dynamic **Country → State → City** update  
- Password strength meter (Weak • Medium • Strong)  
- Confirm password match check  
- Terms & Conditions required  
- Beautiful dark-themed UI with glassmorphism  
- Fully responsive (mobile-friendly)  
- Success confirmation alert  

### 🎨 **UI/UX Enhancements**
- Smooth animations  
- Neon borders + glowing hover effects  
- Modern typography  
- Clean form layout  
- Interactive buttons  

---

## 🧪 **Selenium Automation (TestNG + WebDriverManager)**

The automation suite covers **all flows required by the assignment**:

---

### 🔹 **Flow A — Negative Test Case**
- Leave *Last Name* empty  
- Submit the form  
- Validate inline error  
- Screenshot saved → `error-state.png`

---

### 🔹 **Flow B — Positive Test Case**
- Fill all fields validly  
- Submit the form  
- Validate success alert  
- Screenshot saved → `success-state.png`

---

### 🔹 **Flow C — Logical Validation**
- Country change updates States  
- State change updates Cities  
- Password mismatch detection  
- Submit disabled when invalid  

---

## 🧰 **Tech Stack**

### 💻 Frontend
- HTML5  
- CSS3 (Custom animated UI)  
- JavaScript (Validation + dynamic lists)

### ⚙️ Automation
- Java (JDK 17/21)  
- Selenium WebDriver 4.x  
- TestNG  
- Maven  
- WebDriverManager  
- IntelliJ IDEA  

---

## 🎥 Demo Video

A complete execution demo of the automation test suite is available on Google Drive.

## ➡️ Demo Video Link:  
https://drive.google.com/file/d/1iPsiajuLcmjlTaigNeG9MOhWtrIxvQhH/view?usp=drivesdk

## 📸 Screenshots

❌ Negative Test

automation/screenshots/error-state.png

Shows inline validation error when submitting invalid input.

✔️ Positive Test

automation/screenshots/success-state.png

Shows success alert after successful form submission.

---

<h1 align="center">🧪 Selenium Automation — Frugal Registration Form</h1>

<p align="center">
  <b>Complete Test Automation Suite for the Registration Form Project</b><br/>
  Built using Selenium WebDriver, TestNG, Maven, and IntelliJ IDEA
</p>

---

## ⚙️ **Tech Stack Used**

<div align="center">

| Tool / Framework | Version |
|------------------|---------|
| ☕ Java           | 17 / 21 |
| 🧪 TestNG         | 7.8.0 |
| 🌐 Selenium       | 4.10.0 |
| ⚙️ WebDriverManager | 5.4.1 |
| 📦 Maven          | Latest |
| 🛠 IntelliJ IDEA  | Community/Ultimate |
| 🖥 Google Chrome  | Latest |

</div>

---

## 🚀 **How to Run the Automation Tests**

### **1️⃣ Install Prerequisites**

Make sure the following are installed:

- Java JDK **11+**  
- Maven  
- IntelliJ IDEA  
- Google Chrome (latest)  

---

### **2️⃣ Open Project in IntelliJ IDEA**

Open the folder:

automation/


IntelliJ will automatically detect the **Maven** project and download dependencies.

---

### **3️⃣ Set the Base URL (Important)**

Open:

src/test/java/frugal/RegFormTest.java


Locate the line:

```java
baseUrl = "file:///D:/WEB%20DEVELOPMENT/projectsthatareinresume/frugal-registrationform/index.html";

```
---

4️⃣ Run Test Suite

You can run the full suite using either method:

✔ Method A — Using TestNG (Preferred)

Right-click on:

testng.xml


Then choose:

Run 'testng.xml'

✔ Method B — Using Maven

Inside the automation folder terminal:

mvn test

📝 Test Flows Implemented
✔ Flow A — Negative Test

Leave “Last Name” empty

Submit the form

Test verifies inline error

Screenshot saved → screenshots/error-state.png

✔ Flow B — Positive Test

Fill the entire form with valid data

Submit form → success alert

Screenshot saved → screenshots/success-state.png

✔ Flow C — Logical Validations

Country → State dynamic dropdown behavior

State → City dynamic update

Confirm password mismatch check

Submit remains disabled when invalid

All tests are structured using TestNG for clean reporting and execution flow.

📷 Screenshots

Screenshots are automatically saved here:

automation/screenshots/


Example files:

error-state.png

success-state.png

---

## 🤝 Developed By

##  👤 ** Nazil Sheikh **
Candidate — Frugal Testing Software Engineer Role
📧 Email: Add your email if you want
🔗 GitHub: Add your GitHub profile link
🔗 LinkedIn: Add your LinkedIn link

---


## 📁 **Project Folder Structure**

```bash
frugal-registration-system/
│
├── frontend/                   # HTML, CSS, JS (Registration Form)
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── automation/                 # Selenium Automation Framework
│   ├── pom.xml
│   ├── testng.xml
│   ├── src/
│   │   └── test/
│   │       └── java/
│   │           └── frugal/
│   │               └── RegFormTest.java
│   └── screenshots/
│       ├── error-state.png
│       └── success-state.png
│
└── README.md                   # This file
