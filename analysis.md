\# ResearchLog Project Analysis



\## 1. Application Architecture



ResearchLog is built with Next.js App Router and uses browser-based client-side logic for interaction and storage.



The app is organized into four main parts:



| Layer          | File               | Responsibility                                                      |

| -------------- | ------------------ | ------------------------------------------------------------------- |

| Page structure | `app/page.tsx`     | Defines the visible screens and DOM structure.                      |

| Root layout    | `app/layout.tsx`   | Sets metadata, loads global CSS, and loads the client-side script.  |

| Styling        | `app/globals.css`  | Controls layout, visual design, responsive UI, and page visibility. |

| Client logic   | `public/script.js` | Handles routing, localStorage, rendering, and user interactions.    |



\---



\## 2. Page Structure



`app/page.tsx` contains the main screen sections of the service.



| Section      | Purpose                                      |

| ------------ | -------------------------------------------- |

| `home`       | Account entry and service introduction       |

| `dashboard`  | Project statistics and project summary cards |

| `history`    | Searchable and filterable project history    |

| `log-detail` | Detailed view for a selected project         |

| `log-new`    | Form for creating a new research project     |



Each section uses a `data-page` attribute. This allows the JavaScript logic to show or hide screens without using separate routes.



Example:



```tsx

<section id="dashboard" className="page" data-page="dashboard">

&#x20; ...

</section>

```



\---



\## 3. Routing Method



ResearchLog uses hash-based navigation.



Examples:



```text

\#home

\#dashboard

\#history

\#log-new

\#log-\[projectId]

```



When the hash changes, the app checks the current hash and displays the matching screen. This makes the service behave like a single-page application while keeping the structure simple.



Important functions:



| Function                | Role                                                         |

| ----------------------- | ------------------------------------------------------------ |

| `routeToCurrentHash()`  | Reads the URL hash and decides which page should be shown.   |

| `showPage()`            | Activates the correct section using the `active-page` class. |

| `setActiveNavigation()` | Updates the active navigation link.                          |



\---



\## 4. Data Storage



ResearchLog uses localStorage to save data in the browser.



Stored data includes:



| Data          | Description                                      |

| ------------- | ------------------------------------------------ |

| Current user  | Name or email used as a local workspace identity |

| Research logs | Project records created by the user              |

| Todos         | Next actions stored inside each project          |

| Paper notes   | Notes connected to research projects             |



The app creates user-specific storage keys so different names or emails can have separate workspaces in the same browser.



\---



\## 5. Main Client-Side Functions



The main behavior is implemented in `public/script.js`.



| Function                | Purpose                                                                              |

| ----------------------- | ------------------------------------------------------------------------------------ |

| `initializeApp()`       | Starts the app, loads current user data, binds events, and renders the first screen. |

| `handleAccountSubmit()` | Saves the current user and moves the app to the dashboard.                           |

| `handleProjectSubmit()` | Creates a new project object from form input and saves it.                           |

| `renderDashboard()`     | Updates project statistics and dashboard cards.                                      |

| `renderHistory()`       | Displays the saved projects using search and status filters.                         |

| `renderLogDetail()`     | Renders the selected project’s detailed information.                                 |

| `saveUserData()`        | Saves project and paper data to localStorage.                                        |

| `loadSampleData()`      | Loads sample projects for testing the service.                                       |



\---



\## 6. Project Status Logic



Each research project can be classified as:



\* Planned

\* In Progress

\* Completed



The project status is connected to todo completion and project progress. This allows the dashboard to show how many projects are planned, active, or completed.



The dashboard uses this logic to update:



\* Total projects

\* Completed projects

\* In-progress projects

\* Planned projects



\---



\## 7. UI Design Structure



The visual structure is based on card-style panels and clear sections.



Main UI components include:



\* Header navigation

\* Account entry card

\* Dashboard statistic cards

\* Project summary cards

\* Search and filter controls

\* Project detail panel

\* New project form

\* Todo input list

\* Paper note section



The design focuses on making research progress easy to scan.



\---



\## 8. Key Development Problems and Fixes



\### 8.1 Static Website Structure



The project was first structured as a static website. To run it as a Next.js app, the files had to be separated by role.



Fix:



```text

index.html  → app/page.tsx

style.css   → app/globals.css

script.js   → public/script.js

```



\---



\### 8.2 JSX Syntax



HTML syntax could not be used directly in React JSX.



Fix:



\* `class` was changed to `className`.

\* `autocomplete` was changed to `autoComplete`.

\* Self-closing tags were corrected.

\* Only the body content was moved into the page component.



\---



\### 8.3 Layout and Page Separation



The layout component and page component were accidentally placed in the same file, which caused a duplicate default export error.



Fix:



\* `RootLayout` was kept in `app/layout.tsx`.

\* `Home` was kept in `app/page.tsx`.



\---



\### 8.4 Page Visibility After Login



After account entry, the app moved to `#dashboard`, but the dashboard was not visible.



Cause:



\* The JavaScript used the `active-page` class.

\* The CSS visibility rule initially did not fully match this class.



Fix:



```css

.page {

&#x20; display: none;

}



.page.active-page {

&#x20; display: block;

}

```



The page switching logic was then aligned with this CSS rule.



\---



\## 9. Strengths



\* Simple project-centered research workflow

\* Works without a backend server

\* Clear dashboard summary

\* Search and filter support

\* Separate local workspaces using name or email

\* Easy to test with sample data



\---



\## 10. Limitations and Future Work



Current limitations:



\* Data is stored only in the browser.

\* There is no real authentication system.

\* Data is not synchronized across devices.

\* Collaboration is not supported.



Future improvements:



\* Add cloud database storage.

\* Add real login authentication.

\* Add calendar-based todo tracking.

\* Add project export and import.

\* Refactor DOM-based logic into React state-based components.

