# React.js technical test
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting started

First, run the development server:

    npm start 
    
> or

    yarn start

Open  [http://localhost:3000](http://localhost:3000/)  with your browser to see the result.

## Maps solution

I decided to make a component, MapComponent, that passing the zoom and id through props would serve me to create the two maps, MainMap & SideMap.

This component is wrapped by a **Wrapper ** component that contains the api key and is in charge of controlling the load and showing "Loading" if it is loading or "Error" if it fails.

Then, both independent maps are passed through the Map Grid component, where the responsive style is settled. And finally, this created grid is passed through the App component to be rendered.

The Searcher component contains all the logics for searching a specific place, set a mark in the map, recalculate the maps focus in the screen, manage the auto-complete and store each mark in a Redux state.

## Store Markers

To make easier the Redux configuration, I used the reduxjs / toolkit package. 
In the **features** folder, is the addMarkSlice with the addMark reducer, which is imported in the **store**, stablished in the **app** folder.

The dispatch of the action is done in the *onSearch* function of the Searcher component.

## Styles

I've used *styled component* for the different components styles and *simple CSS* for the general styles and the search suggestions layout.

## Testing & Optimization

I ran out of time, so this is something that is pending.
There's only one test done *App.test.js* that checks if the maps grid renders.

## Added packages

 - googlemaps / react-wrapper
 - reduxjs / toolkit
 - styled-components
