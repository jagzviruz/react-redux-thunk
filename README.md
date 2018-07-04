# Sample React Application to demonstrate React and Redux Thunk
- Created with CodeSandbox

This example integrates react, redux and redux thunk to display integration.
On clicking a button, a modal popup is opened, which displays 2 tabs.
The first tab, which embeds a table-data component, triggers a fetch for data, which populates data into the redux store.

### Note : 
I haven't used a Smart container + Dumb component approach, because I wanted to make the TableData component self sufficient.
So the TableData Component can be imported anywhere, and it will handle fetching and displaying data on its own.
This can be further enhanced to include capabilities like displaying additional columns, pagination, styling etc.
