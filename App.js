// src/App.js
import React from 'react';
import './styles/style.css'; // Importing the updated CSS file

function App() {
    const loadClasses = () => {
        console.log("Loading classes...");
        // Add functionality to load classes here
    };

    const loadAttendance = () => {
        console.log("Loading attendance...");
        // Add functionality to load attendance here
    };

    const showRegisterForm = () => {
        console.log("Showing register form...");
        // Add functionality to show registration form here
    };

    return (
        <div>
            <header>
                <h1>Superhero Training Management</h1>
                <nav>
                    <button onClick={loadClasses}>Classes</button>
                    <button onClick={loadAttendance}>Attendance</button>
                    <button onClick={showRegisterForm}>Register</button>
                </nav>
            </header>
            <main id="main-content">
                <h2>Welcome to the Superhero Training Portal!</h2>
                <p>Select an option from the menu.</p>
            </main>
            <footer>
                <p>©2024 Superhero Training Management</p>
            </footer>
        </div>
    );
}

export default App;

// Add your functions like loadClasses, loadAttendance, and showRegisterForm here