# SkillsMeterified ~ Test Your Skills In RealTime

  Live at  https://skillsmeterified-by-vmr.herokuapp.com

## Description
A Multiple choice test taking system in which tests are tracked live and analytics are generated based on That.

###Admin Account Requirements
    ```
        Only user email required to be as "vmreddyvmb@gmail.com"
    ```
## Features

```
    1). Single Page Application.
    2). Rest APIs.
    3). Separate Backend & Frontend with clean UI.
  	4). Login / Logout feature.
  	5). JWT Authentication and Signup Using Facebook and Google.
  	6). SEO Optimised.
  	7). clean ui and ux.
    8). User Management System -
            a) User can sign up using Email, Gmail and Facebook.
            b) User can login to the system through email and password combination or using Gmail/Facebook
            c) Forgot password functionality to reset password.
    9). User Testing management system -
            a) Once the user logs into the system, He will  see a dashboard containing the statistics of all tests he has taken. The statistics may include the number of tests taken, average score and percentage growth etc.
            b) Dashboard also contains the lists of tests.
            c) There is a “take a test” option in menu from which user can go to test taking page.
            d) On test taking page, user can see a list of tests he can appear for along with a button to start that test.

   10).  User test taking system -
              a) Once user starts the test, he should first see an instructions screen containing. It  also contains the rules of the test.
              b) Once the user reads the instructions and accepts the rules (single accept button), The test timer will start and the screen should display the test questions and options associated with it.
              c) User can choose only one option as answer for every question.
              d) The test  have a time limit. The test window will automatically close once the timeout occurs irrespective of how many questions have been answered. The system  submits the answers automatically.
              e) If the user completes the test before the time ends, he can see submit window which will submit his all answers. In case of timeouts, this window appear automatically.
              f) The system  keeps a track of how much time a user is taking for answering each question.
              g) On submission of test, shows the result to User.

    11).Test listing Admin -
            a) Admin can create tests in the system
            b) Each test will have a set of questions, each question containing at least 4 options and overall time limit of the test.
            c) Admin can  create, edit, delete and view any tests, question or option.
            d) While creating options for any question, admin can  set a correct answer. This answer (flag) will actually help in automating the test evaluation process.

    12).User analytics in admin
          a) Admin can view details of users registered in the system
          b) Admin can view overall performance of the user in all his tests.

 ```

## Prerequisites

Git

NodeJs

NPM

MongoDB

## Running

(Note: these instructions are for Ubuntu Linux based OS. Assuming nodejs, npm and mongodb is already installed).

  running mongodb:
```
    1). Open Terminal and change directory to where mongodb is installed in bin folder.
    2). user@linux: ~/path/to/mongodb/bin $ ./mongod
    3). press enter database server will start.
```
  unzipping and installing dependencies:
```
    1). Unzip the downloaded file.
    2). Open the extracted folder.
    3). Right click somewhere in folder and select Open in Terminal.
    4). Type Command : npm install and press enter. This will install all dependencies shown in package.json file.
```
  running project:
```
    Install all dependencies by : npm install and run node server.js


```
## Built With

OS : Linux Mint

API Tool : Postman

Editor : Atom.

Frontend Technologies allowed - HTML 5, CSS, Javascript , Jquery and AngularJS


Backend Technologies allowed - NodeJs, ExpressJS, MongoDB

## Version

This is first version v1.

## My other Projects & My portfolio
[Visit My GitHub Account](https://github.com/vithalreddy "My GitHub Account")

[Ticket Based Support system using MEAN Stack as Single Page Application using NodeJS Backend](https://github.com/vithalreddy/helloDesk "Ticket Based Support system using MEAN Stack as Single Page Application using NodeJS Backend")

[Socket.Io Reatltime Chat App | A MEAN stack based Real Time chat application](https://github.com/vithalreddy/nodeJS-socketIO-chat-app "Socket.Io Reatltime Chat App | A MEAN stack based Real Time chat application")

[MEAN SHOP | A MEAN stack based Ecommerce backend and Frontend Project](https://github.com/vithalreddy/mean-shop-with-rest-api "MEAN SHOP | A MEAN stack based Ecommerce backend and Frontend Project")


[English Premier League Club Matches AngularJS SPA App](https://vithalreddy.github.io/angularjs-epl-footaball-spa-app/#/ "English Premier League Club Matches AngularJS SPA App")

[Game Of Thrones - All the data from the universe of Ice And Fire you've ever wanted. | An AngularJS SPA APP](https://vithalreddy.github.io/angularjs-game-of-thrones-anapioficeandfire-spa-app/# "Game Of Thrones - All the data from the universe of Ice And Fire you've ever wanted. | An AngularJS SPA APP")


## Contributors

[Vithalreddy](https://github.com/vithalreddy "My GitHub Account") - [Visit My Blog](https://vmrworld.com "VMR World")


### Configuration
- **Platform:** node
- **Framework**: expressjs
- **CSS Framework**: bootstrap
- **CSS Preprocessor**: css
- **JavaScript Framework**: angularjs
- **Database**: mongodb
- **Authentication**: email,facebook,google,twitter,github

### License
The MIT License (MIT)

Copyright (c) 2017 VithalReddy
