// global.js

// Function to create the header
function createHeader() {
    const header = document.createElement("header");
    header.innerHTML = `
      <h1>Sony Walkman - The Iconic Portable Music Player</h1>
      <nav>
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="products.html">Products</a>
        <a href="contact.html">Contact</a>
      </nav>
    `;
    document.body.prepend(header);
  }
  
  // Function to create the footer
  function createFooter() {
    const footer = document.createElement("footer");
    footer.innerHTML = `
      <p>&copy; ${new Date().getFullYear()} Sony. All rights reserved.</p>
    `;
    document.body.appendChild(footer);
  }
  
  // Call the functions to create the header and footer
  createHeader();
  createFooter();