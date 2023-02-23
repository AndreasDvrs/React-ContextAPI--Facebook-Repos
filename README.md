# Project Description and Design Decisions

# Design desicions set1: how to manage UI and responsiveness in an easy way.
	- Chose css grid as the main guide, so that responsiveness is achieved
	
	- Flexboxes are used to center and style items within this guide
	
	- Components are split up as much as possible, for easy code navigation

# Design decisions set2: how to manage state - technical decisions.
	- Chose the Context API, since redux would be an unecessary overhead in my opinion
	
	- Most of the logic happens in there. 
	
	- Update functions are passed down to children wrapped with the useCallback hook. This is not necessary 
		by any means, did it for demonstration purposes
		
	-Since most of the logic is there, it was decided to go with multiple state variables, instead of a 
		global store like object (we could do it either way not much difference). 
		If this was production code we should enhance contextAPI as described here: 
		https://www.developerway.com/posts/how-to-write-performant-react-apps-with-context
		
	-useEffect hooks are avoided, as much as possible, since they complex the logic IMHO.

# Design decisions set3: Business/Functionality logic
	-The main idea is that we fetch the 100 repositories and keep them in memory(allRepos), after normalization, 
		to keep whats necessary.
		
	-But we actually care about the repos user has searched for (all if no search input), so we keep these 
		in a separate object(filteredRepos), having their page as key.
		
		We could stick to one object, with two keys of filtered/unfiltered, but it would complex the logic 
			with no important benefit.
			
	-When actions affecting pagination happen, total pages are recalculated and stored in an array. 
		Also user is sent to page1 to avoid confusion.
		
	-Pagination component is memoized since there is quite some logic nested in there, 
		so we would not want it to rerender unless absolutely necessary.

# Improvements that could be applied
	-enhance contextAPI as described here: 
		https://www.developerway.com/posts/how-to-write-performant-react-apps-with-context
	
	-Use either SASS or Styled components (my main 2) to get rid of pure css
	
	-Include abort signal in API request
	
	-More try catch inside the code (have only added one in the first request just for demonstration) 
		and a banner/alert to inform the user
		
	-A little more love on responsiveness (although in most cases it behaves nicely)
	
	-Keyboard handlers (e.g. click enter to search)
	
	-Some more transitions/hover effects etc
	
# REACT APP DEFAULT README


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
