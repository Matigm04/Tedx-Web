import { NextRequest, NextResponse } from 'next/server';
import GoogleSheetsService, { FormData } from '@/lib/google-sheets';

export async function POST(request: NextRequest) {
  try {
    // Obtener los datos del formulario
    const formData: FormData = await request.json();

    // Validaciones básicas
    if (!formData.apellidos || !formData.dni || !formData.email) {
      return NextResponse.json(
        { error: 'Faltan campos obligatorios' },
        { status: 400 }
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
        { error: 'Error interno del servidor' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Error en API de inscripciones:', error);
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
