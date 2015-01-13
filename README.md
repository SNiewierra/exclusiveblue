Exclusiveblue - Bluemix Demo
============================

Welcome to the exclusiveblue-documentation.

[exclusiveblue] is a demo made with bluemix. It shows how node.js, cloudant and twilio works together,and how easy it is for beginners like me, to build such a demo without great knowledge in one of these areas. This explanation will cover what exclusivblue does and how it works for the user.

If you're not into bluemix yet, no problem, I was neither, here's a [link] for a good tutorial for beginners

![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/web.png)

###### What exclusiveblue does

![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/functionblue.png)
![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/web.png)


###### You need basic knowledge in this areas to understand my demo
  - HTML
  - CSS
  - Node.js
  
![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/web.png)

###### Overview
1. What is exclusiveblue
2. How it works for the User
    - 2.1 Userside (1)
    - 2.2 Administratorside
    - 2.3 Userside (2)
![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/web.png)
![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/web.png)
![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/web.png)

####1. What is exclusiveblue

Exclusivblue is an second authentification security system controled by SMS. 

Exclusiveblue is a simple web application, where the administrator can control, who can log in and who can't.
This might be usefull if you want to build a private site with photos were you can allow your friends to see them, or a textupload where only people you want, can see it.

![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/web.png)
![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/web.png)
![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/web.png)


####2. How it works for the User

![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/web.png)

#####2.1 Userside 
Register yourself with your name, mail and password. This will make a new database entry with four values (name, mail, password, random number and accepted). Accepted is the value needed to log in, default is no, the administrator has to change this value to yes.

![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/register.png)
![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/web.png)


The next site, which will pop up, is just a information for the user. You successfully made an entry to the database. Also there is a button, which leads the way back to the starterpage.

![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/registered.png)
![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/web.png)
![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/web.png)

#####2.2 Administratorside

The next step is only on administrator side. The administrator will get an SMS when a new user tries to sign up. The SMS will show the mail adress and the code to accept this user. 

![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/screen.png)
![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/web.png)


To accept a new User press the 'Accept new Member'-button

![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/accept.png)
![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/web.png)


You will be lead to this page, where the administrator can insert the name and the code he received per SMS.
If the administrator can't do this himself, because he is on vacation or something like that, he can just send the usermail and the code to a third, secure person, which can insert the code for him.

![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/apply.png)
![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/web.png)

####2.3 Userside 

Now the accepted value is set yes and the user can finally login.

![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/login.png)


He ends up on the "exclusive" page, if you want so see what the "exclusive" page is, register and hope that the administrator will accept you ;) .






[exclusiveblue]:https://silasnode.mybluemix.net
[link]:https://github.com/JDihlmann/moodlocator/
