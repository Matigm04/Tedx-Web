import { NextRequest, NextResponse } from 'next/server';
import GoogleSheetsService, { FormData } from '@/lib/google-sheets';

export async function POST(request: NextRequest) {
  try {
    // Obtener los datos del formulario
    const formData: FormData = await request.json();

    // Validaciones básicas
    if (!formData.nombre || !formData.apellidos || !formData.dni || !formData.email) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios' },
        { status: 400 }
      );
    }

    // Verificar si las credenciales están configuradas
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || 
        !process.env.GOOGLE_PRIVATE_KEY || 
        !process.env.GOOGLE_SHEET_ID ||
        process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL === 'your-service-account@your-project.iam.gserviceaccount.com') {
      
      // Modo de desarrollo - simular éxito
      console.log('⚠️ Google Sheets no configurado. Datos del formulario (modo desarrollo):');
      console.log(JSON.stringify(formData, null, 2));
      
      return NextResponse.json(
        { 
          message: 'Inscripción recibida (modo desarrollo)',
          data: { development: true, formData } 
        },
        { status: 200 }
      );
    }

    // Crear instancia del servicio de Google Sheets
    const sheetsService = new GoogleSheetsService();

    // Guardar en Google Sheets
    const result = await sheetsService.addInscription(formData);

    if (result.success) {
      return NextResponse.json(
        { 
          message: 'Inscripción guardada exitosamente',
          data: result.data 
        },
        { status: 200 }
      );
    } else {
      console.error('Error al guardar en Google Sheets:', result.error);
      return NextResponse.json(
        { error: 'Error al conectar con Google Sheets. Verifica la configuración.' },
        { status: 500 }
      );
    }

  } catch (error: any) {
    console.error('Error en API de inscripciones:', error);
    
    // Error específico para credenciales no configuradas
    if (error.message?.includes('credenciales de Google Sheets')) {
      return NextResponse.json(
        { error: 'Configuración de Google Sheets pendiente. Contacta al administrador.' },
        { status: 503 }
      );
    }
    
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}

// Endpoint para configurar headers (usar solo una vez)
export async function GET() {
  try {
    const sheetsService = new GoogleSheetsService();
    const result = await sheetsService.setupHeaders();
    
    if (result.success) {
      return NextResponse.json({ message: 'Headers configurados exitosamente' });
    } else {
      return NextResponse.json({ error: 'Error al configurar headers' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error configurando headers:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
