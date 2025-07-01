import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import inscripcionesService from '../services/inscripciones.service';

const Inscripciones = () => {
    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [registrationData, setRegistrationData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    // Watch UTN relation para mostrar campos condicionales
    const utnRelation = watch('utnRelation');

    const onSubmit = async (data) => {
        setIsLoading(true);
        setErrorMessage('');

        try {
            // Calcular edad a partir de fecha de nacimiento
            if (data.birthDate) {
                const today = new Date();
                const birth = new Date(data.birthDate);
                let age = today.getFullYear() - birth.getFullYear();
                const monthDiff = today.getMonth() - birth.getMonth();
                
                if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
                    age--;
                }
                data.age = age;
            }

            // Enviar datos al backend
            const response = await inscripcionesService.crear(data);
            
            // Mostrar modal de éxito
            setRegistrationData({ ...data, registrationId: response.data.id });
            setShowSuccessModal(true);
            
            // Limpiar formulario
            reset();
            
        } catch (error) {
            // Manejar errores específicos
            if (error.message.includes('email') && error.message.includes('existe')) {
                setErrorMessage('Este email ya está registrado. Por favor, usa otro email.');
            } else if (error.message.includes('DNI') && error.message.includes('existe')) {
                setErrorMessage('Este DNI ya está registrado. Por favor, verifica tus datos.');
            } else if (error.message.includes('límite')) {
                setErrorMessage('Has alcanzado el límite de intentos. Por favor, espera antes de intentar nuevamente.');
            } else {
                setErrorMessage(error.message || 'Error al enviar la inscripción. Por favor, intenta nuevamente.');
            }
        } finally {
            setIsLoading(false);
        }
    };

    const closeModal = () => {
        setShowSuccessModal(false);
        setRegistrationData(null);
    };

    return (
        <div className="main-content">
            <section className="section">
                <div className="container">
                    <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
                        {/* Formulario */}
                        <div style={{ flex: '2', minWidth: '600px' }}>
                            <div className="form-header" style={{ marginBottom: '40px' }}>
                                <h2>Formulario de Inscripción</h2>
                                <p>TEDxUTNCórdoba es un evento con licencia universitaria dirigida a estudiantes, graduados, docentes y no docentes de la comunidad UTN FRC. Esta nueva edición tendrá lugar el día <strong>VIERNES 10 de octubre desde las 17:30 hs</strong>, en el auditorio de la facultad.</p>
                                <br />
                                <p>Si completás este formulario te estás inscribiendo al proceso de selección para presenciar la cuarta edición de TEDxUTNCórdoba 💥.</p>
                                
                                <div style={{
                                    background: '#f8f9fa',
                                    padding: '20px',
                                    borderRadius: '10px',
                                    borderLeft: '4px solid #e62b1e',
                                    margin: '20px 0',
                                    color: '#333'
                                }}>
                                    <p style={{ marginBottom: '8px' }}><strong>📅 Inscripciones:</strong> Del 19/08/24 al 25/09/24 🥳</p>
                                    <p style={{ marginBottom: '8px' }}><strong>⏱️ Tiempo estimado:</strong> 3 minutos 💪</p>
                                    <p style={{ marginBottom: '0' }}><strong>📢 Notificaciones:</strong> Lunes 30/09</p>
                                </div>
                                
                                <p>¡Esperamos verte el próximo 4 de octubre para compartir una tarde diferente! 😁</p>
                                <p><em>- El equipo de TEDxUTNCórdoba ✖🚀🚀</em></p>
                            </div>

                            {/* Mensaje de error */}
                            {errorMessage && (
                                <div style={{
                                    background: '#f8d7da',
                                    color: '#721c24',
                                    padding: '15px',
                                    borderRadius: '8px',
                                    marginBottom: '20px',
                                    borderLeft: '4px solid #dc3545'
                                }}>
                                    <strong>Error:</strong> {errorMessage}
                                </div>
                            )}

                            <form onSubmit={handleSubmit(onSubmit)} style={{ 
                                background: 'white',
                                padding: '40px',
                                borderRadius: '15px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                            }}>
                                {/* Información Personal */}
                                <div className="form-section" style={{ marginBottom: '40px' }}>
                                    <h3 style={{ color: '#e62b1e', marginBottom: '20px' }}>
                                        <i className="fas fa-user"></i> Información Personal
                                    </h3>
                                    
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                        <div>
                                            <label>Nombre *</label>
                                            <input
                                                type="text"
                                                {...register('firstName', { required: 'El nombre es requerido' })}
                                                style={{
                                                    width: '100%',
                                                    padding: '12px',
                                                    border: errors.firstName ? '2px solid #dc3545' : '1px solid #ddd',
                                                    borderRadius: '8px',
                                                    fontSize: '1rem'
                                                }}
                                            />
                                            {errors.firstName && <span style={{ color: '#dc3545', fontSize: '0.9rem' }}>{errors.firstName.message}</span>}
                                        </div>
                                        
                                        <div>
                                            <label>Apellido *</label>
                                            <input
                                                type="text"
                                                {...register('lastName', { required: 'El apellido es requerido' })}
                                                style={{
                                                    width: '100%',
                                                    padding: '12px',
                                                    border: errors.lastName ? '2px solid #dc3545' : '1px solid #ddd',
                                                    borderRadius: '8px',
                                                    fontSize: '1rem'
                                                }}
                                            />
                                            {errors.lastName && <span style={{ color: '#dc3545', fontSize: '0.9rem' }}>{errors.lastName.message}</span>}
                                        </div>
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
                                        <div>
                                            <label>Email *</label>
                                            <input
                                                type="email"
                                                {...register('email', { 
                                                    required: 'El email es requerido',
                                                    pattern: {
                                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                        message: 'Email inválido'
                                                    }
                                                })}
                                                style={{
                                                    width: '100%',
                                                    padding: '12px',
                                                    border: errors.email ? '2px solid #dc3545' : '1px solid #ddd',
                                                    borderRadius: '8px',
                                                    fontSize: '1rem'
                                                }}
                                            />
                                            {errors.email && <span style={{ color: '#dc3545', fontSize: '0.9rem' }}>{errors.email.message}</span>}
                                        </div>
                                        
                                        <div>
                                            <label>Teléfono *</label>
                                            <input
                                                type="tel"
                                                {...register('phone', { required: 'El teléfono es requerido' })}
                                                style={{
                                                    width: '100%',
                                                    padding: '12px',
                                                    border: errors.phone ? '2px solid #dc3545' : '1px solid #ddd',
                                                    borderRadius: '8px',
                                                    fontSize: '1rem'
                                                }}
                                            />
                                            {errors.phone && <span style={{ color: '#dc3545', fontSize: '0.9rem' }}>{errors.phone.message}</span>}
                                        </div>
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
                                        <div>
                                            <label>Fecha de Nacimiento *</label>
                                            <input
                                                type="date"
                                                {...register('birthDate', { required: 'La fecha de nacimiento es requerida' })}
                                                style={{
                                                    width: '100%',
                                                    padding: '12px',
                                                    border: errors.birthDate ? '2px solid #dc3545' : '1px solid #ddd',
                                                    borderRadius: '8px',
                                                    fontSize: '1rem'
                                                }}
                                            />
                                            {errors.birthDate && <span style={{ color: '#dc3545', fontSize: '0.9rem' }}>{errors.birthDate.message}</span>}
                                        </div>
                                        
                                        <div>
                                            <label>DNI *</label>
                                            <input
                                                type="text"
                                                placeholder="Ej: 12345678"
                                                {...register('dni', { 
                                                    required: 'El DNI es requerido',
                                                    pattern: {
                                                        value: /^\d{7,8}$/,
                                                        message: 'DNI debe tener 7 u 8 dígitos'
                                                    }
                                                })}
                                                style={{
                                                    width: '100%',
                                                    padding: '12px',
                                                    border: errors.dni ? '2px solid #dc3545' : '1px solid #ddd',
                                                    borderRadius: '8px',
                                                    fontSize: '1rem'
                                                }}
                                            />
                                            {errors.dni && <span style={{ color: '#dc3545', fontSize: '0.9rem' }}>{errors.dni.message}</span>}
                                        </div>
                                    </div>
                                </div>

                                {/* Relación con UTN */}
                                <div className="form-section" style={{ marginBottom: '40px' }}>
                                    <h3 style={{ color: '#e62b1e', marginBottom: '20px' }}>
                                        <i className="fas fa-university"></i> Relación con UTN
                                    </h3>
                                    
                                    <div>
                                        <label>¿Sos estudiante o graduado de la UTN? *</label>
                                        <div style={{ display: 'flex', gap: '20px', marginTop: '10px', flexWrap: 'wrap' }}>
                                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <input
                                                    type="radio"
                                                    value="estudiante"
                                                    {...register('utnRelation', { required: 'Selecciona una opción' })}
                                                />
                                                Estudiante
                                            </label>
                                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <input
                                                    type="radio"
                                                    value="graduado"
                                                    {...register('utnRelation', { required: 'Selecciona una opción' })}
                                                />
                                                Graduado
                                            </label>
                                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <input
                                                    type="radio"
                                                    value="docente"
                                                    {...register('utnRelation', { required: 'Selecciona una opción' })}
                                                />
                                                Docente
                                            </label>
                                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <input
                                                    type="radio"
                                                    value="externo"
                                                    {...register('utnRelation', { required: 'Selecciona una opción' })}
                                                />
                                                Externo/Otra
                                            </label>
                                        </div>
                                        {errors.utnRelation && <span style={{ color: '#dc3545', fontSize: '0.9rem' }}>{errors.utnRelation.message}</span>}
                                    </div>

                                    {/* Campo carrera - mostrar si es estudiante o graduado */}
                                    {(utnRelation === 'estudiante' || utnRelation === 'graduado') && (
                                        <div style={{ marginTop: '20px' }}>
                                            <label>¿De qué carrera? *</label>
                                            <select
                                                {...register('utnCareer', { required: 'Selecciona tu carrera' })}
                                                style={{
                                                    width: '100%',
                                                    padding: '12px',
                                                    border: errors.utnCareer ? '2px solid #dc3545' : '1px solid #ddd',
                                                    borderRadius: '8px',
                                                    fontSize: '1rem'
                                                }}
                                            >
                                                <option value="">Seleccionar carrera</option>
                                                <option value="sistemas">Ingeniería en Sistemas de Información</option>
                                                <option value="civil">Ingeniería Civil</option>
                                                <option value="industrial">Ingeniería Industrial</option>
                                                <option value="quimica">Ingeniería Química</option>
                                                <option value="electronica">Ingeniería Electrónica</option>
                                                <option value="mecanica">Ingeniería Mecánica</option>
                                                <option value="electrica">Ingeniería Eléctrica</option>
                                                <option value="metalurgica">Ingeniería Metalúrgica</option>
                                            </select>
                                            {errors.utnCareer && <span style={{ color: '#dc3545', fontSize: '0.9rem' }}>{errors.utnCareer.message}</span>}
                                        </div>
                                    )}

                                    {/* Campo materia - mostrar si es docente */}
                                    {utnRelation === 'docente' && (
                                        <div style={{ marginTop: '20px' }}>
                                            <label>¿Qué materia enseñas? *</label>
                                            <input
                                                type="text"
                                                placeholder="Ej: Análisis Matemático, Física, Programación..."
                                                {...register('subject', { required: 'Ingresa la materia que enseñas' })}
                                                style={{
                                                    width: '100%',
                                                    padding: '12px',
                                                    border: errors.subject ? '2px solid #dc3545' : '1px solid #ddd',
                                                    borderRadius: '8px',
                                                    fontSize: '1rem'
                                                }}
                                            />
                                            {errors.subject && <span style={{ color: '#dc3545', fontSize: '0.9rem' }}>{errors.subject.message}</span>}
                                        </div>
                                    )}

                                    {/* Campos adicionales para estudiantes */}
                                    {utnRelation === 'estudiante' && (
                                        <>
                                            <div style={{ marginTop: '20px' }}>
                                                <label>Legajo *</label>
                                                <input
                                                    type="text"
                                                    placeholder="Tu número de legajo"
                                                    {...register('legajo', { required: 'El legajo es requerido' })}
                                                    style={{
                                                        width: '100%',
                                                        padding: '12px',
                                                        border: errors.legajo ? '2px solid #dc3545' : '1px solid #ddd',
                                                        borderRadius: '8px',
                                                        fontSize: '1rem'
                                                    }}
                                                />
                                                {errors.legajo && <span style={{ color: '#dc3545', fontSize: '0.9rem' }}>{errors.legajo.message}</span>}
                                            </div>

                                            <div style={{ marginTop: '20px' }}>
                                                <label>Año que estás cursando *</label>
                                                <div style={{ display: 'flex', gap: '20px', marginTop: '10px', flexWrap: 'wrap' }}>
                                                    {['1', '2', '3', '4', '5'].map(year => (
                                                        <label key={year} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                            <input
                                                                type="checkbox"
                                                                value={year}
                                                                {...register('currentYear', { required: 'Selecciona al menos un año' })}
                                                            />
                                                            {year}°
                                                        </label>
                                                    ))}
                                                </div>
                                                {errors.currentYear && <span style={{ color: '#dc3545', fontSize: '0.9rem' }}>{errors.currentYear.message}</span>}
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Información Adicional */}
                                <div className="form-section" style={{ marginBottom: '40px' }}>
                                    <h3 style={{ color: '#e62b1e', marginBottom: '20px' }}>
                                        <i className="fas fa-heart"></i> Conociéndote
                                    </h3>
                                    
                                    <div style={{ marginBottom: '20px' }}>
                                        <label>¿Conocías previamente las charlas TED? *</label>
                                        <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
                                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <input
                                                    type="radio"
                                                    value="si"
                                                    {...register('knewTED', { required: 'Selecciona una opción' })}
                                                />
                                                Sí
                                            </label>
                                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <input
                                                    type="radio"
                                                    value="no"
                                                    {...register('knewTED', { required: 'Selecciona una opción' })}
                                                />
                                                No
                                            </label>
                                        </div>
                                        {errors.knewTED && <span style={{ color: '#dc3545', fontSize: '0.9rem' }}>{errors.knewTED.message}</span>}
                                    </div>

                                    <div style={{ marginBottom: '20px' }}>
                                        <label>¿Participaste en alguna edición de TEDxUTNCórdoba? *</label>
                                        <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
                                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <input
                                                    type="radio"
                                                    value="si"
                                                    {...register('previousParticipation', { required: 'Selecciona una opción' })}
                                                />
                                                Sí
                                            </label>
                                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <input
                                                    type="radio"
                                                    value="no"
                                                    {...register('previousParticipation', { required: 'Selecciona una opción' })}
                                                />
                                                No
                                            </label>
                                        </div>
                                        {errors.previousParticipation && <span style={{ color: '#dc3545', fontSize: '0.9rem' }}>{errors.previousParticipation.message}</span>}
                                    </div>

                                    <div style={{ marginBottom: '20px' }}>
                                        <label>¿Cómo te enteraste de esta 4ª edición? *</label>
                                        <div style={{ display: 'flex', gap: '20px', marginTop: '10px', flexWrap: 'wrap' }}>
                                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <input
                                                    type="radio"
                                                    value="amigo"
                                                    {...register('howFoundOut', { required: 'Selecciona una opción' })}
                                                />
                                                Me contó un amigo/a
                                            </label>
                                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <input
                                                    type="radio"
                                                    value="flyers"
                                                    {...register('howFoundOut', { required: 'Selecciona una opción' })}
                                                />
                                                Flyers en la facultad
                                            </label>
                                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <input
                                                    type="radio"
                                                    value="redes"
                                                    {...register('howFoundOut', { required: 'Selecciona una opción' })}
                                                />
                                                Redes sociales
                                            </label>
                                            <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <input
                                                    type="radio"
                                                    value="otra"
                                                    {...register('howFoundOut', { required: 'Selecciona una opción' })}
                                                />
                                                Otra
                                            </label>
                                        </div>
                                        {errors.howFoundOut && <span style={{ color: '#dc3545', fontSize: '0.9rem' }}>{errors.howFoundOut.message}</span>}
                                    </div>

                                    <div>
                                        <label>¿Por qué te gustaría ser parte del evento? Coméntanos en pocas palabras 🧡</label>
                                        <textarea
                                            rows="4"
                                            placeholder="Texto de respuesta larga"
                                            {...register('whyParticipate')}
                                            style={{
                                                width: '100%',
                                                padding: '12px',
                                                border: '1px solid #ddd',
                                                borderRadius: '8px',
                                                fontSize: '1rem',
                                                marginTop: '10px',
                                                resize: 'vertical'
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Botón de envío */}
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        style={{
                                            background: isLoading ? '#ccc' : 'linear-gradient(135deg, #e62b1e 0%, #ff4444 100%)',
                                            color: 'white',
                                            border: 'none',
                                            padding: '15px 40px',
                                            borderRadius: '50px',
                                            fontSize: '1.1rem',
                                            fontWeight: '600',
                                            cursor: isLoading ? 'not-allowed' : 'pointer',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        {isLoading ? (
                                            <>
                                                <i className="fas fa-spinner fa-spin"></i> Procesando...
                                            </>
                                        ) : (
                                            <>
                                                <i className="fas fa-paper-plane"></i> Enviar Inscripción
                                            </>
                                        )}
                                    </button>
                                    <p style={{ marginTop: '15px', color: '#666', fontSize: '0.9rem' }}>
                                        Al enviar este formulario, te inscribes al proceso de selección. Las definiciones serán notificadas el Lunes 30/09.
                                    </p>
                                </div>
                            </form>
                        </div>

                        {/* Información del evento */}
                        <div style={{ flex: '1', minWidth: '300px' }}>
                            <div style={{
                                background: 'white',
                                padding: '30px',
                                borderRadius: '15px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                position: 'sticky',
                                top: '100px'
                            }}>
                                <h3 style={{ color: '#e62b1e', marginBottom: '20px' }}>Detalles del Evento</h3>
                                
                                <div style={{ marginBottom: '25px' }}>
                                    <h4>TEDxUTNCórdoba - 4ª Edición</h4>
                                    <p>"Ideas que Transforman"</p>
                                    <p>Un evento con licencia universitaria que reunirá a la comunidad UTN FRC para compartir ideas innovadoras y experiencias transformadoras en una tarde única.</p>
                                </div>
                                
                                <div style={{ marginBottom: '25px' }}>
                                    <h4>Proceso de Selección</h4>
                                    <ul style={{ paddingLeft: '20px' }}>
                                        <li>Dirigido a estudiantes, graduados, docentes y no docentes UTN FRC</li>
                                        <li>Inscripciones: 19/08/24 al 25/09/24</li>
                                        <li>Notificaciones: Lunes 30/09</li>
                                        <li>Evento: Viernes 10 de octubre, 17:30 hs</li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4>¿Qué incluye tu participación?</h4>
                                    <ul style={{ paddingLeft: '20px' }}>
                                        <li>Acceso a todas las charlas TEDx</li>
                                        <li>Networking con la comunidad UTN</li>
                                        <li>Coffee break</li>
                                        <li>Material promocional del evento</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal de éxito */}
            {showSuccessModal && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.8)',
                    zIndex: 10000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div style={{
                        background: 'white',
                        padding: '40px',
                        borderRadius: '20px',
                        maxWidth: '500px',
                        width: '90%',
                        textAlign: 'center',
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
                    }}>
                        <div style={{ color: '#28a745', fontSize: '4rem', marginBottom: '20px' }}>
                            <i className="fas fa-check-circle"></i>
                        </div>
                        <h2 style={{ color: '#333', marginBottom: '20px', fontSize: '2rem' }}>¡Inscripción Exitosa!</h2>
                        <p style={{ color: '#666', marginBottom: '20px' }}>
                            Gracias <strong>{registrationData?.firstName} {registrationData?.lastName}</strong> por inscribirte a TEDxUTN 2025.
                        </p>
                        {registrationData?.registrationId && (
                            <div style={{
                                background: '#e8f5e8',
                                border: '2px solid #28a745',
                                padding: '15px',
                                borderRadius: '10px',
                                marginBottom: '20px'
                            }}>
                                <h4 style={{ color: '#28a745', marginBottom: '10px' }}>Número de Inscripción</h4>
                                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#333', margin: 0 }}>
                                    #{registrationData.registrationId}
                                </p>
                                <p style={{ fontSize: '0.9rem', color: '#666', margin: '5px 0 0 0' }}>
                                    Guarda este número para futuras consultas
                                </p>
                            </div>
                        )}
                        <p style={{ color: '#666', marginBottom: '30px' }}>
                            Hemos enviado un email de confirmación a <strong>{registrationData?.email}</strong> con toda la información necesaria.
                        </p>
                        <button
                            onClick={closeModal}
                            style={{
                                background: 'linear-gradient(135deg, #e62b1e 0%, #ff4444 100%)',
                                color: 'white',
                                border: 'none',
                                padding: '15px 30px',
                                borderRadius: '50px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                fontSize: '1rem'
                            }}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Inscripciones;
