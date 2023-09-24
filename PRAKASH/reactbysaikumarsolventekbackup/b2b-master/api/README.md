## **US B2B NODE SERVER**

# Project Title

US B2B

---

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environment.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v16.14.0

    $ npm --version
    8.5.4

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

### NPM installation

After installing node, this project will need yarn too, so just run the following command.

      $ npm install

---

## Install

    $ git clone https://github.com/YOUR_USERNAME/PROJECT_TITLE
    $ cd PROJECT_TITLE
    $ npm install

## Running the project

    $ npm start

## Simple build for production

    $ npm build

## - **Introduction to the Node.js Client API**

The Node.js Client API enables you to create Node.js applications that can read, write, and query documents and semantic data in a Sequelize ORM with MySql database.

## - **Getting Started**

This section demonstrates loading documents into the database, querying the documents, updating a portion of a document, and reading documents from the database. The basic features demonstrated here have many more capabilities. The end of this section contains pointers to resources for exploring the Node.js Client API in more detail.

## - **Security Requirements**

This describes the basic security model used by the Node.js Client API, and some common situations in which you might need to change or extend it. The following topics are covered:

- Validate user input to limit SQL injections and XSS attacks.
- XSS attacks.
- Implement strong authentication.
- Avoid errors that reveal too much.
- Set up logging and monitoring.
- Avoid secrets in config files.
- Implement HTTP response headers.
- Don’t run Node.js as root.
- Protect and observe your Node.js apps in production.

## - **Basic Security Requirements**

The user you specify when creating a DatabaseClient object must have appropriate URI privileges for the content accessed by the operations performed, such as permission to read or update documents in the target database. The Node.js Client uses the MedexPharma REST Client API to communicate with US-B2B Server, so it uses the same security model. In addition to proper URI privileges, the user must have one of the pre-defined roles listed below, or the equivalent privileges. The capabilities of each role in the table is subsumed in the roles below it.

## **Role** | **Description**

Wholesale is a business in which goods are sold in large quantities to the retailers, industries and other businesses.
Retailer when the goods are sold to the final consumer in small lots, then this type of business is termed as retail.

## **Authentication and Connection Security**

This section provides an overview of how to configure authentication and JWT when creating a database client and establishing a connection to US-B2B.

Your client application is responsible for acquiring a JWT token. You can HTTP access to a US-B2B client application sends the to invoke Medex Pharma operations that are authorized for the user until the JWT token. The US-B2B.createDatabaseClient function uses the property values shown in the table below to authenticate using JWT.

## **Using JWT (JSON Web Token) Authentication**

In its compact form, JSON Web Tokens consist of three parts separated by dots (.),

- Header
- Payload
- Signature

Therefore, a JWT typically looks like the following.

Example : **xxxxx.yyyyy.zzzzz**

## POSTMAN URL

https://documenter.getpostman.com/view/23186825/2s847FtCuB
