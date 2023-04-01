const endpoint = 'https://jsonplaceholder.typicode.com/users';
const xhr = new XMLHttpRequest();
function loadApi() : void {
  const users : User[] = JSON.parse(xhr.responseText); 
  
  // Create a table element
  let table = document.createElement('table') as HTMLTableElement;
  table.classList.add('my-table');
  const headerRow = document.createElement('tr') as HTMLTableRowElement;
  const header1 = document.createElement('th') as HTMLTableCellElement;
  const header2 = document.createElement('th') as HTMLTableCellElement;
  const header3 = document.createElement('th') as HTMLTableCellElement;
  header1.textContent = 'Name';
  header2.textContent = 'Email';
  header3.textContent = 'Phone';
  headerRow.appendChild(header1);
  headerRow.appendChild(header2);
  headerRow.appendChild(header3);
  table.appendChild(headerRow);

  // Create a row for each user
  for (const user of users) {
    const row = document.createElement('tr')  as HTMLTableRowElement;
    const cell1 = document.createElement('td') as HTMLTableCellElement;
    const cell2 = document.createElement('td') as HTMLTableCellElement;
    const cell3 = document.createElement('td') as HTMLTableCellElement;
    cell1.textContent = user.name;
    cell2.textContent = user.email;
    cell3.textContent = user.phone;
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    table.appendChild(row);
  }
  const container = 
  document.getElementById('container') as HTMLDivElement;
  container.appendChild(table);
}

function onError() : void {
  console.error('Error fetching data');
}

interface User {
  name: string;
  email: string;
  phone : string;
}

xhr.open('GET', endpoint);
xhr.onload = loadApi;
xhr.onerror = onError;
xhr.send();
