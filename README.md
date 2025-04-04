# Interactive Bookstore Application

Build an application that allows users to browse and search for books, view book details, add books to a shopping cart, and place an order.

> Demo 
> Link :  https://chaithu-bookstore.netlify.app/

### Usage 

``` 
git clone <github repository link>  //to clone the github repository
npm install                         //to install all the dependencies required to run the application
npm start                           //to start the application
```  

## Development
## Tech Stack
**Frontend** - React JS (React Router, Redux or React Context API, CSS or CSS frameworks, Git, and GitHub for hosting the repository.)

## Functionality

| **Page**   | **Page Details**                                                                                              | **Navigation**  |
|:------|:-------------                                                                                             |:-----------| 
| Home   | Header - links for pages Home, Book List, Cart, Banner - Heading, description, and “Explore Books” Button |     -        |            
| Book List | Header - links for pages Home, Book List, Cart, Book Items - image, title, subtitle, price, Search (by title, author), Filter (by price)   | "Book List" link in Header, "Explore Books" Button, "Back" Button in Book Details Page |
| Book Details | Book detailed Information - image, title, subtitle, price, description, etc., "Add to cart" Button, "Back" button  | Each Book Item in Book List Page |
| Cart | Cart Items, "Remove" Button, Order Summary "Checkout" Button | "Cart" link in Header, "Back" Button in Checkout Page |
| Checkout | "Back" Button, Order Form (Personal Details - First Name, Last Name, Email, Mobile No., Order Summary, Place Order Button) | "Checkout" Button in Cart |

## Technical Details

| Page  |  Route	|  Path  |
|:--------|:----------|:--------|
| Home  |  Home	|  /     |
|Book List |	Book List |	/books |
|Book Details |	Book Details |	/books/:id |
|Cart	 | Cart	| /cart  |
| Checkout |	Checkout |	/checkout |
| Not Found	 | Not Found |	/not-found |


## Routes & Components

### Home

|**Component**    |	       **Details**	                               |  **State**	   |      **API (IT Bookstore)**  |
|:---------------:|:-----------------------------------------------------|:--------------:|:----------------------------:|
|  Home	         |  Heading, Description, and "ExploreBooks" button  	 |    -	         |              -               |
|  Header	      |  links for pages Home, Book List, Cart	             |    -           |	            -               |
 
### Book List 

| Component	| Details |	State | 	API (IT Bookstore) |
|:----------:|:-----------|:-----|:---------------:|
| BookList	|      |	apiStatus, booksData, priceRangeValue |	/new  |
| Header |	links for pages Home, Book List, Cart |	- |	- |
| SearchInput  |	Search (by title, author) |	searchInputValue  |	/search/{query} |
| PriceRange |	Filter (by price) |	- |	- |
| BookItem	| Book Items (title, subtitle, image, price) |	- |	-  |
| Loader |	 |	-	| - |
| ErrorMessage |		| -	|- |


### Book Details

| Component	 | Details |	State |	API (IT Bookstore) |
|:----------:|:---------|:-------|:------------------:|
| BookDetails |	Book detailed Information - image, title, subtitle, price, description, etc., “Add to cart” Button, “Back” button	| apiStatus, bookDetailsData |	/books/{isbn} |
| Header |	links for pages Home, Book List, Cart |	- |	-  |
| Loader |	 |	- |	- |
| ErrorMessage |	 |	- |	- |


### Cart

| Components |	Details	| State |	API (IT Bookstore) |
|:-----------:|:---------|:--------|:-----------:|
| Cart |	Cart Items, “Remove” Button, Order Summary, “Checkout” Button |	(Context Consumer) |	 - |
| Header |	links for pages Home, Book List, Cart |	-|	-|
|CartItem |	Book Detailed Info (image, title, subtitle, price, description)	| (Context Consumer) |	- |


### Checkout

| Components |	Details |	State	|API (IT Bookstore)|
|:----------:|:---------|:------|:-------------:|
| Checkout	|“Back” button	| (Context Consumer)	|-|
|UserDetailsForm |	Order Form - Personal Details - First Name, Last Name, Email, Mobile No. , Place Order Button, Order Summary |	userDetails, isFormSubmitted |	- |


### Not Found

| Components|	Details	|State	|API (IT Bookstore)|
|:---------:|:----------|:-------|:---------------|
| NotFound	|-|	-|	-|
| Header	| links for pages Home, Book List, Cart |	Header |	links for pages Home, Book List, Cart |


### App

| Component |	Details	|State	|API (IT Bookstore)|
|:--------:|:----------|:------|:----------:|
|App |	-|cartList (Context Provider), Context: cartList, addToCart, deleteFromCart|	- |


## Guidelines

* Followed Github Guidelines
  * Made the commits often and made sure the commit messages are concise and specific
  * Included a README file for explaining the project setup, usage instructions, and any additional information
* Followed Clean Code Guidelines
* The repo is well-organized and easy to navigate 
  * Followed the [create-react-app] folder structure
* The Application handled all the errors


## Resources
### Design files
**Pages**: Home, Book List, Book Details, Shopping Cart, Checkout

**Reference**: https://www.crossword.in/

## APIs

Books, Book Details, Search

**Reference**: https://api.itbook.store

## Third-party packages
* React Router (react-router-dom)
* Loader (react-loader-spinner)
* Icons (react-icons)
* Range Slider (rc-slider)

## Future Improvements
* Implement User Authentication