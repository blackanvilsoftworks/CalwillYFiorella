export class AuthService {
    // Registro de usuario
    static async signUp(email, password) {
        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    emailRedirectTo: `${window.location.origin}/auth/callback`
                }
            })
            
            if (error) throw error
            return { success: true, data }
        } catch (error) {
            return { success: false, error: error.message }
        }
    }
    
    // Inicio de sesión
    static async signIn(email, password) {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            })
            
            if (error) throw error
            return { success: true, data }
        } catch (error) {
            return { success: false, error: error.message }
        }
    }
    
    // Cerrar sesión
    static async signOut() {
        try {
            const { error } = await supabase.auth.signOut()
            if (error) throw error
            return { success: true }
        } catch (error) {
            return { success: false, error: error.message }
        }
    }
    
    // Obtener usuario actual
    static getCurrentUser() {
        return supabase.auth.getUser()
    }
    
    // Escuchar cambios de autenticación
    static onAuthStateChange(callback) {
        return supabase.auth.onAuthStateChange(callback)
    }
}

// Uso en tu componente de registro
const registerForm = document.getElementById('register-form')

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    
    if (!validatePassword(password)){
        alert('La contraseña no cumple con todos los requisitos');
        return;
    }

    const result = await AuthService.signUp(email, password)
    
    if (result.success) {
        alert('Registro exitoso. Verifica tu email.')
    } else {
        alert('Error: ' + result.error)
    }
});

// Uso en tu componente de login
const loginForm = document.getElementById('login-form')

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    
    if (!validatePassword(password)){
        alert('La contraseña no cumple con todos los requisitos');
        return;
    }

    const result = await AuthService.signIn(email, password)
    
    if (result.success) {
        window.location.href = '/dashboard'
    } else {
        alert('Error: ' + result.error)
    }
});

function validatePassword(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    if (password.length < minLength || !hasUpperCase || !hasLowerCase || !hasNumbers || !hasSpecialChar) {
        return false;
    }
    /*
        REQUISITOS
        'La contraseña debe tener al menos 8 caracteres'
        'La contraseña debe contener al menos una mayúscula'
        'La contraseña debe contener al menos una minúscula'
        'La contraseña debe contener al menos un número'
        'La contraseña debe contener al menos un carácter especial'
    */
    
    return true;
}