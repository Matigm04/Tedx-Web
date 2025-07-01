import React from 'react';

const Home = ({ onNavigateToInscripciones }) => {
    return (
        <div className="main-content">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>TEDxUTNCórdoba 2025</h1>
                    <p>Ideas que Transforman</p>
                    <p>Viernes 10 de octubre - 17:30 hs</p>
                    <button 
                        className="cta-button"
                        onClick={onNavigateToInscripciones}
                    >
                        <i className="fas fa-ticket-alt"></i> Inscribirse Ahora
                    </button>
                </div>
            </section>

            {/* About Section */}
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="section-title">Sobre TEDxUTN</h2>
                            <p className="section-subtitle">
                                TEDxUTN es un evento organizado de forma independiente bajo licencia de TED. 
                                Nuestro objetivo es reunir a pensadores brillantes de nuestra comunidad para 
                                dar charlas cortas y poderosas que inspiren y generen conversaciones profundas.
                            </p>
                            <p>
                                En el espíritu de las ideas que valen la pena difundir, TEDxUTN presenta 
                                speakers locales e internacionales cuyas ideas y experiencias pueden cambiar 
                                actitudes, vidas y, en última instancia, el mundo.
                            </p>
                            
                            <div className="stats" style={{ display: 'flex', gap: '40px', marginTop: '40px' }}>
                                <div className="stat" style={{ textAlign: 'center' }}>
                                    <h3 style={{ color: '#e62b1e', fontSize: '2.5rem' }}>500+</h3>
                                    <p>Asistentes</p>
                                </div>
                                <div className="stat" style={{ textAlign: 'center' }}>
                                    <h3 style={{ color: '#e62b1e', fontSize: '2.5rem' }}>20+</h3>
                                    <p>Speakers</p>
                                </div>
                                <div className="stat" style={{ textAlign: 'center' }}>
                                    <h3 style={{ color: '#e62b1e', fontSize: '2.5rem' }}>4</h3>
                                    <p>Ediciones</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img 
                                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop" 
                                alt="TEDx Stage"
                                style={{ 
                                    width: '100%', 
                                    borderRadius: '15px',
                                    boxShadow: '0 20px 60px rgba(0,0,0,0.1)' 
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Event Info Section */}
            <section className="section" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <h2 className="section-title">TEDxUTNCórdoba 2025</h2>
                    <p className="section-subtitle">4ª Edición: "Ideas que Transforman"</p>
                    
                    <div className="row">
                        <div className="col-md-4" style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <div style={{ 
                                background: 'white', 
                                padding: '40px 20px', 
                                borderRadius: '15px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                height: '100%'
                            }}>
                                <i className="fas fa-calendar-alt" style={{ 
                                    fontSize: '3rem', 
                                    color: '#e62b1e', 
                                    marginBottom: '20px' 
                                }}></i>
                                <h3>Fecha y Hora</h3>
                                <p><strong>Viernes 10 de octubre de 2025</strong></p>
                                <p>17:30 hs</p>
                            </div>
                        </div>
                        
                        <div className="col-md-4" style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <div style={{ 
                                background: 'white', 
                                padding: '40px 20px', 
                                borderRadius: '15px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                height: '100%'
                            }}>
                                <i className="fas fa-map-marker-alt" style={{ 
                                    fontSize: '3rem', 
                                    color: '#e62b1e', 
                                    marginBottom: '20px' 
                                }}></i>
                                <h3>Ubicación</h3>
                                <p><strong>Auditorio UTN FRC</strong></p>
                                <p>Universidad Tecnológica Nacional</p>
                                <p>Facultad Regional Córdoba</p>
                            </div>
                        </div>
                        
                        <div className="col-md-4" style={{ textAlign: 'center', marginBottom: '40px' }}>
                            <div style={{ 
                                background: 'white', 
                                padding: '40px 20px', 
                                borderRadius: '15px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                height: '100%'
                            }}>
                                <i className="fas fa-users" style={{ 
                                    fontSize: '3rem', 
                                    color: '#e62b1e', 
                                    marginBottom: '20px' 
                                }}></i>
                                <h3>Comunidad</h3>
                                <p><strong>Dirigido principalmente a la comunidad UTN</strong></p>
                                <p>Estudiantes, graduados, docentes y no docentes</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-center" style={{ marginTop: '40px' }}>
                        <button 
                            className="btn btn-primary"
                            onClick={onNavigateToInscripciones}
                            style={{ fontSize: '1.2rem', padding: '15px 40px' }}
                        >
                            <i className="fas fa-user-plus"></i> Inscribirme al Proceso de Selección
                        </button>
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Proceso de Inscripción</h2>
                    <div className="timeline" style={{ 
                        display: 'flex', 
                        justifyContent: 'space-around',
                        flexWrap: 'wrap',
                        gap: '20px'
                    }}>
                        <div className="timeline-item" style={{ 
                            textAlign: 'center',
                            padding: '20px',
                            flex: '1',
                            minWidth: '250px'
                        }}>
                            <div style={{ 
                                width: '80px', 
                                height: '80px', 
                                backgroundColor: '#e62b1e',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 20px',
                                color: 'white',
                                fontSize: '2rem'
                            }}>
                                1
                            </div>
                            <h4>Inscripción</h4>
                            <p><strong>19/08/24 al 25/09/24</strong></p>
                            <p>Completa el formulario de inscripción al proceso de selección</p>
                        </div>
                        
                        <div className="timeline-item" style={{ 
                            textAlign: 'center',
                            padding: '20px',
                            flex: '1',
                            minWidth: '250px'
                        }}>
                            <div style={{ 
                                width: '80px', 
                                height: '80px', 
                                backgroundColor: '#e62b1e',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 20px',
                                color: 'white',
                                fontSize: '2rem'
                            }}>
                                2
                            </div>
                            <h4>Selección</h4>
                            <p><strong>Proceso interno</strong></p>
                            <p>Nuestro equipo revisa todas las inscripciones</p>
                        </div>
                        
                        <div className="timeline-item" style={{ 
                            textAlign: 'center',
                            padding: '20px',
                            flex: '1',
                            minWidth: '250px'
                        }}>
                            <div style={{ 
                                width: '80px', 
                                height: '80px', 
                                backgroundColor: '#e62b1e',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 20px',
                                color: 'white',
                                fontSize: '2rem'
                            }}>
                                3
                            </div>
                            <h4>Notificación</h4>
                            <p><strong>Lunes 30/09</strong></p>
                            <p>Recibirás la confirmación por email</p>
                        </div>
                        
                        <div className="timeline-item" style={{ 
                            textAlign: 'center',
                            padding: '20px',
                            flex: '1',
                            minWidth: '250px'
                        }}>
                            <div style={{ 
                                width: '80px', 
                                height: '80px', 
                                backgroundColor: '#e62b1e',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 20px',
                                color: 'white',
                                fontSize: '2rem'
                            }}>
                                4
                            </div>
                            <h4>Evento</h4>
                            <p><strong>Viernes 10/10 - 17:30 hs</strong></p>
                            <p>¡Disfruta de una tarde de ideas transformadoras!</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
