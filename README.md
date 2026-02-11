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

### Project Versions

Backend
-dotnet version: 10.0.102
-Target Framework: net8.0

Frontend
-Angular Framework: 21.0.0
-Angular CLI: 21.0.4
-npm: 11.7.0
-node.js: 24.12.0

### Screenshots


<img width="1153" height="603" alt="SupabaseSchema" src="https://github.com/user-attachments/assets/f899bca9-edd4-4ea5-af1a-809d3540bbd1" />


<img width="2547" height="1280" alt="Backend" src="https://github.com/user-attachments/assets/1e8ec654-55fa-4d88-9577-78ec0443915f" />


<img width="1342" height="1267" alt="Homepage" src="https://github.com/user-attachments/assets/14af83fc-a349-4d96-a016-0705d39eca85" />


<img width="1031" height="897" alt="Players" src="https://github.com/user-attachments/assets/fdfc2f35-b004-4f4f-9240-9064e9714835" />


<img width="1243" height="1066" alt="Matches" src="https://github.com/user-attachments/assets/54b164e7-0835-4c52-8953-aa7fd04e310e" />
