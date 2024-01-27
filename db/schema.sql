-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

USE ecommerce_db;

CREATE TABLE Category (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, -- prevents id number being negative and will inc each new row 
    category_name VARCHAR(30) NOT NULL
    );

CREATE TABLE Product (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(30) NOT NULL,
    price DEC(10,2) UNSIGNED NOT NULL VALIDATE,
    stock INT UNSIGNED NOT NULL VALIDATE,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES Category(id) ON DELETE SET NULL 
);

CREATE TABLE Tag (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  tag_name INT VARCHAR (30),
  FOREIGN KEY (tag_name) REFERENCES Tag(id) ON DELETE SET NULL
);

CREATE TABLE ProductTag (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  product_id INT
    FOREIGN KEY (product_id) REFERENCES Product(id),
  tag_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (tag_id) REFERENCES tag(id) ON DELETE SET NULL
);