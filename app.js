// Define the API endpoint
var endpoint = 'https://jsonplaceholder.typicode.com/users';
// Create an XMLHttpRequest object
var xhr = new XMLHttpRequest();
// Define the function to handle the onload event
function onLoad() {
    // Parse the JSON response
    var users = JSON.parse(xhr.responseText);
    // Create a table element
    var table = document.createElement('table');
    table.classList.add('my-table');
    // Create a header row
    var headerRow = document.createElement('tr');
    var header1 = document.createElement('th');
    var header2 = document.createElement('th');
    var header3 = document.createElement('th');
    header1.textContent = 'Name';
    header2.textContent = 'Email';
    header3.textContent = 'Phone';
    headerRow.appendChild(header1);
    headerRow.appendChild(header2);
    headerRow.appendChild(header3);
    table.appendChild(headerRow);
    // Create a row for each user
    for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
        var user = users_1[_i];
        var row = document.createElement('tr');
        var cell1 = document.createElement('td');
        var cell2 = document.createElement('td');
        var cell3 = document.createElement('td');
        cell1.textContent = user.name;
        cell2.textContent = user.email;
        cell3.textContent = user.phone;
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        table.appendChild(row);
    }
    // Append the table to the DOM
    var container = document.getElementById('container');
    container.appendChild(table);
}
// Define the function to handle the onerror event
function onError() {
    console.error('Error fetching data');
}
// Configure and send the XMLHttpRequest
xhr.open('GET', endpoint);
xhr.onload = onLoad;
xhr.onerror = onError;
xhr.send();
