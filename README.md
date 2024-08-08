# Reconnect

## Description

Reconnect is a social media app that offers friend connections, post and image sharing, profile viewing, and all regular social media app functions. Its main outstanding feature is connecting people that went to a shared school or university at the same time, allowing reconnection of old friends we've fell out of touch with or even forgot about.

## Inspiration

The inspiration for Reconnect came from a memory of my first best friend named Tre from Elementary School, whom I hadn't thought about in over a decade. I wanted to create an application that specializes in connecting old friends from all education levels based on who attended the same school during the same years because I want to see what those people are up to all these years later.

## Purpose

The primary purpose of Reconnect is to help people reconnect with forgotten friends.

## Technologies

- **Frontend**: React, Javascript, HTML
- **Backend**: Node.js, Express.js, Mongoose
- **Database**: MongoDB
- **APIs**: Google Places API
- **Deployment**: AWS (S3, MongoDB, EC2)
- **Package Manager**: npm

## Features

- User Registration and Authentication
- Profile Creation and Viewing
- Friend Connection based on Shared Education Experience
- Post and Image Sharing
- Newsfeed for Recent Activities
- School Search and Selection

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jaysaavedra18/reconnect-app.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd reconnect-app
   ```
3. **Install client dependencies:**
   ```bash
    cd client
    npm install
   ```
4. **Install server dependencies:**
   ```bash
   cd ../server
   npm install
   ```

## Configuration

1. **Environment Variables:**

   - Create a `.env` file in the root directory and add the following environment variables:
     ```plaintext
     PORT=3001
     MONGO_URL=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     GOOGLE_API_KEY=your_google_places_api_key
     ```

2. **File Storage:**
   - WIP: Script incoming.

## Usage

1. **Start the Development Server:**
   ```bash
   npm run start
   ```
2. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## API Endpoints

### Auth

- `POST /auth/login`: Register or login a user
  - **Request Body** for Register:
    ```json
    {
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com",
      "password": "password123",
      "picturePath": "path/to/picture",
      "friends": [],
      "location": "City, Country",
      "occupation": "Occupation",
      "schools": ["School1", "School2"]
    }
    ```
  - **Request Body** for Login:
    ```json
    {
      "email": "john.doe@example.com",
      "password": "password123"
    }
    ```
  - **Response**:
    ```json
    {
      "token": "jwt_token",
      "user": {
        "_id": "user_id",
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "picturePath": "path/to/picture",
        "friends": [],
        "location": "City, Country",
        "occupation": "Occupation",
        "schools": ["School1", "School2"],
        "viewedProfile": 1234,
        "impressions": 5678
      }
    }
    ```

### Posts

- `GET /posts`: Get all feed posts
  - **Headers**: `{ "Authorization": "Bearer jwt_token" }`
  - **Response**: `[ ...posts ]`
- `GET /posts/:userId/posts`: Get posts by a specific user
  - **Headers**: `{ "Authorization": "Bearer jwt_token" }`
  - **Response**: `[ ...userPosts ]`
- `PATCH /posts/:id/like`: Like or unlike a post
  - **Headers**: `{ "Authorization": "Bearer jwt_token" }`
  - **Request Body**: `{ "userId": "user_id" }`
  - **Response**: `{ ...updatedPost }`

### Users

- `GET /users/:id`: Get user by ID
  - **Headers**: `{ "Authorization": "Bearer jwt_token" }`
  - **Response**: `{ ...userData }`
- `GET /users/:id/friends`: Get friends of a user
  - **Headers**: `{ "Authorization": "Bearer jwt_token" }`
  - **Response**: `[ ...friends ]`
- `GET /users/:id/schools`: Get schools attended by a user
  - **Headers**: `{ "Authorization": "Bearer jwt_token" }`
  - **Response**: `[ ...schools ]`
- `PATCH /users/:id/:friendId`: Add or remove a friend
  - **Headers**: `{ "Authorization": "Bearer jwt_token" }`
  - **Response**: `{ ...updatedUser }`
- `PATCH /users/:id/:schoolId`: Add or remove a school
  - **Headers**: `{ "Authorization": "Bearer jwt_token" }`
  - **Response**: `{ ...updatedUser }`

## Deployment Plan

1. **Backend:**

   - Deploy the backend to AWS EC2
   - Use AWS MongoDB for database management

2. **Frontend:**

   - Deploy the frontend to AWS S3

3. **DNS and SSL:**
   - Set up DNS using AWS Route 53
   - Obtain and install SSL certificates

## Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- Special thanks to the developers of the open-source libraries used in this project.

Feel free to add, modify, or remove any sections as needed!
