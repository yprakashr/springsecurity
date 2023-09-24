**US B2B NODE SERVER**

**Contents**

- **Introduction to the Node.js Client API**

Getting Started

Required Software

Security Requirements

Installed NPM required Packages

Basic Security Requirements

- **Creating a Database Client**

Authentication and Connection Security

Using JWT (JSON Web Token) Authentication

Configuring Your App Server

Examples: Database Client Configuration

- **Folders and Project Structure**

Model-View-Controller(MVC) architecture for Node applications.

Project Structure Explanation

- **Technical Support-------------------------------------**

- **Introduction to the Node.js Client API**

The Node.js Client API enables you to create Node.js applications that can read, write, and query documents and semantic data in a Sequelize ORM with MySql database.

- **Getting Started**

This section demonstrates loading documents into the database, querying the documents, updating a portion of a document, and reading documents from the database. The basic features demonstrated here have many more capabilities. The end of this section contains pointers to resources for exploring the Node.js Client API in more detail.

- **Required Software**

- NodeJs
- MySql workbench
- Git Bash
- Microsoft Visual studio Code

- **Security Requirements**

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

- **Installed NPM required Packages**
- ` `Sendgrid/mail.
- ` `Axios,
- ` `Body-parser,
- ` `Bootstrap,
- ` `Bootstrap-Daterangepicker,
- ` `Concurrently,
- ` `Cookie-Parser,
- ` `Cors,
- ` `Csvtojson,
- ` `Dotenv,
- ` `Easyinvoice,
- ` `Express,
- ` `Express-Formidable,
- ` `Express-Session,
- ` `Fast-Csv,
- ` `Garbage-Collector,
- ` `Glamor,
- ` `Joi,
- ` `Jquery,
- ` `Json2csv,
- ` `Jsonwebtoken,
- ` `Malloc,
- ` `Moment,
- ` `Moment-Timezone,
- ` `Mysql2,
- ` `Node-downloader-helper,
- ` `Nodemon,
- ` `Passport,
- ` `Passport-local,
- ` `React,
- ` `React-bootstrap-daterangepicker,
- ` `React-dom,
- ` `React-icons,
- ` `React-paginate,
- ` `React-redux,
- ` `React-router-dom,
- ` `React-scripts,
- ` `React-toastify,
- ` `React-toggle,
- ` `Redux,
- ` `Sequelize,
- ` `Winston.

- **Basic Security Requirements**

The user you specify when creating a DatabaseClient object must have appropriate URI privileges for the content accessed by the operations performed, such as permission to read or update documents in the target database. The Node.js Client uses the MedexPharma REST Client API to communicate with US-B2B Server, so it uses the same security model. In addition to proper URI privileges, the user must have one of the pre-defined roles listed below, or the equivalent privileges. The capabilities of each role in the table is subsumed in the roles below it.

| **Role**   | **Description**                                                                                                       |
| ---------- | --------------------------------------------------------------------------------------------------------------------- |
| Wholesaler | Wholesale is a business in which goods are sold in large quantities to the retailers, industries and other businesses |
| Retailer   | When the goods are sold to the final consumer in small lots, then this type of business is termed as retail.          |

- **Creating a Database Client**

All the interactions of your application with Medex Pharma Server are through a US-B2B.DatabaseClient object. Each database client manages a connection by one user to a REST API instance and a particular database. Your application can create multiple database clients for connecting to different REST API instances, connecting to different databases, or connecting as different users.

To create a database client, call marklogic.createDatabaseClient with a parameter that describes the connection details. For example, the following code creates a database client attached to the REST API instance listening on the default host and port (localhost:8080), using the default database associated with the instance, and JWT authentication. The connection authenticates as user “root” with password “root”.

const Sequelize = require('sequelize');

const sequelize = new Sequelize(

` `dbConfig.db_name,

` `dbConfig.db_user_name,

` `dbConfig.db_password,

` `config

| **Property Name** |                    **DefaultValue**                    |                                                                                **Description**                                                                                |
| :---------------: | :----------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|       host        |                       localhost                        |                                                           A US-B2B Server host with a configured REST API instance.                                                           |
|       port        |                          8080                          |                                                               The port on which the REST API instance listens.                                                                |
|     database      | the default database associated with the REST instance | The database against which document operations and queries are performed. Specifying a database other than the REST API instance default requires the xdmp-eval-in privilege. |

- **Authentication and Connection Security**

This section provides an overview of how to configure authentication and JWT when creating a database client and establishing a connection to US-B2B.

Your client application is responsible for acquiring a JWT token. You can HTTP access to a US-B2B client application sends the to invoke Medex Pharma operations that are authorized for the user until the JWT token. The US-B2B.createDatabaseClient function uses the property values shown in the table below to authenticate using JWT.

| **Property Name** |                                       **DefaultValue**                                        |
| :---------------: | :-------------------------------------------------------------------------------------------: |
|     authType      |                          Specify the JWt as the authentication type.                          |
|       token       | The JWT assertions token to make requests to US-B2B. This is required if the authType is JWt. |

const config = {

` `host: dbConfig.db_host,

` `port: dbConfig.db_port,

` `dialect: dbConfig.db_dialect || 'postgres',

` `operatorsAliases: 0,

` `define: {

` `freezeTableName: false,

` `underscored: true,

` `undesrcoredAll: true,

` `timestamps: true,

` `},

` `pool: {

` `max: dbConfig.db_pool.max,

` `min: dbConfig.db_pool.min,

` `acquire: dbConfig.db_pool.acquire,

` `idle: dbConfig.db_pool.idle,

` `},

` `logging: function (str) {

` `// console.log(str);

` `},

};

- **Using JWT (JSON Web Token) Authentication**

JSON Web Token (JWT) is an open standard ([RFC 7519](https://tools.ietf.org/html/rfc7519)) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the **HMAC** algorithm) or a public/private key pair using **RSA** or **ECDSA**.

**Authorization**: This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.

In its compact form, JSON Web Tokens consist of three parts separated by dots (.),

- Header
- Payload
- Signature

Therefore, a JWT typically looks like the following.

Example : **xxxxx.yyyyy.zzzzz**

Let's break down the different parts.

### **Header**

The header *typically* consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as HMAC SHA256 or RSA.

For example:

{

` `"alg": "HS256",

` `"typ": "JWT"

}

Then, this JSON is **Base64Url** encoded to form the first part of the JWT.

### **Payload**

The second part of the token is the payload, which contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: *registered*, *public*, and *private* claims.

{

` `"sub": "1234567890",

` `"name": "John Doe",

` `"admin": true

}

### **Signature**

To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.

For example if you want to use the HMAC SHA256 algorithm, the signature will be created in the following way:

HMACSHA256(

` `base64UrlEncode(header) + "." +

` `base64UrlEncode(payload),

` `secret)

### **Putting all together**

The output is three Base64-URL strings separated by dots that can be easily passed in HTML and HTTP environments, while being more compact when compared to XML-based standards such as SAML. The following shows a JWT that has the previous header and payload encoded, and it is signed with a secret.

- **Folders and Project Structure**

**Model-View-Controller(MVC)** architecture for Node applications.

` `MVC is simply a design or architectural pattern used in software engineering. While this isn’t a hard rule, but this pattern helps developers focus on a particular aspect of their application, one step at a time.

![](Aspose.Words.f467919a-b20f-4bbf-90f7-0df706a8a5fa.001.png)

### **Model**

As the name implies, a model is a design or structure. In the case of MVC, the model determines how a database is structured, defining a section of the application that interacts with the database. This is where we will define the properties of a user that will be store in our database. The controller accesses the database through the model. You could say that the model is the heart of the application.

### **View**

The view is where end users interact within the application. Simply put, this is where all the HTML template files go.

### **Controller**

The controller interacts with the model and serves the response and functionality to the view. When an end user makes a request, it’s sent to the controller which interacts with the database.

- **Technical Support** 29

0 Medex Pharma provides technical support according to the terms detailed in your Software License Agreement or End User License Agreement. We invite you to visit our support website at http://help.medexpharma.com to access information on known and fixed issues, knowledge base articles, and more. For licensed customers with an active maintenance contract, see the Support Handbook for instructions on registering support contacts and on working with the Medex Pharma Technical Support team. Complete product documentation, the latest product release downloads, and other useful information is available for all developers at http://developer. medexpharma.com.
