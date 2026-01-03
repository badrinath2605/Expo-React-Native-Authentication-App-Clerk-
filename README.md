Expo React Native Authentication App (Clerk)

Project Overview :
This project is a React Native mobile application built using Expo that implements real user authentication with Clerk. 
The application demonstrates a production-style authentication flow, protected navigation, clean UI, and proper session handling
The main focus of this project is real authentication and navigation, not a basic Expo demo app.


Features:
Real Authentication using Clerk
Protected Routes
Home Screen dispalyed after successful login
Profile Screen would display User ID, Email address
Logout that properly ends the session and redirects
Navigation using Expo Router
Clean, card-based UI



Tech Stack:
React Native
Expo
Expo Router
Clerk Authentication(Expo SDK)




Project Structure:
project-root/
│
├── .env
├── .gitignore
├── package.json
├── README.md
│
└── app/
    ├── _layout.tsx        
    ├── index.tsx          
    ├── sign-in.tsx        
    ├── sign-up.tsx        
    │
    └── (tabs)/
        ├── _layout.tsx    
        ├── home.tsx        
        └── profile.tsx    



Environment Setup:
create a .env file in the project root and the clerk key.


Setup & Run Instructions:
1)Install Dependencies
     'npm install'
2)Configure Clerk
     create an application in the Clerk Dashboard
     Enable email & password authenticatoin
     Disable Email Verification during Sign-Up
     Copy the Publishable Key into .env
3)Configure Expo go
     Install expo go on a mobile phone
     Create an account
     Login to that created account 
4) Start the application
     'npx expo start'
     scan the QR code using Expo Go





Authentication Flow:

App Launch
   ↓
Auth Gate (index.tsx)
   ↓
If not signed in → Sign In
   ↓
If signed in → Home
   ↓
Profile → Logout
   ↓
Back to Sign In


