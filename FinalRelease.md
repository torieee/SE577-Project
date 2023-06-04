# Final Project Release

## How to Run
### Vue SPA
Inside the basic-project directory:
1. Run `yarn`
2. Run `yarn dev`

The Vue SPA will run on a localhost port (exact address not specified until the application is run).

### Server
Inside the server directory:
1. Run `yarn`
2. Run `yarn run server`

The Server will run on `localhost:9500`.

## About the Structure of the Application
### Vue Project 
#### Pages
The Vue Project is structured as a SPA with 4 tabs: Home, About Me, Internal Database, and GitHub API.
The Home page welcomes the user and shows a GitHub gist which the user can like or dislike. The About Me page gives information about me with a photo gallery. Internal Database and GitHub API integrate with the server portion of the application. Internal Database displays the items in the mock database inside the server using the API interface. GitHub API uses the server (via a web proxy that contains the access token) to access the GitHub API. All of my GitHub repositories are displayed with their descriptions. The user can hover over a repository to see more information, including the README of the repository. 

#### API
The API included in the Pages directory maps interfaces for the hard-coded database and GitHub API integration. I chose several keywords from the GitHub API to use in the interface, and all public repositories are pulled from the API and displayed on the page. The GitHub API interface includes a readMe identifier that is not included in the GitHub API. This identifier is mapped to data after the application accesses data from the GitHub API and the repo name is known.

### Server
The server runs on the port `localhost:9500`. When the server is run with the Vue Project, data from the database and from the GitHub API is rendered in the browser. The GitHub API is accessed via a proxy which uses a GitHub access token placed in a .env file. `localhost:9500` may also be run in the browser. `localhost:9500/repos` will display the array of MockData from the database. `localhost:9500/repos/{ repo name }` will show the data for an individual element of the array, if it exists. An error message will be displayed if the repo does not exist in the array.

## Architecture Description


### Architecture Diagrams
Please navigate to the `diagrams` directory in the root of the project to view C4 diagrams and a sequence diagram of the application (note: I got a 10 on the diagrams from the previous submission so I did not change anything on them. I didn't change anything architecturally significant in the clean up of the project from the last submission, so the diagrams should still reflect the project).

### Architecture Decisions

The architecture of this application is modeled after a basic single page application architecture using the Vue.js framework. I chose the Vue framework because I had no experience with a web framework prior to this course, and Vue was taught in class. In SPAs, everything is a web component, so each of the Pages (Home, About Me, Internal Database, and GitHub API) access components within the SPA that assist with data access and rendering. The API Interfaces Vue component is responsible for accessing and filtering data from the GitHub API and internal database. I chose to use a Typescript server after developing and testing a Java server using the Spring framework, because it promoted continuity with the use of Typescript and it was much simpler while accomplishing the same objectives. 

### Description of Quality Attributes

Usability: I chose a simple, modern, and clean user interface with minimal color so that the user can focus on the content of the SPA instead of the design. Each component of the application has its own tab and is easily navigatable.

Reliability: When the SPA and server are run together, the application produces the expected data and functionality. 

Scalability: As more repositories are added to my GitHub account, those repositories will be displayed on the GitHub API tab of the SPA without any additional code. If more functionality from the GitHub API is required, the GitHub API interface can be easily modified.

Suitability: The purpose of this application is to use effective software architecture practices to display data from an internal database and the GitHub API. The application accomplishes these objectives.

Security: By using a proxy to access the GitHub API via a hidden personal access token, the application securely achieves the objective of only allowing authorized users to access GitHub API data.

