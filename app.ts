// Define the API endpoint
const endpoint = 'https://jsonplaceholder.typicode.com/users';

// Create an XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Define the function to handle the onload event
function onLoad() {
  // Parse the JSON response
  const users = JSON.parse(xhr.responseText);

  // Create a table element
  let table = document.createElement('table');
  table.classList.add('my-table');
  // Create a header row
  const headerRow = document.createElement('tr');
  const header1 = document.createElement('th');
  const header2 = document.createElement('th');
  const header3 = document.createElement('th');
  header1.textContent = 'Name';
  header2.textContent = 'Email';
  header3.textContent = 'Phone';
  headerRow.appendChild(header1);
  headerRow.appendChild(header2);
  headerRow.appendChild(header3);
  table.appendChild(headerRow);

  // Create a row for each user
  for (const user of users) {
    const row = document.createElement('tr');
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    const cell3 = document.createElement('td');
    cell1.textContent = user.name;
    cell2.textContent = user.email;
    cell3.textContent = user.phone;
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    table.appendChild(row);
  }

  // Append the table to the DOM
  const container = document.getElementById('container') as HTMLDivElement;
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
