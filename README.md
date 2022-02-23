# Pokedex Frontend Application

This application makes a get request to the [Pokeapi](https://pokeapi.co/) and gets hold of twenty pokemon to see their information within a card.

The twenty pokemon are displayed at the home page. Each card has a "View more details" button, which will take you to the details page, where we can see more information about the pokemon such as as height, weight, hitpoints, attack and defense.

The site has a form where the user can search for a specific pokemon within the twenty we have available and on submit, it will take them to the details page of searched pokemon. Also, the cards at home filter in real time based on what the user has typed in the search field.

### Technologies used
- JavaScript
- React
- HTML
- CSS
- Styled Components
- Axios
- React Router Dom

### Challenges faced

1.- Based on the rules of fair use by the API, the response of the request had to be saved in local storage. At first I thought that when you made a request to the endpoint which answered with as many pokemons as requested, it gave you the pokemons and their details, but the response didn't have what I needed. It turns out you need to request each pokemon in order to get ahold of all its details, so I had to find a way to make the request at least twenty times, hold each pokemon and then save the twenty elements at once at local storage. What I came up to solve this was to make the request inside a while loop that repeated itself as many times as the value of how many pokemon where needed. To exit the loop I just decremented the value of pokemons needed by one until it reached zero.

2.- The cards displayed at home need to be filtered in real time based on what the user writes in the input field. In order to solve that I had to make use of the **pokemons** state saved in local storage, a state called **filteredPokemons** which initially is a copy of the information that is in local storage and the function to set the state of **filteredPokemons**, which is called **setFilteredPokemons**.
Here is how it looks at the form:

```javascript
const { pokemons, filteredPokemons, setFilteredPokemons } =  props;
```
So, at the **handleChange** function, we have two important conditions:
First, when the value is an empty string, it sets the filtered pokemons to the value at **pokemons** (local storage). This way we ensure that when there is nothing written, or the user cleared what it wrote, the pokemons would reset and the twenty are again displayed.
Second, from **e.nativeEvent**, we get hold of **data**, if it is **null**, it means the user pressed backspace, so we need to reset the values to its initial state so, again, we have the whole pool at our disposal.
Lastly, we filter the pokemons based on a condition that checks if the index of the value passed in the name of the pokemon equals to zero. This way we are certain that the strings match from the very beginning and not at random positions.
Here's the constant with the condition:
```javascript
const pokemonSearch = filteredPokemons.filter(pokemon => pokemon.name.indexOf(value) ===  0);
```

# Installation
1.- Clone or download the repository.
2.- Open the files in your selected editor.
3.- In terminal, position yourself at the root folder of the project.
4.- Run npm install to install all the needed dependencies.
5.- After installation is complete, execute the command npm start.

## Roadmap
The following is the roadmap followed to complete the project:

1.- Create the repository.

2.- Setup the project at local computer.

3.- Connect with online repository and upload first commit.

4.- Create a second branch called staging in order to use it as a development branch.

5.- Delete unnecessary code.

6.- Create basic layout.

- Navbar
- Body
- Input field
- Pokemon card
- Footer

7.- Create basic styles

8.- Setup API call

9.- Save on local storage

10.- Display card in home

- Card should take to details page of pokemon

11.- Add routes

12.- Form function

- Establish filter
- On submit, take to pokemon details

13.- Responsive styles

14.- Add property validation for components

15.- Create READme

16.- Deploy

## Project composition
|Folder/File  |Description                         |
|----------------|-------------------------------|
|src|Contains everything|
|api          |Setup of the API and methods    |
|assets       |Images needed|
|components       |All the components to render the site|
|hooks       |useLocalStorage hook|
|views       |Home and Detail views|
|breakpoints       |Breakpoints used to establish responsive styles|
|App       |Where everything comes together|
|styles      |Main container styles|
|index.js and index.css       |Root of project and universal styles|

## Components composition
|File  |Description                         |
|----------------|-------------------------------|
|index|Contains logic|
|styles         |Styles for the component    |
|types       |Validation types for the properties of the component|

## How branches work
- Main is only use to deploy finished versions.
- Staging is for development and from where all subsequent branches must come out.
- All branches must make PR to Staging.
- When a version or feature is complete, from Staging a PR is open to Main.

## Further Implementations
Another form could be established as a modal to ask the user the number of pokemons to be requested from the API. Right now we are working with a predetermined number of pokemons, but the logic is ready to accept dynamic requests, it only needs a form to capture those values and implement it in the flow.

## Conclusion

There is not much to be said, only that this was a really interesting exercise.

## License
[MIT](https://choosealicense.com/licenses/mit/)
