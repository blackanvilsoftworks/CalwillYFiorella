import { supabase } from './api/supabase/client'  // Ajusta la ruta según tu estructura

async function testSupabaseConnection() {
    try {
    // Prueba simple: leer un registro de prueba
        const { data, error } = await supabase
            .from('categories')  // Cambia por una tabla real
            .select('*')
            .limit(1)

        if (error) throw error
    
        console.log('✅ Conexión exitosa! Datos:', data)
        return true
    } catch (error) {
        console.error('❌ Error de conexión:', error.message)
        return false
    }
}

// Ejecuta la prueba
testSupabaseConnection()
