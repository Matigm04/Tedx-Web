import React from 'react';

const Navbar = ({ activeSection, onSectionChange }) => {
    const handleNavClick = (section) => {
        onSectionChange(section);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <img src="/images/logo tedx2.png" alt="TEDxUTNCórdoba" />
                </div>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <span 
                            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                            onClick={() => handleNavClick('home')}
                        >
                            Inicio
                        </span>
                    </li>
                    <li className="nav-item">
                        <span 
                            className={`nav-link ${activeSection === 'ediciones' ? 'active' : ''}`}
                            onClick={() => handleNavClick('ediciones')}
                        >
                            Ediciones
                        </span>
                    </li>
                    <li className="nav-item">
                        <span 
                            className={`nav-link ${activeSection === 'inscripciones' ? 'active' : ''}`}
                            onClick={() => handleNavClick('inscripciones')}
                        >
                            Inscripciones
                        </span>
                    </li>
                    <li className="nav-item">
                        <span 
                            className={`nav-link ${activeSection === 'admin' ? 'active' : ''}`}
                            onClick={() => handleNavClick('admin')}
                        >
                            Dashboard
                        </span>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
