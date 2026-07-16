# 🍛 Foodly: Localized Indian Food Delivery Platform

Foodly is a production-inspired, highly polished, full-stack food delivery web application mimicking real-world products like Swiggy, Zomato, and Uber Eats. Built using modern **React 19**, **TypeScript**, **Express**, and **Tailwind CSS**, it features a fully functional sandbox ecosystem with physical delivery simulation, dynamic pricing, and automated role switching.

This edition has been **fully localized for the Indian market**, featuring pricing in Indian Rupees (₹) and a curated menu of famous Indian cuisines (from Biryanis and Dhabas to Butter Masala and Gulab Jamun).

---

## 🎨 Core Architectural Features

### 🛒 1. Customer Dining Hub
*   **Indian Culinary Directory**: Real-time searching, filter tags, and rating-based sorting for local kitchens.
*   **Dynamic Basket Engine**: Add delicacies, adjust quantities, select saved places, and calculate total amounts with localized taxes and delivery charges.
*   **Indian Promo Coupon System**: Apply active codes (like `WELCOME100` or `FEAST20`) for immediate deductions.
*   **Interactive GPS Tracker**: Watch a simulated delivery bike move in real-time across a dynamic vector road grid directly towards your registered address!
*   **Delicacy Reviewing**: Leave 5-star ratings and written feedback that updates kitchen reviews instantly.

### 🍳 2. Merchant/Owner Control Panel
*   **Active Kitchen Cookboard**: Accept incoming orders, view items, or cancel requests.
*   **Cooking Prep Progression**: Push accepted orders through states (`Accepted` ➔ `Preparing` ➔ `Ready for Pickup`) to notify drivers and customers.
*   **Menu Card CRUD**: Create, edit, and delete dishes with pricing (₹), descriptions, category tags, and vegetarian indicators.
*   **Kitchen Configurator**: Live modify your brand logo, business opening hours, minimum order limits, and custom base delivery charges.
*   **Merchant Analytics Charts**: 7-day revenue trend visualizations and dynamic best-selling dish leaderboard bars.

### 🛵 3. Courier / Delivery Partner Console
*   **On/Off Duty Toggle**: Switch your active availability with reactive status chips.
*   **Marketplace Job Board**: Claim ready kitchen orders and receive the calculated trip delivery payout.
*   **Active Delivery Navigator**: Step-by-step trip advancement (`Departing to Restaurant` ➔ `Picked Up` ➔ `On the Way` ➔ `Delivered`) to guide customers live.
*   **Earnings Audit Trail**: Full ledger of completed trips with trip IDs, dates, restaurant names, and gross cash payouts.

### 🛡️ 4. Platform Admin Controller
*   **Consolidated Financial Analytics**: Track platform gross merchandise volume (GMV) and the system's 15% service commission.
*   **System Registrations Audit**: View active accounts, total outlets, and live platform order count.
*   **Coupons Publisher**: Manage active codes, set minimum cart limits, select percentage or fixed value reductions, and revoke old vouchers.

---

## 🛠️ Technology Stack & Tooling

*   **Frontend Library**: React 19 (Functional Components, Hooks, Context Providers)
*   **Development Server / Bundler**: Vite 6 & Tailwind CSS 4 (using rapid utility compilation)
*   **Routing & State Management**: Native state models & declarative component routing
*   **Backend Server**: Express.js with TypeScript (`tsx` runner in development)
*   **Database**: File-based local JSON database (`/backend/data.json`) ensuring robust state persistence across server restarts
*   **Styling**: Modern Tailwind CSS utility styling with beautiful dark-mode support and custom Framer Motion animations
*   **Icons**: Clean SVG vector glyphs loaded dynamically from `lucide-react`

---

## 👥 Demo Sandbox Accounts

Use the **Foodly Sandbox Console** floating widget on the interface to swap instantly between any of the following pre-configured user sessions:

| Name | Role / Persona | Email | Password | Key Functionality to Test |
| :--- | :--- | :--- | :--- | :--- |
| **Alice** | 🛒 Customer | `alice@gmail.com` | `alice123` | Order Indian delicacies, use coupons, and track delivery on GPS |
| **Marc** | 🍔 Kitchen Owner | `burger_owner@foodly.com` | `burger123` | Configure dhabas, edit dishes, and cook incoming orders |
| **David** | 🛵 Delivery Partner | `driver_david@foodly.com` | `driver123` | Claim delivery jobs, change duty status, and view earnings logs |
| **Admin** | 🛡️ System Administrator | `admin@foodly.com` | `admin123` | Verify total commissions, inspect global transactions, and print coupons |

---

## 🚀 Running Local Setup

### Prerequisites
*   [Node.js](https://nodejs.org/) (v18 or higher recommended)
*   npm or yarn

### Quick Installation & Start
1.  **Clone the workspace** or extract the ZIP file.
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Run in Development Mode**:
    ```bash
    npm run dev
    ```
    *Open [http://localhost:3000](http://localhost:3000) to view the live dashboard interactive application.*

4.  **Build & Package for Production**:
    ```bash
    npm run build
    npm run start
    ```

---

## 📁 File Structure Overview

*   `/backend/routes.ts`: Main REST API endpoints representing customer orders, chef management, and driver handshakes.
*   `/backend/db.ts`: Local Database engine carrying persistent state reads/writes from `/backend/data.json` with localized Indian seeds.
*   `/shared/types.ts`: Shared TypeScript types, status enums, and models ensuring absolute front-and-backend type safety.
*   `/src/components/CustomerDashboard.tsx`: High fidelity customer view including search chips and checkout.
*   `/src/components/OwnerDashboard.tsx`: Merchant portal displaying daily performance and menu CRUDs.
*   `/src/components/DriverDashboard.tsx`: Fleet management and transit workflows.
*   `/src/components/AdminDashboard.tsx`: Financial controller.
*   `/src/components/DemoSwitcher.tsx`: Sandbox float toggle.
