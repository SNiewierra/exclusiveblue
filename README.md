Exclusiveblue - Bluemix Demo
============================

Welcome to the exclusiveblue-documentation.

[exclusiveblue] is a demo made with bluemix. It shows how node.js, cloudant and twilio works together,and how easy it is for beginners like me, to build such a demo without great knowledge in one of these areas. This explanation will cover what exclusivblue does and how it works for the user.

If you're not into bluemix yet, no problem, I was neither, here's a [link] for a good tutorial for beginners

![alt tag](https://raw.githubusercontent.com/JDihlmann/Tmoodlocator/master/imageFiles/web.png)

###### What exclusiveblue does

![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/functionblue.png)
![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/web.png)


###### You need basic knowledge in this areas to understand my demo
  - HTML
  - CSS
  - Node.js

![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/web.png)
![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/web.png)


#####1. What is exclusiveblue

Exclusivblue is what iCloud should do, an security sytem controled by SMS. 

Exclusiveblue is a simple web application, where the administrator can control, who can log in and who can't.
This might be usefull if you want to build a private site with photos were you can allow your friends to see them, or a textupload where only people you want can see it.

![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/web.png)
![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/web.png)



####2. How it works for the User

Register yourself with your name, mail and password. This will make a new database entry with four values (name, mail, password, random number and accepted). Accepted is the value needed to log in, default is no, the administrator has to change this value to yes.

![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/register.png)
![alt tag](https://raw.githubusercontent.com/JDihlmann/Tmoodlocator/master/imageFiles/return0.png)


The next site, which will pop up, is just a information for the user. You successfully made an entry to the database. Also there is a button, which leads the way back to the startepage.

![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/registered.png)
![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/web.png)


The next step is only on administrator side. The administrator will get an SMS when a new user tries to sign up. The SMS will show the mail adress and the random number. 

![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/screen.png)


The administrator revieces an SMS with the mail from the new User and the code to accept him

![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/web.png)


To accept a new User

![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/accept.png)


To accept a new User, press the 'Accept new Member'-button 

![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/web.png)


The administrator inserts the name and the code he received per SMS

![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/apply.png)
![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/web.png)


Now the new User is accepted and can login

![alt tag](https://raw.githubusercontent.com/SNiewierra/exclusiveblue/master/imageFiles/login.png)


End ends up on the "exclusive" page






[exclusiveblue]:https://silasnode.mybluemix.net
[link]:https://github.com/JDihlmann/moodlocator/
