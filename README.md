# Cloniee - [Cloniee](https://cloniee.netlify.app/)

Cloniee is a mini eCommerce platform designed to provide a seamless shopping experience. Users can search for products, view details, add multiple items to their cart, and place orders with real-time price calculations.

## Features
- **Product Search**: Search for products by name.
- **Product Details**: View detailed information about each product.
- **Cart Management**: Add multiple product items to the cart at once.
- **Price Calculation**: Automatic price updates based on selected products.
- **Order Placement**: Users can place orders directly from the platform.

## Tech Stack
Cloniee is built using modern web technologies:

### Frontend
- **React** (v19) - For UI development
- **React Router DOM** (v6.30) - For navigation
- **React Icons** (v5.5) - For UI icons
- **Axios** (v1.8) - For API requests
- **Tailwind CSS** (v3.4) - For styling
- **Vite** (v6.2) - For fast development & build optimization

### Development Tools
- **ESLint** - For linting and code quality
- **PostCSS** & **Autoprefixer** - For CSS processing

## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/cloniee.git
   cd cloniee
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## Project Structure
```
frontend/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page components
│   ├── context/        # Global state management
│   ├── assets/         # Static assets
│   ├── App.js          # Main application file
│   ├── main.jsx        # Entry point
│   └── ...
├── public/             # Static public files
├── package.json        # Project dependencies & scripts
├── tailwind.config.js  # Tailwind CSS configuration
├── vite.config.js      # Vite configuration
└── README.md           # Project documentation
```

## Future Enhancements
- Implement user authentication (Login/Register)
- Add payment gateway integration
- Improve UI responsiveness
- Optimize performance

## Contributing
Feel free to fork this repository and submit pull requests. Contributions are always welcome!

## Live Demo
Check out the project live at [Cloniee](https://cloniee.netlify.app/)


