
# Wallet Application
Welcome to the Wallet Clone project! This project aims to replicate the basic functionality of Wallet, allowing users to perform transactions, view their account balance, and interact with other users.

# Demo 
https://github.com/user-attachments/assets/38890e7a-3f02-4ab7-913d-dc78ab9fa332

# Features
- User Authentication & Authorization using JWT
- View Account Balance
- Search and view other users
- Send money to other users' accounts

# Technology Stack
- Frontend: React.js, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB

# Getting Started

## To get started with the Wallet Clone project, follow these steps:

1. **Clone the Repository**: Clone the repository from GitHub:

   ```bash
   git clone https://github.com/ImSanc/Wallet-Application.git


2. **Set Environment Variables**: Navigate to backend folders and add config. You may need to create a config.js file and configure it with required variables: In the backend/config.js file:

    ```bash
    const jwtToken = "your JWT token"
    const Port = 'your port';
    const databaseConnection = 'your db connection';

module.exports  ={jwtToken,Port,databaseConnection};

3. **Install Dependencies** : Install dependencies in the frontend and backend folders using npm or yarn:

    ```bash
    cd frontend
    npm install
    cd ../backend
    npm install


4. **Start the Backend Server** : In the backend folder, start the development server using npm:
    ```bash
    node index.js

5. **Start the Frontend** : In the frontend folder, start the frontend application:
    ```bash 
    npm run dev

# Database Transactions
The Wallet Clone project implements MongoDB Transactions to ensure data consistency and reliability. Transactions follow the ACID properties of databases, ensuring that transactions are either fully completed and committed or reverted back in case of issues, thus preventing inconsistencies in the database.

# Contributions
Contributions to the Wallet Clone project are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

Thank you for using Wallet Clone! Happy Coding! 🚀
