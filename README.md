# Vision Friend

**Vision Friend** is a personal project to showcase my son's drawings and doodles, and at the same time serves as a learning platform for **Next.js 16 + React + Server Actions + Cloudinary**.  

---

## Project Overview

- Frontend built with **Next.js 16 App Router**  
- Images stored on **Cloudinary**, accessed directly via **Server Actions**  
- Data management using **Prisma + SQLite** (planned for later phases)  
- Responsive layout for mobile, tablet, desktop, and even smart TV  
- Goal: simple, maintainable, low-cost, and focused on learning modern frontend techniques  

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16 (App Router) | Frontend framework |
| React 18 | UI building |
| Tailwind CSS | Styling and responsive layout |
| Cloudinary | Image storage and delivery |
| Prisma + SQLite | Data management (future phase) |
| Server Actions | Replace API fetch for secure server-side data access |

---

## Phase 1 Features

- Fetches a list of images from a specified Cloudinary folder  
- Uses **Server Actions** to access data directly within Server Components  
- Renders a responsive image gallery  
- Leverages Next.js 16 features, including App Router and Server Components  
- Page caching with `revalidate = 5` seconds to ensure Cloudinary updates are reflected  

---

## Learning Highlights

1. **Next.js 16 App Router & Server Components**  
   - Understanding SSR and client-side hydration  
   - Using `revalidate` to control page caching  
   - Server Actions as a secure alternative to API fetch  

2. **Cloudinary API Usage**  
   - Securely fetch private images  
   - Sorting and pagination (up to 50 images)  

3. **Responsive Layout**  
   - Tailwind `grid` + `md:grid-cols-4` for multi-screen support  

4. **Environment Variables Management**  
   - Using `.env.local` to store Cloudinary credentials  
   - Keeps sensitive information out of version control  

---

## Local Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
http://localhost:3000

## TODO Configuration for image panel size