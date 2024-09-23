const fs = require('fs'); // Import the Node.js File System module for file operations

function generateProductHTML(folderPath) {
  // Create an empty array to store the HTML for each product
  const productsListHTML = [];

  // Read all files in the specified folder
  const files = fs.readdirSync(folderPath);

  // Filter the files to include only image files (adjust the regex if needed)
  const imageFiles = files.filter(file => file.match(/\.(jpg|jpeg|png|gif)$/));

  // Generate HTML for each image file
  imageFiles.forEach((file, index) => {
    // Construct the image path by combining the folder path and file name
    const imagePath = `${folderPath}/${file}`;

    // Create the HTML for a single product
    const productHTML = `
      <div class="product">
        <img src="${imagePath}" alt="${file}">
        <div class="product-info">
          <h2>Product ${index + 1}</h2>
        </div>
      </div>
    `;

    // Add the product HTML to the array
    productsListHTML.push(productHTML);
  });

  // Create the HTML for the products list container, joining the individual product HTML strings
  const productsListContainerHTML = `
    <div class="products-list">
      ${productsListHTML.join('')}
    </div>
  `;

  // Return the generated HTML for the products list
  return productsListContainerHTML;
}

// Specify the folder path containing your images
const folderPath = 'path/to/your/images';

// Generate HTML for all images in the folder
const productsHTML = generateProductHTML(folderPath);

// Append the generated HTML to the document body
document.body.innerHTML += productsHTML;