# ⚡ Electronics Hub ⚡

Welcome to **Electronics Hub**, your premier destination for cutting-edge electronics! This is a full-stack e-commerce application built with Next.js, featuring user authentication, product management, and a MongoDB backend.

## ✨ Features

* **User Authentication:** Secure sign-in/sign-out functionality using NextAuth.js, integrated with Google OAuth.
* **Product Management:**
    * Add new products to the database via a dedicated dashboard page.
    * View a comprehensive list of all products.
    * View individual product details on dedicated pages.
* **Responsive Design:** A sleek, mobile-first design built with Tailwind CSS ensures a great user experience on any device.
* **Persistent Storage:** Product data is securely stored and retrieved from a MongoDB database.
* **Dynamic Routing:** Next.js App Router for efficient and intuitive navigation.
* **Persistent Layout:** Navbar and Footer displayed across all pages using Next.js Layouts.

---

## 🚀 Technologies Used

* **Framework:** [Next.js](https://nextjs.org/) (React Framework)
* **Authentication:** [NextAuth.js](https://next-auth.js.org/)
* **Database:** [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
* **Database ODM:** [Mongoose](https://mongoosejs.com/) (If used, otherwise just mention MongoDB)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Deployment:** [Vercel](https://vercel.com/)
* **Package Manager:** npm or yarn

---

## 🛠️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have met the following requirements:

* Node.js (LTS version recommended)
* npm or yarn
* A Google Cloud Project for OAuth credentials.
* A MongoDB Atlas account and a cluster set up.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root of your project and add the following environment variables:
