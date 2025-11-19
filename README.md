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

## 📸 Screenshots

❌ Negative Test

automation/screenshots/error-state.png

Shows inline validation error when submitting invalid input.

✔️ Positive Test

automation/screenshots/success-state.png

Shows success alert after successful form submission.

## 🤝 Developed By

##  👤 ** Nazil Sheikh **
Candidate — Frugal Testing Software Engineer Role
📧 Email: Add your email if you want
🔗 GitHub: Add your GitHub profile link
🔗 LinkedIn: Add your LinkedIn link



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
