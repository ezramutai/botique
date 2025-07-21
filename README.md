# 🛍️ Boutique Product Listing Website (`ng2`)

This is a **modern Angular + Express** full-stack web application for managing and displaying boutique fashion products. It is designed to simulate a real-world online store, with a clean product listing UI, image management, and an admin dashboard for content control.

> 🚧 **Status**: Work in progress

---

## 🌐 Live Demo

- **Frontend (Angular)**: [https://your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)
- **Backend (Express API + Admin)**: [https://your-backend-url.onrender.com](https://your-backend-url.onrender.com)

---

## ✨ Features

### 👗 User-Facing (Angular)
- [x] Responsive landing page with boutique branding
- [ ] Product listing grid with clean card UI
- [ ] Product detail page (with full description, images, and tags)
- [ ] Category-based filtering (e.g. Dresses, Shoes, Accessories)
- [ ] Search products by name or keyword
- [ ] Contact form or WhatsApp CTA
- [ ] Mobile-first responsive design
- [ ] Image gallery support for products

### 🔒 Admin Dashboard (Express + Pug or Angular)
- [x] Secure admin login route
- [ ] Create, Edit, Delete products
- [ ] Upload multiple product images
- [ ] Add product name, price, category, tags, and full rich-text description
- [ ] View product list with quick edit/delete tools
- [ ] Auto-generate public-facing product pages
- [ ] Optional integration of rich text editor (e.g. TinyMCE or custom textarea)

---

## 🧱 Tech Stack

| Layer      | Tech Used                     |
|------------|-------------------------------|
| Frontend   | Angular (standalone components, SSR-ready) |
| Styling    | Bootstrap (minimal), custom CSS |
| Backend    | Express.js + Pug (for admin views) |
| Database   | MongoDB (Mongoose ODM)        |
| Image Uploads | Multer                     |
| Deployment | Vercel (frontend), Render (backend) |

---

## 🗂️ Project Structure

```bash
ng2/
├── backend/
│   ├── routes/
│   ├── views/
│   ├── uploads/
│   └── app.js
├── frontend/
│   ├── src/app/components/
│   └── angular.json
├── README.md
└── package.json