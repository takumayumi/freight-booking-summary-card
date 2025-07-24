# Freight Booking Summary Card – UX/UI Developer Take-Home Test (Road Central)

Thank you for the opportunity to complete this take-home assessment. This project addresses **Task 2: UI Component Implementation** as part of the UX/UI Developer application process for Road Central.

## Task Overview

> **Objective:**  
> Develop a **responsive** and **accessible** UI component for a freight booking summary card using **HTML/CSS/JS** or a modern framework.

### Component Requirements

- **Origin and Destination** display
- **Vehicle Type**
- **Estimated Price**
- **Edit** and **Confirm** buttons

## Live Preview

[View Live Demo](https://freight-booking-summary-card.vercel.app/)

## Repository

[GitHub Repository](https://github.com/takumayumi/freight-booking-summary-card)

## Tech Stack

- **Framework**: React (Next.js 15)
- **Styling**: Tailwind CSS 4
- **TypeScript**: Enabled for better type safety
- **Accessibility**: Semantic HTML and keyboard navigable controls
- **Responsiveness**: Mobile-first design using Tailwind's utility classes

## Thought Process

1. **Component Structure**  
   The UI is built as a reusable card component, with clear sections for location, vehicle details, pricing, and actions.

2. **Responsiveness**  
   Tailwind CSS was used to create a layout that adapts seamlessly from mobile to desktop breakpoints.

3. **Accessibility**
   - Used semantic tags: `<section>`, `<button>`, `<dl>` for structured data
   - Buttons include `aria-label`s for screen readers
   - All interactive elements are focusable and keyboard-friendly

4. **Reusability & Maintainability**
   - Component logic is separated into small, readable chunks
   - Props and types are documented
   - Utility-first classes keep styles consistent and maintainable

## How to Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/takumayumi/freight-booking-summary-card.git

# 2. Navigate into the directory
cd freight-booking-summary

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev
```

## Submission Notes

- Code is commented to explain implementation decisions
- Fully responsive and tested on multiple screen sizes
- Adheres to accessibility best practices

## Contact

If you have any questions or feedback, feel free to reach out.
Thanks again for the opportunity!
