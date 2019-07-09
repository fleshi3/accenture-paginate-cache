Front-End Test: Pagination Cache
================================

Changelog:
----------
__2019-07-06:__
- Initial commit & CRA cleanup
- Initialised eslint & prettier JSON rules
- Added dotenv library for API key
- Added Redux library & initial Redux skeleton
- Added Material-UI Library and Roboto font to index.html
- Added Redux-Saga & added middleware to Redux Store
- Initial skeleton for saga API calls completed

__2019-07-07:__
- Difficulty with error catching using *fetch*, installing *axios* to fix error catching
- Replaced *fetch* with *axios* error caching now working
- Creating skeleton for mapping data to components
- Replicated app mockup using material-ui library
- Added working pagination logic and component
- Added new fetch method for additional pages
- Changed .env to include *REACT_APP_BASE_URL* so that *axios* can use params from state selectors
- Fixed issue regarding maximum totalPages incrementing beyond limit
- Added logic statement to disable *NEXT* page button when totalPages reaches limit
- Fixed issue where subsequent fetch requests would override eachother
- Set correct value for totalPages

**2019-07-08:**
- Added new sagas *cacheSagas* that watches for *INCREMENT_PAGE* and evaluates if *currentPage >= endOfCache*
- Changed API request params to fetch 4 pages at a time to avoid unecessary API calls
- Fixed CSS styling for ticket cards to be consistent across all tickets
- Added conditional rendering that shows a loading spinner if *state.loading* evaluates to *true*
- Added conditional styling so that when *currentPage===endOfCache* the loading spinner does not interrupt the current view
- Added *action onInspectCard* that updates an empty object in state with the ticket card that was clicked
- Added component *cardDrawer* that slides out when a ticket is being inspected for more information
- Added *action onDismountCard* that dismounts the data in *cardDrawer* and closes the drawer
- Added respective CSS styling for data in *cardDrawer* and added a on-click event for closing the component

__2019-07-09:__
- Added new logic for calculating total pages using response header *x-total-count*
- Fixed issue where advancing the pages too quickly would go beyond the next cache of pages
- Destructuring and formatting complete
- write test files

