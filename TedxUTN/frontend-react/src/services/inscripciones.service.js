const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

// Servicio para manejo de inscripciones
const inscripcionesService = {
    // Crear nueva inscripción
    async crear(data) {
        try {
            const response = await fetch(`${API_BASE_URL}/registrations`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Error al procesar la inscripción');
            }

            return await response.json();
        } catch (error) {
            console.error('Error en inscripcionesService.crear:', error);
            throw error;
        }
    },

    // Obtener todas las inscripciones (para admin)
    async obtenerTodas() {
        try {
            const response = await fetch(`${API_BASE_URL}/registrations`);
            
            if (!response.ok) {
                throw new Error('Error al cargar las inscripciones');
            }

            return await response.json();
        } catch (error) {
            console.error('Error en inscripcionesService.obtenerTodas:', error);
            throw error;
        }
    },

    // Obtener estadísticas
    async obtenerEstadisticas() {
        try {
            const response = await fetch(`${API_BASE_URL}/statistics`);
            
            if (!response.ok) {
                throw new Error('Error al cargar las estadísticas');
            }

            return await response.json();
        } catch (error) {
            console.error('Error en inscripcionesService.obtenerEstadisticas:', error);
            throw error;
        }
    },

    // Verificar salud del API
    async verificarSalud() {
        try {
            const response = await fetch(`${API_BASE_URL}/health`);
            return await response.json();
        } catch (error) {
            console.error('Error en inscripcionesService.verificarSalud:', error);
            throw error;
        }
    }
};

export default inscripcionesService;
