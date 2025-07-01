import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';

// Componentes
import Navbar from './components/Navbar';
import Home from './components/Home';
import Inscripciones from './components/Inscripciones';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleNavigateToInscripciones = () => {
    setActiveSection('inscripciones');
  };

  return (
    <div className="App">
      <Navbar 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />
      
      {activeSection === 'home' && (
        <Home onNavigateToInscripciones={handleNavigateToInscripciones} />
      )}
      
      {activeSection === 'inscripciones' && (
        <Inscripciones />
      )}
      
      {activeSection === 'ediciones' && (
        <div className="main-content">
          <section className="section">
            <div className="container">
              <h2 className="section-title">Ediciones Anteriores</h2>
              <p className="section-subtitle">
                Conocé las ediciones anteriores de TEDxUTNCórdoba y reviví los mejores momentos.
              </p>
              <div className="text-center">
                <p style={{ fontSize: '1.2rem', color: '#666', fontStyle: 'italic' }}>
                  Contenido en desarrollo...
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
      
      {activeSection === 'admin' && (
        <div className="main-content">
          <section className="section">
            <div className="container">
              <h2 className="section-title">Dashboard Administrativo</h2>
              <p className="section-subtitle">
                Panel de administración para gestionar inscripciones y ver estadísticas.
              </p>
              <div className="text-center">
                <p style={{ fontSize: '1.2rem', color: '#666', fontStyle: 'italic' }}>
                  Contenido en desarrollo...
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
      
      <Footer />
    </div>
  );
}

export default App;
