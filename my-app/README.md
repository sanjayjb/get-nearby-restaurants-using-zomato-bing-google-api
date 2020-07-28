# Restaurants on Maps!

A tool to get the restaurants according to the current location of the user. The tool will map the location of the user, the nearest restaurant and the furthest restaurant (within a certian distance) into the Map.
The user will be able to see a triangle polygon of the above marked points with sides as straight lines on the Map with the area of the above mentioned triangle with the time taken for the user to walk From Point A to Point B to Point C and back to Point A. 
The user will be alble to see another map which has a polygon without straight lines as sides, those are the exact routes to the the restaurants and back. The user will be able to see the overall time taken to visit all the Restaurants and come back to Point A (user's starting point), as a delighter user will also be able to see the instructions on how to reach from Point to Point. 

## Getting Started (Installation)

### Requirements 
Node and Node Packet Manager (NPM), API key of Zomato API, Google API and Bing Maps API.

#### Windows and macOS:
For Node and NPM:

1. Go to [here](https://nodejs.org/en/)

2. Select the button to download the LTS build that is "Recommended for most users".

3. Install Node by double-clicking on the downloaded file and follow the installation prompts.

#### Ubuntu 16.04:

The easiest way to install the most recent LTS version of Node 6.x is to use the [package manager](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions) to get it from the Ubuntu binary distributions repository. This can be done very simply by running the following two commands on your terminal:

curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -

sudo apt-get install -y nodejs

### API Key generation

Zomato API key generation:
1. Go to [here](https://developers.zomato.com/api)

2. Log in using existing credentials or register.

3. Click on Generate API key

4. Fill out the required details. 

Google API key generation:
1. Go to [here](https://developers.google.com/maps/documentation/javascript/get-api-key)

2. Follow instrctions under "Get the API key"

Bing API key generation:
1. Go to [here](https://docs.microsoft.com/en-us/bingmaps/getting-started/bing-maps-dev-center-help/getting-a-bing-maps-key)

2. Follow the instructions under "Creating a Bing Maps Key"


### Project Setup

Replace 'YOUR_API_KEY' in Restaurants.js file with the respective Bing, Google, Zomato API keys that were generated. (TO BE DONE ONLY ONCE OR IF EXISTING KEY HAS EXPIRED).

In the command prompt, navigate to the project directory and run the command:

```npm install``` - This will install all the dependencies mentioned in package.JSON

### Running the Project 

```npm start``` - This will compile the project, it will automatically open the default browser (or a new tab if the default broswer is already open) and then start the project in LocalHost:3000. 
