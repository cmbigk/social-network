# Social Network

A full-stack social networking platform with real-time chat capabilities, built with Go and Next.js.

## ✨ Features

### User Management
- **User Registration & Authentication** - Secure signup and login with session-based authentication
- **User Profiles** - Customizable profiles with avatars, bio, and personal information
- **Privacy Settings** - Toggle between public and private account modes

### Social Features
- **Posts** - Create, view, and delete posts with optional images
- **Categories** - Organize posts with 27+ predefined categories (Gaming, Movies, Sports, etc.)
- **Privacy Control** - Set posts as public, followers-only, or private
- **Comments** - Nested comment threads with support for replies
- **Voting System** - Upvote/downvote posts and comments

### Follower System
- **Follow/Unfollow Users** - Build your social network
- **Follow Requests** - Private accounts require approval to follow
- **Followers & Following Lists** - View who follows you and who you follow

### Real-Time Chat
- **Private Messaging** - One-on-one conversations via WebSocket
- **Group Chats** - Create and participate in group conversations
- **Group Management** - Invite users and manage group memberships
- **Chat History** - Persistent message storage

### Notifications
- **Real-time Notifications** - Get notified about follows, comments, and interactions
- **Notification Management** - Mark notifications as read

## 🛠 Tech Stack

### Backend
- **Go 1.23** - High-performance backend server
- **SQLite** - Lightweight, embedded database
- **Gorilla WebSocket** - Real-time bidirectional communication
- **golang-migrate** - Database migration management
- **bcrypt** - Password hashing and security
- **UUID** - Unique identifier generation

### Frontend
- **Next.js 15** - React framework with server-side rendering
- **React 19** - Modern UI library
- **TypeScript** - Type-safe JavaScript
- **React Router DOM** - Client-side routing

## 📁 Project Structure

```
social-network/
├── backend/
│   ├── main.go                    # Application entry point
│   ├── database/
│   │   └── schema.sql            # Database schema definition
│   ├── pkg/
│   │   ├── chat/                 # WebSocket chat functionality
│   │   │   ├── client.go
│   │   │   ├── handlers.go
│   │   │   ├── manager.go
│   │   │   └── session.go
│   │   ├── db/
│   │   │   ├── migrations/       # Database migrations
│   │   │   ├── queries/          # SQL query functions
│   │   │   └── sqlite/           # SQLite implementation
│   │   ├── handlers/             # HTTP request handlers
│   │   │   ├── auth.go
│   │   │   ├── post.go
│   │   │   ├── comment.go
│   │   │   ├── follower.go
│   │   │   ├── notification.go
│   │   │   └── ...
│   │   ├── models/               # Data models
│   │   └── utils/                # Utility functions
│   └── uploads/                  # User-uploaded files
│
└── Next + React + Typescript/
    ├── app/
    │   ├── page.tsx              # Home page
    │   ├── layout.tsx            # Root layout
    │   └── api/                  # API route handlers
    ├── components/               # React components
    │   ├── PostCreate.tsx
    │   ├── CommentList.tsx
    │   ├── FollowerSystem.tsx
    │   ├── UserProfile.tsx
    │   └── ...
    ├── hooks/                    # Custom React hooks
    ├── types/                    # TypeScript type definitions
    └── styles/                   # CSS stylesheets
```

## 📦 Prerequisites

Before running this application, make sure you have the following installed:

- **Go** 1.23 or higher - [Download here](https://go.dev/dl/)
- **Node.js** 18+ and npm - [Download here](https://nodejs.org/)
- **GCC/Make** - Required for SQLite driver compilation

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/cmbigk/social-network
cd social-network
```

### 2. Backend Setup

```bash
# Install Go dependencies
go mod download

# The database will be automatically created and migrated on first run
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd "Next + React + Typescript"

# Install Node.js dependencies
npm install
```

## 🏃 Running the Application

### Start the Backend Server

```bash
# From the project root directory
cd backend
go run main.go
```

The backend server will start on `http://localhost:8080`

### Start the Frontend Development Server

```bash
# From the frontend directory
cd "Next + React + Typescript"
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Production Build

```bash
# Build the frontend for production
cd "Next + React + Typescript"
npm run build
npm start
```

## 🔌 API Endpoints

### Authentication
- `POST /api/register` - Register a new user
- `POST /api/login` - Login user
- `POST /api/logout` - Logout user (authenticated)
- `GET /api/me` - Get current user info (authenticated)
- `GET /api/heartbeat` - Keep session alive (authenticated)

### Posts
- `GET /api/posts` - Fetch all posts
- `GET /api/post` - Fetch single post
- `POST /api/post/create` - Create new post (authenticated)
- `DELETE /api/post/delete` - Delete post (authenticated)

### Comments
- `GET /api/comment/fetch` - Fetch comments for a post
- `POST /api/comment/create` - Create comment (authenticated)
- `DELETE /api/comment/delete` - Delete comment (authenticated)

### Voting
- `POST /api/vote` - Vote on post or comment (authenticated)

### Users & Profiles
- `GET /api/users` - Fetch all users
- `GET /api/profile` - Fetch user profile (authenticated)
- `PUT /api/user/privacy` - Update privacy settings (authenticated)

### Followers
- `POST /api/follow` - Follow a user (authenticated)
- `POST /api/unfollow` - Unfollow a user (authenticated)
- `GET /api/follow/status` - Get follow status (authenticated)
- `GET /api/follow/requests` - Get pending follow requests (authenticated)
- `POST /api/follow/request/respond` - Accept/decline follow request (authenticated)
- `GET /api/followers` - Get user's followers (authenticated)
- `GET /api/following` - Get users being followed (authenticated)

### Categories
- `GET /api/categories` - Fetch all categories

### Notifications
- `GET /api/notifications` - Get user notifications (authenticated)
- `POST /api/notifications/read` - Mark notification as read (authenticated)

### Chat (WebSocket & HTTP)
- `WS /ws` - WebSocket connection for real-time chat
- `GET /api/chat` - Get chat data (authenticated)
- `GET /api/chat/history` - Get chat history (authenticated)

## 🗄 Database Schema

The application uses SQLite with the following main tables:

- **users** - User accounts and profiles
- **sessions** - Authentication sessions
- **posts** - User posts with privacy settings
- **post_images** - Images attached to posts
- **categories** - Post categories
- **post_categories** - Post-category relationships
- **comments** - Post comments with nested replies
- **votes** - Votes on posts and comments
- **followers** - User follow relationships
- **follow_requests** - Pending follow requests
- **private_messages** - Direct messages between users
- **private_chats** - Private chat sessions
- **groups** - Group chats
- **group_members** - Group membership
- **group_messages** - Messages in group chats
- **group_invitations** - Group join invitations
- **notifications** - User notifications

Database migrations are automatically applied on application startup.

## 📝 License

This project is open source and available under the MIT License.

## 👥 Authors

- **cmbigk** - [GitHub Profile](https://github.com/cmbigk)

---

**Note**: This application is designed for educational purposes and demonstrates modern full-stack development practices with Go and Next.js.
