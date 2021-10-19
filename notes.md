*npm* - Node Package Manager manages the packages that are local dependencies of a particular project

*npm start* - This command looks into the root directory of our project, and looks for the scripts object. If it finds the scripts object, it will look for the matching keyword (in this case, it is "start") then runs the following command script.

*npm dev* - Indicates that we are running our project in development mode and that we are using 'nodemon' to do that. Nodemond allows us to make changes to our server without having to restart it manually every time we make a change.

node_modules - Packages that npm installs that allow our application and all of its dependencies to run properly

package-lock.json - Simply locks in the version of the packages that we are using in a specific project. We get this file so that anyone who clones our project and tries to run it will have the exact same versions of the packages we use. 

MVC - Model View Controller

Express - A framework used to help us organize our server into MVC architecture

ORM - Object Relational Mapper. A code library that automates the transfer of data in a database, into objects that are more commonly used in applications (like JSON).

Sequelize - A JS library that we will use to manage our postgreSQL databases.

Models - How we shaped the data that we will be sending to our databases

Pg - A package that allows us to write in the dialect that sequelize needs to speak to our PostgreSQL database

pg-hstore - A package that allows us to access more advanced and complex pieces of code regarding PostgreSQL

pgAdmin - is a GUI (Graphic User Interface, pretty much a front-end client) that allows us to visualize our PostgreSQL database. pgAdmin is one of many GUIs that interface with PostgreSQL.

pgAdmin and PostgreSQL are not the same thing. PostgreSQL is a database engine implementing SQL standards.

pgAdmin is a sort of client. You are able to manipulate schema and data on an instance or multiple instances of PostgreSQL engines.

bscypt - used to encrypt sensitive data such as user passwords

jwt - used to create sessions