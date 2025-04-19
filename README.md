# Pokémon Search Web App

## Project Description

The Pokémon Search Web App is a basic application that lets users look up Pokémon details using the PokeAPI. 
With this app, you can type a Pokémon’s name or ID into a search box, click the "Search" button, and see the Pokémon’s name, image, and type displayed on the webpage. 
It also handles errors, showing messages in red if you leave the input blank or search for a Pokémon that doesn’t exist. 
The app is built entirely with vanilla JavaScript, focusing on fetching data asynchronously, updating the DOM, and managing errors.

This project is stored in a GitHub repository called **PokeAPI**, accessible at `https://github.com/Astor2386/PokeAPI.git`.

## Walkthrough

1. **Download the Code**:
   - Open your terminal or command line tool.
   - Clone the repository to your machine with this command:
     ```
     git clone https://github.com/Astor2386/PokeAPI.git
     ```
   - Change into the project folder:
     ```
     cd PokeAPI
     ```

2. **Launch the App**:
   - Find the `index.html` file in the project folder.

3. **Try It Out**:
   - Once the page loads, you’ll see a title "Pokémon Search", a text input, and a "Search" button.
   - Enter a Pokémon name (e.g., `charizard`) or ID (e.g., `6`) and press "Search".
   - The app will show the Pokémon’s name, image, and one type only, adding a second type was not required in this project
   - Test error handling by searching for something invalid (e.g., `notapokemon`)
   - or leaving the input empty—you’ll see error messages like "Pokémon not found!" or "Please enter a Pokémon name or ID!" in red.
  
## JS style
There were two ways I saw to go about this simple API creation based off the lessons and videos. 
One relied on more indexhtml, the other was textcontent like the instructor did in the video.
I went with the lessons version of more innerhtml for this project, but it easily could've been written more textcontent based.

## Special Thanks 
Special thanks to the PokeAPI website.
