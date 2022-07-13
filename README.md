## Architecture
Below are a list of major folders in this application
- components: contains resuable components including `ImageCard`, `ImageCardList` and `PageNavigator`
- models: contains data models
- services: contains functions to handle API calls, as well as the configurations such as API base url and API endpoints routes.
- styles: contains customised styles
- pages: contains major page components of the application. Currently there is only one `ImageOverview` page.
### To be improved
- add unit tests
- add a loading spinner when loading data from API.
- move image list data out of the app component, and save it into Redux store or Context API.
- move configurations (such as API base url) into .env file.
- currently there is only one page component so routes are not configured for now. They are needed if more pages are created in the future.
