# Floristeria-dulces-petalos

## Uses the following libraries:
  - Vite + Typescript + react
  - Redux Toolkit
  - Tailwind
  - MUI for the Breadcrumb component and SVGs
  - React router dom
  - Vitest
  - Framer motion for transitions between pages

## About the project  
- It has two views: List products and details products.
- It automatically adapts to Dark / Light themes based on the system's settings.
- It uses Skeleton to preserve the structure of the Web.
- It uses .env to load the API's URL based on the environment variables

### Product List
The product list view contains:
- A basic search where you can filter products by its name or its Binomial name
- List the products and adapt to the viewport accordingly.
- The Search textfield uses the portal from the shared components's Header to be rendered on top

### Details View
- Display the details from certain product.
- It takes the information from the URL so it can be easily copy/pasted or even refreshed.
- It uses Skeleton to maintain the structure from the Web
- The back button uses the portal from the shared components's Header to be rendered on top

### Shared components
- The Header uses Portal to capture dom elements and set them on top.
- The Search and Textfield as a prop variant to change its colors

#  Scripts
- `start`: starts the dev server
- `build`: builds the project  
