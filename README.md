# ⚽ Football Team Management System

Full-stack web application for managing football teams, players and matches.

## Tech Stack
- Frontend: Angular
- Backend: .NET Web Custom API
- Database: SQL / Supabase
- Authentication: Supabase Auth
- Version Control: GitHub

## Features
- Player Management (CRUD)
- Match Management
- Training Sessions
- Attendance Tracking
- Role-based Authentication (Planned)

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
