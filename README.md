MEAN + Friends
===============

## Frameworks used ##
* MongoDb (ORM DataBase -> JavaScript based)
* Express (Web Application Framework for Node.js)
* AngularJS (Modular binding framework for realtime data updates and service calls)
* Node.js (JavaScript backend server)

### Friends Include ###
* Mongoose (wrapper for mongoDb)
* jQuery JS Framework
* Jade (Templating Framework)
* Connect (Server : DELETE and PUT method Overrides)
* BootStrap (CSS Framework)

## HOSTING (FREE!!) ##
* Heroku (git based hosting service)

> You can create a free account. Heroku allows you to upload your github data to their servers and run many types of apps. Worth looking into.
> This boilerplate code is made to run on Heroku by using the Procfile.

***

SETUP ENVIRONMENT
============
>NOTE - There are installers for windows and other platforms instead of using the command line
>The instructions are for a Mac or Linux
>1. Install Node.js
>> Note :
>> * Node needs a couple things in order to run. Python and a C compiler. Using APT for this example (in the terminal type (if you have apt))

	$ sudo apt-get install python-software-properties python g++ make
	
>>Install Node.js. This is recommended by Node.js Developers (if you dont have apt you can search Nodejs's website for an installer for your platform)

	$ sudo add-apt-repository pp:chris-lea/node.js
	$ sudo apt-get update
	$ sudo apt-get intall nodejs

>>If everything went well then you can check your node version in your terminal by typing in

	$ node --version
	
>>After you type that in you should get your version of Node.js. 

>2. Install NPM - but first check to see if NPM is installed

	$ npm --version
	
>>If not then install it

	$ sudo apt-get install npm
	
>3. Install MongoDB

	$ sudo apt-get install mongodb
	
>>* I like to open my profile and include a short cut to start the mongodb server. Here is how to do it.

	$ open ~/.profile
	
>>>Now the file should be open.
>>>* Add /PATH/TO/mongodb/bin in your PATH
>>>* Add

	alias mongostart='sudo /PATH/TO/mongodb/bin/mongod'
	
>>>* Now close the terminal and start a new fresh window
>>>* type in

	$ mongostart
	
>>>* You should see your mongoDB start up. You can also include the path to the mongo executable to have quick access to the MongoDB shell. But I dont use it that much so I left it out.
>3. Install Express.js

	$ sudo npm install -g express
	
>>-g flag there in command line installs express globally, meaning that we can use it wherever we want.
>4. Install mongoose
>>* mongoose, express and jade are all dependencies and dependencies are loaded in node.js's package.json file.
>>* To install those you will need to run 

	$ npm install 
	
>>Run this after you have all the files cloned from this repo

GETTING STARTED
===============

>1. open terminal
>2. cd into your folder where you want to create your application
>3. mkdir mean-boilerplate
>   - You can call it something else if you like
>4. git init
>   - This initializes your repository
>5. git remote add stack https://github.com/&lt;yourname&gt;/&lt;your repo&gt;
>   - Example Mine is https://github.com/slysop/mean-boilerplate
>6. Clone my repository from github to your folder
>   - URL : http://github.com/slysop/mean-boilerplate
>7. Once you have the code on your local machine and everything is installed open you terminal if it is not already open and type

	$ mongostart
	
>>This starts your mongoDb server if you setup the alias

	$ node app
	
>>This starts your app on localhost:3000
