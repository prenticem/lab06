document.addEventListener("DOMContentLoaded", function() {

// Define the store locations
const locations = [  {    name: 'Seattle',    minCustomersPerHour: 23,    maxCustomersPerHour: 65,    avgCookiesPerCustomer: 6.3,  },  {    name: 'Tokyo',    minCustomersPerHour: 3,    maxCustomersPerHour: 24,    avgCookiesPerCustomer: 1.2,  },  {    name: 'Dubai',    minCustomersPerHour: 11,    maxCustomersPerHour: 38,    avgCookiesPerCustomer: 3.7,  },  {    name: 'Paris',    minCustomersPerHour: 20,    maxCustomersPerHour: 38,    avgCookiesPerCustomer: 2.3,  },  {    name: 'Lima',    minCustomersPerHour: 2,    maxCustomersPerHour: 16,    avgCookiesPerCustomer: 4.6,  },];

// Define a function to simulate the number of cookies sold per hour
function simulateCookiesSoldPerHour(location) {
  const cookiesSoldPerHour = [];
  for (let i = 0; i < 14; i++) {
    const randomCustomers = Math.floor(Math.random() * (location.maxCustomersPerHour - location.minCustomersPerHour + 1) + location.minCustomersPerHour);
    const cookiesSold = Math.round(randomCustomers * location.avgCookiesPerCustomer);
    cookiesSoldPerHour.push(cookiesSold);
  }
  return cookiesSoldPerHour;
}

// Define a function to generate a table for a given location's sales data
function generateSalesTable(location) {
    // Create a new table element
    const table = document.createElement('table');
  
    // Create the table header
    const headerRow = table.insertRow();
    headerRow.insertCell().textContent = 'Hour';
    headerRow.insertCell().textContent = 'Cookies Sold';
    headerRow.insertCell().textContent = 'Daily Total';
  
    // Add a row for each hour's worth of sales data
    let totalCookiesSold = 0;
    for (let i = 0; i < location.cookiesSoldPerHour.length; i++) {
      const hour = i + 6; // Adjust for the fact that the stores open at 6am
      const cookiesSold = location.cookiesSoldPerHour[i];
      totalCookiesSold += cookiesSold;
  
      // Create a new row with the hour, number of cookies sold, and daily total
      const row = table.insertRow();
      row.insertCell().textContent = `${hour}:00`;
      row.insertCell().textContent = cookiesSold;
      row.insertCell().textContent = totalCookiesSold;
    }
  
    // Add the location's name to the top of the table
    const caption = table.createCaption();
    caption.textContent = location.name;
  
    return table;
  }  

// Get a reference to the HTML element where you want to display the data
const salesList = document.getElementById('sales-list');

// Loop through each location and generate a table for its sales data
for (const location of locations) {
    // Simulate the number of cookies sold per hour for this location
    location.cookiesSoldPerHour = simulateCookiesSoldPerHour(location);
  
    // Generate a table for this location's sales data
    const salesTable = generateSalesTable(location);
  
    // Append the table to the sales list element
    salesList.appendChild(salesTable);
  }  
});