import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';

import Contact from './components/Contact';
import Footer from './components/Footer';
import MouseFollower from './components/MouseFollower';

function App() {
  return (
    <div className="app">
      <MouseFollower />
      <Header />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App;
