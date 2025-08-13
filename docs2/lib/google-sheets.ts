import { google } from 'googleapis';

// Interface para los datos del formulario
export interface FormData {
  apellidos: string;
  dni: string;
  edad: string;
  email: string;
  celular: string;
  conoceTED: string;
  participoTEDx: string;
  perteneceUTN: string;
  comunidadUTN: string;
  soy: string;
  especialidad: string;
  legajo: string;
  anoCursando: string[];
  graduadoCarrera: string;
  materiaActual: string;
  actividadesFacultad: string;
}

// Configuración de Google Sheets
export class GoogleSheetsService {
  private sheets;
  private spreadsheetId: string;

  constructor() {
    // Configurar autenticación
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    this.sheets = google.sheets({ version: 'v4', auth });
    this.spreadsheetId = process.env.GOOGLE_SHEET_ID || '';
  }

  // Agregar una fila con los datos del formulario
  async addInscription(formData: FormData) {
    try {
      const timestamp = new Date().toLocaleString('es-AR', {
        timeZone: 'America/Argentina/Cordoba'
      });

      // Preparar los datos en el orden de las columnas
      const values = [[
        timestamp,
        formData.apellidos,
        formData.dni,
        formData.edad,
        formData.email,
        formData.celular,
        formData.conoceTED,
        formData.participoTEDx,
        formData.perteneceUTN,
        formData.comunidadUTN,
        formData.soy,
        formData.especialidad,
        formData.legajo,
        formData.anoCursando.join(', '), // Convertir array a string
        formData.graduadoCarrera,
        formData.materiaActual,
        formData.actividadesFacultad,
      ]];

      const response = await this.sheets.spreadsheets.values.append({
        spreadsheetId: this.spreadsheetId,
        range: 'A:Q', // Columnas A hasta Q
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        requestBody: {
          values,
        },
      });

      console.log('✅ Inscripción guardada en Google Sheets:', response.data);
      return { success: true, data: response.data };
    } catch (error) {
      console.error('❌ Error al guardar en Google Sheets:', error);
      return { success: false, error: error };
    }
  }

  // Crear los headers en la primera fila (solo ejecutar una vez)
  async setupHeaders() {
    try {
      const headers = [
        'Timestamp',
        'Apellidos',
        'DNI',
        'Edad',
        'Email',
        'Celular',
        'Conoce_TED',
        'Participo_TEDx',
        'Pertenece_UTN',
        'Comunidad_UTN',
        'Soy',
        'Especialidad',
        'Legajo',
        'Año_Cursando',
        'Graduado_Carrera',
        'Materia_Actual',
        'Actividades_Facultad'
      ];

      const response = await this.sheets.spreadsheets.values.update({
        spreadsheetId: this.spreadsheetId,
        range: 'A1:Q1',
        valueInputOption: 'RAW',
        requestBody: {
          values: [headers],
        },
      });

      console.log('✅ Headers configurados en Google Sheets');
      return { success: true, data: response.data };
    } catch (error) {
      console.error('❌ Error al configurar headers:', error);
      return { success: false, error: error };
    }
  }
}

export default GoogleSheetsService;
