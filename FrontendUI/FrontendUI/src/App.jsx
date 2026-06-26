import React, { useState } from 'react';
import './App.css';

function App() {
  // State hook to keep track of a counter
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      {/* Header / Navigation */}
      <header className="navbar">
        <div className="logo">MyReactApp</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="main-content">
        <section className="hero">
          <h1>frontend ui</h1>
          <p>this is a really basic template project that is the baseplate to the frontend of serverstatsplus</p>
        </section>

        {/* Interactive Sandbox Section */}
        <section className="interactive-box">
          <h2>react can do things with variables like js</h2>
          <p>Buttons in React can change data on the screen instantly.</p>
          <div className="counter-controls">
            <button onClick={() => setCount(count - 1)}>-</button>
            <span className="count-display">{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} abradee 2026</p>
      </footer>
    </div>
  );
}

export default App;