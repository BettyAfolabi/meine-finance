# Personal Finance Tracker

A simple React + TypeScript application to help users track their personal income and expenses. Users can categorize transactions, filter and sort them, and persist data locally. 

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Getting Started](#getting-started)  
- [Technologies](#technologies)  
- [Testing](#testing)
- [Future Improvements](#future-improvements)  

---

## Project Overview

The Personal Finance Tracker enables users to monitor and analyze their finances by recording income and expenses with detailed categorization and filtering options. Data is persisted using browser storage, allowing users to keep their data across sessions.

---

## Features

- Input form to add income and expense transactions with fields:  
  - Amount  
  - Date  
  - Category (customizable)  
  - Optional notes  
- Create and manage custom categories  
- View transaction list with sorting and filtering by:  
  - Date  
  - Category  
  - Amount  
- Persistent storage via `localStorage`  
- Responsive design for desktop and mobile  

---

## Getting Started

### Prerequisites

- Node.js (v14 or later)  
- npm or yarn  

### Installation

1. Clone the repo  
   ```bash
   git clone https://github.com/yourusername/personal-finance-tracker.git
   cd personal-finance-tracker

2. Install dependencies
    npm install
    # or
    yarn install
   
3. Start the development server
    npm start
    # or
    yarn start

4. Open your browser and navigate to http://localhost:5173

## Technologies
   - React
   - TypeScript
   - Tailwind CSS
   - Jest & React Testing Library for tests

 ## Live site  
  [meine-finance](https://meine-finance.vercel.app/)

  ##  Future Improvements

  Here are a few planned enhancements to make this personal finance tracker more powerful and user-friendly:

  - **Edit Transactions** – Allow users to modify existing transactions.
  - **Visual Charts** – Integrate chart libraries (e.g., Chart.js or Recharts) to visualize spending trends.
  - **Search & Filters** – Add search input and advanced filters for transaction history.
  - **Authentication** – Allow user login/signup to sync data across devices.
  - **Dark Mode Toggle** – Improve theme switching experience with a toggle.
  - **More Tests** – Improve test coverage, especially for edge cases and error states.

  Contributions are welcome! Feel free to fork the repo and open a pull request with new ideas 🚀
