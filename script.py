import os

# Specify the folder containing your images
folder_path = 'C:\Users\ayann\OneDrive\Desktop\Mangla Fashion Hub\allimages'
# List all image files in the folder
image_files = [f for f in os.listdir(folder_path) if f.endswith(('.png', '.jpg', '.jpeg'))]

# Prepare the HTML code
html_output = '<div class="products-list">\n'

# Loop through each image file and generate HTML
for image in image_files:
    product_name = os.path.splitext(image)[0]  # Get the image name without extension
    html_output += f'    <div class="product">\n'
    html_output += f'        <img src="{folder_path}{image}" alt="{product_name}">\n'
    html_output += f'        <div class="product-info">\n'
    html_output += f'            <h2>{product_name.replace("_", " ").title()}</h2>\n'  # Replace underscores with spaces and capitalize
    html_output += f'        </div>\n'
    html_output += f'    </div>\n'

html_output += '</div>'

# Print or save the generated HTML
print(html_output)

