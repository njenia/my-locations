# MyLocations
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
It is built with React, Redux, MaterialUI, Styled Components, Formik and Leaflet.
   

## Running locally

Simply

`yarn && yarn start`

When in the project directory.

## Future improvements
Technical:
* **Test coverage** with snapshots using storybook+jest snapshots (=storyshots). 
This way, you write stories, showcasing your components and doing integration and
unit testing, and by doing that you get test coverage for free. 
Very high ROI
* **Typescript**. As the project grows, the domain model and codebase will become more complex.
 TS will increase dev experience, Bugs will be revealed sooner and it will be generally easier to 
 write code

    
Product:
* When creating a new location and pinning it on the map, the address will be inferred 
automatically, if possible
* Set a color for each category - more visual comfort
* A page that shows a map of all locations. Each marker will be colored by the category it belongs to.
* Mobile friendly. 
