# Ivleena Chakraborty – Tourism Consultant Portfolio

A premium, performance-focused personal portfolio website built for **Ivleena Chakraborty**, Tourism Consultant at the **Assam Tourism Development Corporation (ATDC)**.  
The site showcases her professional journey, landmark tourism projects, and international collaborations with a refined visual identity inspired by Assam’s landscapes and culture.

🔗 **Live Website:** https://ivleenaportfolio.vercel.app

The portfolio features:
- A cinematic hero section inspired by the Brahmaputra and Northeast India’s terrain  
- Elegant typography using Playfair Display & Inter  
- Subtle motion-driven interactions for a premium, modern feel  
- A clean, editorial-style About section highlighting experience and impact  

---

## 🧩 Project Purpose

This project was built **for a real client**, with the goal of:
- Creating a **strong personal brand presence**
- Communicating **credibility and scale of work**
- Making the portfolio suitable for **government, international, and corporate stakeholders**
- Ensuring **fast load times, SEO-readiness, and production-grade deployment**

The design avoids gimmicks and instead focuses on **clarity, authority, and elegance**.

---

This project is production-tested and deployed for a real client.

```txt
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


📈 Client Value Delivered
```txt

A polished digital identity suitable for government, corporate, and international audiences

Clear articulation of professional experience and large-scale impact

A portfolio that works equally well for:

Tourism boards

International collaborators

Event partners

Media & institutional stakeholders
```

👤 Author
```txt
NilamXSC
Frontend Developer | UI Engineer

GitHub: https://github.com/NilamXSC
```
