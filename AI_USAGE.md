\# AI Usage Record



This document explains how AI was used during the development of the ResearchLog web service.



\---



\## Tool Used



\* OpenAI ChatGPT

\* OpenAI Codex CLI



\---



\## Purpose of AI Use



AI was used to support the development of a browser-based research project management web service. The main focus was on implementing and improving the frontend structure, converting the static website into a Next.js project, generating or revising code, and resolving development errors.



\---



\## AI-Assisted Development Tasks



| Area                  | AI Usage                                                                                                                                      |

| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |

| Web service structure | Helped plan the page structure for Home, Dashboard, Research History, Project Detail, and New Project screens.                                |

| UI implementation     | Helped convert the original static HTML structure into a Next.js-compatible JSX structure.                                                    |

| CSS integration       | Helped move the original styling into the Next.js global CSS file and adjust page visibility rules.                                           |

| JavaScript logic      | Helped preserve and connect the existing client-side logic for login, project creation, routing, filtering, and localStorage.                 |

| Next.js migration     | Helped convert the project from `index.html`, `style.css`, and `script.js` into `app/page.tsx`, `app/globals.css`, and `public/script.js`.    |

| Error debugging       | Helped identify and fix errors such as missing `package.json`, duplicate default exports, script loading issues, and page switching problems. |

| Local data handling   | Helped organize localStorage-based user data, project records, todos, and paper notes.                                                        |

| Sample data logic     | Helped support the sample data feature used to test the service quickly.                                                                      |



\---



\## Main Development Process Using AI



\### 1. Static Website to Next.js Migration



The original version of ResearchLog was structured as a static website using:



```text

index.html

style.css

script.js

```



AI was used to guide the migration into a Next.js App Router structure:



```text

app/page.tsx

app/layout.tsx

app/globals.css

public/script.js

```



This allowed the project to run with `npm run dev` and follow a modern frontend project structure.



\---



\### 2. JSX Conversion



The original HTML body content was converted into JSX. During this process, AI helped identify syntax changes needed for React and Next.js.



Examples:



| Original HTML     | JSX Version                        |

| ----------------- | ---------------------------------- |

| `class`           | `className`                        |

| `autocomplete`    | `autoComplete`                     |

| `<input>`         | `<input />`                        |

| HTML body content | `Home` component in `app/page.tsx` |



\---



\### 3. Script Loading and Interaction Logic



The original `script.js` contained the main browser interaction logic. AI helped connect this file to the Next.js project through `public/script.js` and `app/layout.tsx`.



The script handles:



\* Account entry

\* Project creation

\* Dashboard rendering

\* Research history rendering

\* Project detail rendering

\* Hash-based navigation

\* localStorage save and load

\* Sample data loading



\---



\### 4. Page Switching Issue



After login, the dashboard did not appear correctly. The cause was a mismatch between the JavaScript page switching class and the CSS visibility rule.



AI-assisted fix:



\* Use `active-page` as the consistent active screen class.

\* Make `.page` hidden by default.

\* Display only `.page.active-page`.

\* Update `showPage()` to activate the correct `\[data-page]` section.



\---



\### 5. Development Error Resolution



AI was used to understand and fix several implementation errors:



| Error                         | Resolution                                                                      |

| ----------------------------- | ------------------------------------------------------------------------------- |

| Missing `package.json`        | Created a new Next.js project and moved the existing web service files into it. |

| Duplicate `export default`    | Separated `RootLayout` into `app/layout.tsx` and `Home` into `app/page.tsx`.    |

| Script timing issue           | Adjusted script initialization so the app could run after the DOM was ready.    |

| Login screen transition issue | Matched JavaScript routing with CSS active page rules.                          |



\---



\## Final AI Use Scope



AI was used as a coding and debugging assistant for building the web service. The main use was frontend implementation support, Next.js migration support, JavaScript logic debugging, and UI behavior correction.



