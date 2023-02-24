# Introduction

Weight loss project app I am building to keep track of current weight, initial weight when signing up, and how long until goal weight. 


# Packages/Dependencies used

bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator

# Install all above dependencies and packages via terminal

`npm install`


# Progress so far starting at 2/15/2023

2/15/2023: Created login/sign up page and added authenticator using passport-local.  
2/18/2023: - Created ensureGuest middleware to redirect logged in users to main page.   
           - Added login view and routes  
           - Added logout function  
2/23/2023: Created profile submission and model  

# Next objective to do

Add ensureAuth middleware to handle requests when not authenticated  
Add function so each profile is unique to that user