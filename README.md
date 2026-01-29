## 🧠 Design & Development Decisions

- **Vite over Next.js**: Faster builds, simpler mental model, and ideal for a content-focused, animation-heavy portfolio  
- **Tailwind CSS**: Enables rapid iteration while maintaining a consistent, scalable design system  
- **Framer Motion**: Chosen for precise control over animation timing, easing, and choreography  
- **Google Fonts via HTML `<link>`**: Prevents PostCSS/Vite build issues and ensures production reliability  
- **Strict Tailwind content paths**: Ensures fast builds and avoids infinite file scanning issues on CI/CD  

---

## 📌 IMPORTANT (Read This Before Modifying)

```txt
This project is production-tested and deployed for a real client.

1. Framework Choice
   - This is a Vite + React project, NOT Next.js.
   - There is no `pages/` or `app/` routing system.
   - Adding Next.js-style routing will break the build.

2. Font Loading (Critical)
   - Google Fonts are loaded via <link> tags in index.html.
   - Fonts MUST NOT be imported using CSS @import.
   - Reintroducing CSS @import may cause Vite/PostCSS builds
     to hang or fail on Vercel/Netlify.

3. Tailwind Configuration
   - Tailwind content paths are intentionally strict:
       ./index.html
       ./src/**/*.{ts,tsx,js,jsx}
   - Do NOT add broad paths like ./pages/** or ./app/**
     unless those folders actually exist.
   - Incorrect paths can cause infinite JIT scans
     and stalled production builds.

4. Case-Sensitive Imports
   - The project is deployed on Linux-based environments.
   - File and folder name casing MUST match imports exactly.
   - What works on Windows locally may fail in production.

5. Client Context
   - Design decisions prioritize clarity, authority,
     and professionalism over experimental UI.
   - Animations are subtle by design and should not
     be exaggerated when extending the project.
```

```txt
📈 Client Value Delivered

A polished digital identity suitable for government, corporate, and international audiences

Clear articulation of professional experience and large-scale impact

A portfolio that works equally well for:

Tourism boards

International collaborators

Event partners

Media & institutional stakeholders
```
```txt

👤 Author

NilamXSC
Frontend Developer | UI Engineer

GitHub: https://github.com/NilamXSC
```
