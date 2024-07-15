# Getting Started with Bookshelf-Frontend

## Project Overview

This is Fullstack Project for Returnship Program of Pluralsight.

This is the front-end of full-stack application that allows bookstore employees to internally manage the books carried by a small bookstore.  
The backend is @ https://github.com/Bhawna-Bhatt/Bookshelf-Backend.git in this same account.
This repository is for front-end application that allows users to make queries about books that are carried, as well as add/delete/edit data.
NOTE: This application will NOT include any ability to purchase books.

## Steps

- Install Git
- Install Node.js
- Clone this repository
- Navigate to the Project Directory
- Install depenedencies using **npm install**
- Start the development server using **npm start**
- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
- Remember -- The backend should also be running on port 4000

## Tech Stack

- HTML5 / CSS
- Javascript
- Create React App Express/React-Bootstrap
- ORM - Sequelize
- Express

## how to create the database and inserting sample data

- The database has been made with Sequelize ORM and sample data was inserted using BulkCreate method of the same.

## list of endpoints are as follows

Books:
- GET /books : Retrieve a list of all books
- GET /books/{book_id} : Retrieve details of a specific book
- POST /books : Add a new book
- PUT /books/{book_id} : Update details of an existing book
- DELETE /books/{book_id} : Delete a specific book
Authors:
- GET /authors : Retrieve a list of all authors
- GET /authors/{author_id} : Retrieve details of a specific author
- POST /authors : Add a new author
- PUT /authors/{author_id} : Update details of an existing author
- DELETE /authors/{author_id} : Delete a specific author
Genres:
- GET /genres : Retrieve a list of all genres
- GET /genres/{genre_id} : Retrieve details of a specific genre
- POST /genres : Add a new genre

## source code for the REST API

- is available at backend repository https://github.com/Bhawna-Bhatt/Bookshelf-Backend.git

Screenshots of the Application

# Login Page

![login](https://github.com/user-attachments/assets/324ae4a2-4e37-4151-ab18-4fb3abd86543)



#Homepage

![homepage](https://github.com/user-attachments/assets/7e092cc3-8175-43ef-9435-1fc71e041f5f)


# Book List

![booklist](https://github.com/user-attachments/assets/486cd892-972d-4c90-be2a-9b35cc200715)


# Book Detail

![bookdetail](https://github.com/user-attachments/assets/55dbd682-ddad-4b6a-8cb8-178bf2072586)

# Add Book

![addbook](https://github.com/user-attachments/assets/e3f9ea2e-6be3-4b51-b9fc-90b3f66ebaba)


# Author List

![authorlist](https://github.com/user-attachments/assets/bd16eb67-df2c-4d21-9cb3-ab03117e4875)

# Author Detail

![authordetail](https://github.com/user-attachments/assets/2210521e-6c55-4271-95d9-8fd67489c6ca)
# Add Author

![addauthor](https://github.com/user-attachments/assets/054c799e-6d84-41e4-96b6-ce2a4bcfc392)
