# ResearchLog

**Live Demo:** https://researchlog-next.vercel.app/

ResearchLog is a personal research project management web service. It helps users create research projects, track progress, manage next actions, and organize related paper notes in one browser-based workspace.

---

## Project Overview

Research work is often spread across separate notes, paper lists, task records, and project files. This makes it difficult to understand which research projects are currently active, what needs to be done next, and how previous work is connected.

ResearchLog organizes research activity around individual projects. Each project can include a start date, project name, research summary, next actions, progress status, and related paper notes.

---

## Main Features

| Feature               | Description                                                                          |
| --------------------- | ------------------------------------------------------------------------------------ |
| Account entry         | Users enter a name or email to create a local personal workspace.                    |
| Project creation      | Users can create a project with a start date, title, summary, and next actions.      |
| Dashboard             | Shows the number of total, completed, in-progress, and planned projects.             |
| Research history      | Displays saved projects with search and status filtering.                            |
| Project detail view   | Provides a detailed view of each project, including summary, todos, and paper notes. |
| Todo management       | Users can add next actions, due dates, and completion states.                        |
| Paper note connection | Users can connect paper notes to related research projects.                          |
| Sample data           | Users can load sample research data to test the service quickly.                     |
| Local storage         | User data is saved in the browser using localStorage.                                |

---

## Tech Stack

* Next.js
* TypeScript
* JavaScript
* CSS
* localStorage

---

## Project Structure

```text
researchlog-next/
├─ app/
│  ├─ layout.tsx       # Root layout, metadata, global CSS, and script loading
│  ├─ page.tsx         # Main page structure
│  └─ globals.css      # Global styling and page visibility rules
├─ public/
│  └─ script.js        # Client-side logic for routing, storage, rendering, and events
├─ README.md
├─ AI_USAGE.md
├─ analysis.md
├─ package.json
└─ .gitignore
```

---

## Screen Overview

| Screen           | Role                                                              |
| ---------------- | ----------------------------------------------------------------- |
| Home             | Introduces the service and provides the account entry form.       |
| Dashboard        | Shows project statistics and project summary cards.               |
| Research History | Displays saved research projects with search and filter controls. |
| Project Detail   | Shows detailed information for a selected project.                |
| New Project      | Provides a form for creating a new research project.              |

---

## How to Run Locally

This section explains how another user can download and run this project on their own computer.

### 1. Requirements

Before running this project, make sure the following program is installed:

* Node.js

You can check whether Node.js is installed by running the following command in the terminal:

```bash
node -v
```

You can also check npm with:

```bash
npm -v
```

If Node.js is not installed, install the LTS version of Node.js first.

---

### 2. Clone the Repository

Open a terminal and run the following command:

```bash
git clone https://github.com/Kaznope/researchlog-next.git
```

Then move into the project folder:

```bash
cd researchlog-next
```

---

### 3. Install Dependencies

Install the required packages with:

```bash
npm install
```

This command installs all dependencies listed in `package.json`.

---

### 4. Run the Development Server

Start the local development server:

```bash
npm run dev
```

After the server starts, open the following address in your browser:

```bash
http://localhost:3000
```

The ResearchLog website should now run locally on your computer.

---

### 5. Local Data Storage

This project uses browser local storage to save user data.

Because of this, saved project data is stored only in the user's own browser and device.
Data created on one computer will not automatically appear on another computer.

---

### 6. Deployment URL

The deployed version of this project is available at:

```text
https://researchlog-next.vercel.app/
```

## Data Storage

ResearchLog uses browser localStorage instead of a backend database. The current user, research projects, todos, and paper notes are stored locally in the browser.

Because of this, the app can run without a server, but saved data is limited to the same browser and device.

---

## Current Limitations

* Data is not synchronized across devices.
* There is no real authentication system.
* The current version uses browser localStorage only.
* Collaboration features are not included.

---

## Future Improvements

* Add cloud storage using Firebase or Supabase.
* Add real authentication.
* Add calendar-based due date visualization.
* Add data export and import features.
* Improve paper note search and project linking.
