# Front-End Test: Pagination Cache

## Changelog:

**2019-07-06:**

- Initial commit & CRA cleanup
- Initialised eslint & prettier JSON rules
- Added dotenv library for API key
- Added Redux library & initial Redux skeleton
- Added Material-UI Library and Roboto font to index.html
- Added Redux-Saga & added middleware to Redux Store
- Initial skeleton for saga API calls completed

**2019-07-07:**

- Difficulty with error catching using _fetch_, installing _axios_ to fix error catching
- Replaced _fetch_ with _axios_ error caching now working
- Creating skeleton for mapping data to components
- Replicated app mockup using material-ui library
- Added working pagination logic and component
- Added new fetch method for additional pages
- Changed .env to include _REACT_APP_BASE_URL_ so that _axios_ can use params from state selectors
- Fixed issue regarding maximum totalPages incrementing beyond limit
- Added logic statement to disable _NEXT_ page button when totalPages reaches limit
- Fixed issue where subsequent fetch requests would override eachother
- Set correct value for totalPages

**2019-07-08:**

- Added new sagas _cacheSagas_ that watches for _INCREMENT_PAGE_ and evaluates if _currentPage >= endOfCache_
- Changed API request params to fetch 4 pages at a time to avoid unecessary API calls
- Fixed CSS styling for ticket cards to be consistent across all tickets
- Added conditional rendering that shows a loading spinner if _state.loading_ evaluates to _true_
- Added conditional styling so that when _currentPage===endOfCache_ the loading spinner does not interrupt the current view
- Added _action onInspectCard_ that updates an empty object in state with the ticket card that was clicked
- Added component _cardDrawer_ that slides out when a ticket is being inspected for more information
- Added _action onDismountCard_ that dismounts the data in _cardDrawer_ and closes the drawer
- Added respective CSS styling for data in _cardDrawer_ and added a on-click event for closing the component

**2019-07-09:**

- Added new logic for calculating total pages using response header _x-total-count_
- Fixed issue where advancing the pages too quickly would go beyond the next cache of pages
- Destructuring and formatting completed for components
- Destructured Redux reducers and combined into _rootReducer_, selectors also updated
- TODO: Write test files
- Added Enzyme library to assist with testing MaterialUI components
