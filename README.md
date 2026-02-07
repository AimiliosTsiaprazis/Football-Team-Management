# ⚽ Football Team Management System

Full-stack web application for managing football team with players and matches.

## Tech Stack
- Frontend: Angular
- Backend: .NET Web Custom API
- Database: SQL / Supabase
- Authentication: Supabase Auth
- Version Control: GitHub

## Features
- 1 Team Management
- Player Management (CRUD)
- Match Management (CRUD)

## Setup Instructions

### Supabase Database Tables

-- Players

CREATE TABLE players (
  player_id BIGSERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  position TEXT NOT NULL,
  shirt_number INT,
  nationality TEXT NOT NULL,
  is_active BOOLEAN DEFAULT TRUE
);

-- Matches

CREATE TABLE matches (
  match_id BIGSERIAL PRIMARY KEY,
  opponent TEXT,
  match_date DATE,
  location TEXT,
  goals_for INT,
  goals_against INT
);

Add your Supabase ConnectionString at the appsettings.json file for the backend like this:
"Host=YOUR-HOST;Database=YOUR-DATABASE;Username=YOUR_USERNAME;Password=YOUR-PASSWORD;SSL Mode=Require;Trust Server Certificate=true"

### Backend

```bash
cd backend
cd FootballTeamAPI
dotnet restore
dotnet run
```

### Frontend

```bash
cd frontend
cd footballWebApp
npm install
ng serve
```

### INFO

Both Backend and Frontend should run so no errors appear
