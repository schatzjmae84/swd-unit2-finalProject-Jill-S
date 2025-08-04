# 🐾 The Doggy Destination App

![thanh-hien-pAfsKqhUTTc-unsplash](https://github.com/user-attachments/assets/f5c79173-658b-4f20-9a4b-0ff63a3f0569)


## 💻 Technologies used to make this app possible!

    - React/Vite interactive, single-page application
    - Java/SpringBoot back end
    - MySQL Workbench
    - Postman for testing back end endpoints
    - Languages included are: JavaScript, HTML, CSS, and Java

## 🐩 Project Overview

Are you new to the city of St. Louis?  Do you have a pup that you are wanting to take out exploring with you?  Well, you have come to the right place!  The Doggy Destination App is geared towards dog owners in the city that are looking for some "pup places" where they can be with their pup, still have fun, and maybe meet some other dog owners in the area.  The user can choose from three different activity categories:  Outdoor Activities, Social Settings, and Pup Events in the area.  Once they have decided on an activity, then they can choose from a list of destinations in order to find the new pup place they are searching for!  There is also a reviews page for them to check out so they can read about other's experiences, and see if they are interested in checking out that destination.  I thought of creating this app because I am a dog Mom myself, and was curious about places I could take my pup in the city.  St. Louis is a very dog friendly area, and I wanted others to get to see what is out there for both human and pups to enjoy together. 😊   

## ✍️ Authors

I am Jill Schatz, and I am a new software developer that is about to finish up a crazy fun cohort with LaunchCode.  This is my final project, and it was so much fun to create and to get to expand on the knowledge of what we learned during our class.  I am excited to continue to learn, and put more fun and helpful apps like this out in the world! 🌸 

## 💾 Creating Your Database

[Doggy Destination Wireframes](https://docs.google.com/document/d/1sjiZG3BgGeDK5sqioRPGQb_NmAE1f-xQB7uQicaWLBE/edit?tab=t.0)

[Doggy Destination ER Diagram](https://docs.google.com/document/d/16KEtVQEYTNOXMILW2uOPjyhtkiBzg8CHUkSMwZYupSQ/edit?tab=t.0)

- I used MySQL Workbench to create my database. I have included my ERD so you can see the layout of all of the tables that need to be created in order for this app to function.
- Once you have entered your password, and are in MySQL, create a new schema and name it something "pup-like."🐶
- Now all you have to do is run the Java program in IntelliJ and let hibernate do its magic to create your tables for you!
- The form table and the destination_review table are both populated by users through the app, however, you will need to populate the destination and address tables with the "Doggy Destinations" that are in your area that you would like to feature in your version of the app!!

## ⬇️ Installation

- Fork the swd-unit2-finalProject-Jill-S repo and clone it to your local machine.  There are two folders within this repo, one for the front-end and one for the back-end.
- I created the front-end of this project using React/Vite in VSCode.  Change directories until you are in the front-end-react folder, and in the doggy-destination-app folder, then open in VSCode.
- Once the project is open in VSCode, be sure you are in the doggy-destination-app folder, and in your terminal, run `npm install` in order to make sure all of the dependencies for this project are available locally.
- Check your package.json file to be sure all of the necessary dependencies are there, then finally run `npm run dev` and you should see the localhost where the app is now available for viewing!  
- I created the back-end of this project in IntelliJ.  Create a new Maven project in IntelliJ, and then open your repo by following these steps:
  - Click on the hamburger menu, hover over VCS, and click on `Enable Version Control Integration`.
  - Click on the hamburger menu again, hover over GIT, and click on `Manage Remote`.
  - Add the URL of your cloned repo, and you will be good to go!
- Make sure you are in the back-end-springBoot and pup-places folders.  You will need to go into the `application.properties` file and update the password to match your database password.
  - Click on the `Unit2-final-project` at the top of the page and navigate to `Edit Configurations...`.
  - Under the `Application` heading, you will need to update the Environmental variables to match your database password using this format DB_PASSWORD=YourPassword.
- Click the ▶️ at the top of the page and run the program!  You should be able to enter in endpoints for the controllers now at localhost:8080.  

## 💭 Feedback and Contributing

Add a link to the Discussions tab in your repo and invite users to open issues for bugs/feature requests.

This is also a great place to invite others to contribute in any ways that make sense for your project. Point people to your DEVELOPMENT and/or CONTRIBUTING guides if you have them.
