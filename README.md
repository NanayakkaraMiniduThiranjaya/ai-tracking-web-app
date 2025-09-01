# MediCare - Your AI Health Companion

MediCare is a comprehensive AI-powered health companion application designed to help users manage their health through intelligent symptom analysis, medical document processing, hospital booking, and emergency assistance. Built with modern web technologies and powered by Google AI, MediCare offers an intuitive, AI-driven experience for managing health-related tasks.

## 🌐 Live Demo

You can check out the live demo of the project here: 💖 [MediCare - Live Demo](https://byte-root-team.vercel.app/)

## 🌟 Overview

MediCare combines cutting-edge AI technology and robust web frameworks to provide an intuitive platform for managing health and medical tasks. Users can interact with AI-powered tools for symptom checking, medical image analysis, drug interaction checking, and more.

## 🔐 Authentication System

MediCare now includes a comprehensive authentication system with:

- **Google OAuth Integration** - Sign in with your Google account
- **Protected Routes** - Dashboard and user-specific features require authentication
- **Session Management** - Secure JWT-based session handling
- **User Profile Integration** - Personalized experience based on user information

### Setting up Authentication

1. **Environment Variables**: Configure your `.env` file with:
   ```env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-super-secret-key-here-change-this-in-production
   
   # Google OAuth (Get from Google Cloud Console)
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   
   # MongoDB Database
   MONGODB_URI=mongodb+srv://username:password@cluster0.xxx.mongodb.net/database?retryWrites=true&w=majority
   ```

2. **MongoDB Setup**:
   - Create a MongoDB Atlas account at [mongodb.com](https://www.mongodb.com/cloud/atlas)
   - Create a new cluster
   - Create a database user with read/write permissions
   - Get your connection string and replace the placeholder values
   - Whitelist your IP address in Network Access

3. **Google OAuth Setup**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URIs: `http://localhost:3000/api/auth/callback/google`

### Authentication Features

- **Sign In Page**: Beautiful, responsive sign-in interface at `/auth/signin`
- **Error Handling**: Comprehensive error handling at `/auth/error`
- **Protected Dashboard**: User must be authenticated to access dashboard
- **User Session**: Displays user information in the sidebar and header
- **User Profile**: Complete profile management at `/dashboard/profile`
- **MongoDB Integration**: Persistent user data storage
- **Sign Out**: Secure sign out functionality

### Database Features

- **User Profiles**: Complete user information including medical data
- **Emergency Contacts**: Store emergency contact information
- **Medical Information**: Track allergies, medications, conditions
- **User Preferences**: Customizable app settings and notifications
- **Session Management**: Secure database-backed sessions

---

## ✨ Key Features

### 🤖 AI-Powered Health Tools

- **AI Chatbot**⚡: Get AI advice with our latest Gemini integrated features.
- **Symptom Checker** 🔥: Get preliminary health advice based on your symptoms.
- **Medical Image Analysis** 💯: AI-powered diagnosis of medical images.
- **Drug Interaction Checker** ✅: Check potential medication interactions.
- **Report Simplifier** 💭: Translate complex medical reports into easy-to-understand language.
- **Multi-language Support** 🌍: Reports and health information available in multiple languages.

### 🏥 Hospital & Appointment Management

- **Hospital Directory** 💼: Search and filter hospitals by specialty and location.
- **Appointment Booking** 🗓️: Schedule visits with healthcare providers.
- **Hospital Ratings** ⭐: View ratings and reviews from other patients.
- **Speciality-based Search** 🔍: Find hospitals by medical specialization.

### 💬 Interactive AI Chatbot

- **24/7 Health Assistant** 🕒: Get instant answers to health questions anytime.
- **Contextual Conversations** 💬: Maintain conversation history for follow-ups.
- **Medical Q&A** 🧠: Ask specific medical questions and receive informed responses.

### 🚨 Emergency Services

- **Emergency Form** 🚑: Quick access to emergency assistance with one click.
- **Location-based Recommendations** 📍: Find the nearest hospitals during emergencies.
- **AI Emergency Assessment** 🚨: Get immediate guidance for emergency situations.

### 📋 Document Management

- **Medical Report Upload** 🖼️: Support for PDF and image file uploads to simplify.
- **Document Analysis** 🤓: AI-powered analysis of medical documents.
- **Report Translation** 🌐: Translate medical reports into preferred languages.

---

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 14 (App Router) 👩‍💻
- **Language**: TypeScript 🔠
- **Styling**: Tailwind CSS 🎨
- **UI Components**: Radix UI 🎛️, **ShadCN UI** 🧩
- **Animations**: Framer Motion 🎢
- **Icons**: Lucide React 🔲
- **Charts**: Recharts 📊
- **Schema Validation**: Zod 📏
- **Date Handling**: date-fns 📅
- **Class Management**: class-variance-authority, clsx, tailwind-merge 🎚️

### AI Integration

- **Framework**: Google AI Genkit 🤖
- **Custom Flows**: Custom AI flows for health-related tasks 🌟

### Additional Libraries

- **next-themes** 🌙🌞: Dark/Light mode support
- **Responsive Design** 📱: Mobile-first approach
- **Type Safety** 🛡️: Full TypeScript implementation

---

## 🚀 Getting Started

### Prerequisites

- **Package Manager**: npm or yarn
- **Google AI API Key**: Obtain an API key from Google AI for integration.
