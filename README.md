[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/p7tyAGeS)
![BrightCoders Logo](img/logo.png)


> [Ver instrucciones antes de iniciar](./instructions/instructions.md)

This README would normally document whatever steps are necessary to get the application up and running.

Things you may want to cover:

# Table of content:

- [Project "Renta fácil Colima"](#proyecto-renta-fácil-colima)
- [Description](#project-description)
- How to Install and Run the Project.
- How to Use the Project.
- Credits
- Badges

# Project: Renta fácil Colima
## Project description

"Renta fácil Colima" aims make easier rent a house, by providing an efficient and user-friendly mobile app platform for connecting renters and landlords. With its comprehensive property listings, advanced search features, it will simplify the rental process, making it easier for people to find their ideal home and for landlords to find reliable tenants. Embracing modern technology and fostering a transparent rental ecosystem, "Renta fácil Colima" will be the go-to platform for all rental property needs in Colima.

### Objective

The main objective of "Renta Facil Colima" is to create a user-friendly and efficient online platform that simplifies the process of renting houses in the state of Colima, Mexico. The project aims to provide a seamless connection between landlords and potential renters, facilitating the communication and transaction process for both parties involved.

### MVP Scope

the MVP will focus on developing the core functionalities for two types of users: renters and property owners (landlords).

* Renter User (Seeking Rental Properties):
    * View a List of Rental Properties: Renters can access a comprehensive list of available rental properties in the state of Colima.
    * Property Details: Renters can view detailed information about a selected property, including images, descriptions, amenities, location, and rental terms.
    * Advanced Search and Filtering: The application will allow renters to perform searches and apply filters to find properties that match their preferences.

* Property Owner (Landlord) User:
    * Property Listing: Property owners can create and publish listings for their rental properties. They will input property details, upload images, set rental terms, and specify contact information.
    * Manage Listings: Property owners can edit, update, or remove their property listings as needed.

## Project requeriments

### Functional requirements

#### General user requirements
* User registration: A user can create an account using their email through a registration form or by using a Google account.
* User can select the type of user: Once a user has created an account, they will be asked to choose what kind of user they want to be, either a landlord or renter.
* User login: Any user who has created an account before can use the same authentication method used during registration to log into the application.
* Edit extra information: Once user have created an account, they need to provide additional information to activate their account.

#### Renters requirements
* Visualize houses list: The home page of the application for renters will display all the available houses for rent (using pagination).
* Advanced search and filtering: Renters can use a quick search or apply filters to find a house that meets their requirements.
* View house details: Renters can select a house to view its details.
* Likes section: Users can "like" a house, and it will be saved in a separate section for easy access in the future.
* Comments/reviews on houses: Renters can add comments or reviews to houses.
* Landlord rating: Renters who have rented a house from a specific landlord can evaluate them after a month, helping other renters know about the landlord's reputation.
* Pay house rent: Renters can use an implemented payment gateway to pay their rent to the landlord.
* View landlords' profiles: Renters can access landlords' profiles to see their houses and reviews.
#### Landlords requirements
* Publish houses: Landlords can list their houses for rent along with the relevant information and the rental price.
* Renters rating: Landlords can evaluate renters who are currently or have previously rented their houses for a minimum of 1 month.
* Houses rating: Landlords can see how many views their houses have received, giving them an idea of their popularity.
* Edit house data and status: Landlords can modify the information of their houses, as well as change the status to indicate whether they are "for rent," "rented," or "hidden."
* View renters' profiles: Landlords can access renters' profiles to read reviews provided by other landlords.

#### Houses requirements
* Houses can be shared: Each house should have a share button that allows users to share them via a link.
* House details can be viewed: Users can access and view the details of each house.
* Houses should be visible based on their status: The visibility of houses should be determined by their status (e.g., "for rent," "rented," or "hidden").
* Houses can have comments/reviews: Users can leave comments or reviews for each house.
* Houses can be liked: Users have the option to "like" houses to show their interest or save them for future reference.

### No functional requirements

* Performance: The application should respond quickly to user interactions and have minimal loading times for various functionalities.
* Reliability: The application must be reliable and available for use whenever users need it, with minimal downtime.
* Security: The app should implement strong security measures to protect user data, prevent unauthorized access, and ensure data privacy.
* Usability: The user interface should be intuitive, easy to navigate, and provide a seamless user experience.
* Accessibility: The app should be designed to cater to users with disabilities, adhering to accessibility standards.
* Aesthetic Design: The mobile application's user interface should be visually appealing, featuring modern and aesthetically pleasing design elements, color schemes, and typography to enhance user engagement and overall user experience.
* Code quality: 
    * The code must follow an object-oriented structure, adhering to best programming practices.
Methods and functions should be small in size and follow the principles of single responsibility.
    * Comprehensive unit tests must be included to ensure code quality and minimize errors.
The SOLID principles (Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) must be applied to ensure a modular, flexible, and easy-to-maintain codebase.
* System platform: The application must be compatible with the Android operating system.
