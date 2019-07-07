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

