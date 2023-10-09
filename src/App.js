import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wayne Mak</h1>
        <p>Software Developer and artist from San Jose, California</p>
      </header>
      <section className="About">
        <h2>About Me</h2>
        <p>Hello! My name is Wayne. Here, you will find my projects, both technical and artistic. I like coding and playing music. Dive into my creative process.</p>
      </section>
      <section className="Projects">
        <h2>Projects</h2>
        <section>
          <p><a href="https://github.com/alberttmy1/NASA-JPL">Space Mission Trajectory Visual Analysis</a></p>
          <p><a href="https://github.com/makwayne117/spice-api">API for Getting Mission Data From NASA Spice Kernels</a></p>
          <p><a href="https://github.com/makwayne117/angular-memory">Memory Game created in Angular</a></p>
        </section>
      </section>
      <section className="Contact">
        <h2>Contact Me</h2>
        <a href= "mak.wayne117@gmail.com">Email</a>
      </section>
    </div>
  );
}

export default App;
