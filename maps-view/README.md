# React.js technical test
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting started

First, open the .env file and change YOUR_API_KEY for a valid google maps API key, with the following API'S enabled:
- Maps Javascript API
- Places API

Then, run the development server:

    npm start 
    
> or

    yarn start

Open  [http://localhost:3000](http://localhost:3000/)  with your browser to see the result.

## Maps solution

I decided to make a component (MapComponent) that passing the zoom and the id through props would serve me to create the two maps, MainMap & SideMap.

This component is wrapped by a **Wrapper** component that contains the API key and is in charge of controlling the load and showing "Loading" if it is loading or "Error" if it fails.

Then, both independent maps are passed through the Map Grid component, where the responsive style is settled. And finally, this created grid is passed through the App component to be rendered.

The Searcher component contains all the logics for searching a specific place, set a mark in the map, recalculate the maps focus in the screen, manage the auto-complete and store each mark in a Redux state.

## Store Markers

To make easier the Redux configuration, I used the reduxjs / toolkit package. 
In the **features** folder, is the addMarkSlice with the addMark reducer, which is imported in the **store**. All of this is settled into the **redux** folder.

The dispatch of the action is done in the *onSearch* function of the Searcher component.

Note: I usually use redux in another way, setting the redux context and then creating the reducers and separate actions. But I find out this reduxjs/toolkit package that makes the config simplest and I decided to use it for this little project.

## Styles

I've used *styled component* for the different components styles and *simple CSS* for the general styles and the search suggestions layout.

## Testing

I ran out of time, so this is something incompleted. Unfortunately I couldn't solve an error with 'window.google', so my tests didn't pass and I decided to remove them.
There are only two tests done: one for the App.js, *App.test.js* , that checks if the maps grid renders and another for the MapWrapper component, that checks if it matches a snapshot.
At least I've used prop-types to make sure each component receives the necessary props and the types are right.

## Optimization

- The MapsGrid is lazy loaded (with lazy and Suspense) in the App component, to be preloaded before rendering. 
- Also I've used { memo } from 'react', that checks if the component props have changed before rendering again.
- There are only the necessary imports in each component.
- I've avoid to import unnecessary or entire libraries.


## Added packages

 - googlemaps / react-wrapper
 - reduxjs / toolkit
 - styled-components
 - prop-types
