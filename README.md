# 📖 FAQ Application (Redux with React)
A simple FAQ (Frequently Asked Questions) application built using React with Redux for state management. Users can click on each question to expand or collapse the answer.

### 🚀 Project Overview
• This project is a dynamic FAQ UI where users can toggle the visibility of answers.

• Built using React (Functional Components) with Redux for global state management.

• Uses Redux store to track which questions are expanded.

### 🛠 Tech Stack
• Frontend: React, Redux, JavaScript

• State Management: Redux

• Styling: Tailwind CSS

### 🎯 Features
✔ Displays a list of FAQ questions and answers.

✔ Click on a question to expand/collapse the answer.  

✔ Uses Redux store to manage UI state efficiently.  

✔ Persistent UI state across components using Redux.

✔ Responsive design.

### 📸 Screenshots
![image_alt](https://github.com/bismah-nasir/redux-faq/blob/3bcab4904a9f0e396b6e495c0bd4fe0ac0c2ed60/redux-faq.PNG)

### 📜 How It Works
1. **Redux Store (`store/index.js`)**

   • Manages the state of expanded questions.

   • Uses a reducer to handle the `TOGGLE_STATE` action.

   • Updates the `selectedQuestions` array in the Redux store.

3. **FAQ Component (`Question.jsx`)**

   • Uses `useSelector` to fetch the state from Redux.

   • Uses `useDispatch` to toggle question visibility.

   • Renders UI based on the state from Redux.

5. **Provider Setup (`main.jsx`)**

   • Wraps the app with the Redux `Provider` to enable global state access.

### 🚀 Live Demo
🔗 https://redux-faq.netlify.app/


### 💡 Key Learnings
• Implementing **Redux** for global state management in React.

• Using **useSelector** and **useDispatch** hooks for Redux state.

• Structuring a scalable React-Redux application.

• Managing UI state effectively using Redux reducers.
