jwtSample with codeigniter
=========
Using a template from the helper jwt functions in angular-codeigniter-seed project. 

Modified the how the token is saved, send and shared.

Create database called crud in ur local machine. 
Change  the username and password to your database environment. Also create a new table called accounts. 
The account should have three columns called id (data type as int(10)),email (data type as varchar) and password (data type as charset(64). 


uses the helper jwt functions created in angular-codeigniter-seed project.

Stores the Jwt token in local storage. removed the token from local storage on the logout functionality.

Stuff need to be done:
Protect the resource when token is found. Restrict the resource when token is not found.
