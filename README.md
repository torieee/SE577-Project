
# Project Release 4
C4 diagrams and a UML sequence diagram can be found under the `diagrams` directory.


# Project Release 3

## Initial Notes
Dr. Mitchell, we spoke on Monday regarding the issues I had with my repository. You asked me to remind you to re-pull the code when you take a look at this because the branches weren't set up properly. I tested this by cloning the repository, then `git checkout proj-3-release`, which pulled this branch into the local directory. It seemed to work properly this way.

## About the Structure of the Application
### Vue Project 
#### Pages
The Vue Project is structured as a SPA with 4 tabs: Home, About Me, Class Projects, and Passion Projects.
The Home page only shows a mockup and will be fleshed out later. The About Me page gives information about me with a photo gallery. Class Projects and Passion Projects integrate with the server portion of the application. Both of these pages pull data from the database from the previous submission. Database items are flagged and configured to appear on either the Class Projects or Passion Projects pages, depending on their category. The Passion Projects page integrates with the GitHub API and proxy portion of the server under the header "FROM GITHUB API".

#### API
The API included in the Pages directory maps interfaces for the hard-coded database and for the GitHub API integration. I chose several keywords from the GitHub API to use in the interface, and all public repositories are pulled from the API and displayed on the page

### Server
The server runs on the port localhost:9500. When the server is run with the Vue Project, data from the database and from the GitHub API are rendered in the browser. The GitHub API is accessed via a proxy which uses a GitHub access token placed in a .env file. localhost:9500 may also be run in the browser. localhost:9500/repos will display the array of MockData from the database. localhost:9500/repos/{ repo name } will show the data for an individual element of the array, if it exists. An error message will be displayed if the repo does not exist.

## Setup
### Setup for Vue Project

Inside the basic-project directory:
1. Run `yarn`
2. Run `yarn dev`

Axios should already be integrated with the package (when I tested it, it ran properly without reinstalling Axios).

### Setup for Server

Inside the server directory:
1. Run `yarn`
2. Run `yarn run server`


