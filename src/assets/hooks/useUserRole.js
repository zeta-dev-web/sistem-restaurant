// src/assets/hooks/useUserRole.js
import { useState, useEffect } from 'react';

// Ejemplo de hook para obtener el rol del usuario, podrías adaptarlo según tu implementación
const useUserRole = () => {
  const [role, setRole] = useState(null);

  useEffect(() => {
    // Aquí deberías implementar la lógica para obtener el rol del usuario
    // Este es solo un ejemplo estático
    const fetchUserRole = async () => {
      // Ejemplo: podrías obtener el rol desde una API o contexto global
      const userRole = await getUserRoleFromServer(); // Reemplaza con tu función
      setRole(userRole);
    };

    fetchUserRole();
  }, []);

  return role;
};

// Función ficticia para obtener el rol del usuario
const getUserRoleFromServer = async () => {
  // Implementa la lógica para obtener el rol real
  // Ejemplo: return 'admin'; // o 'client', 'kitchen', 'waiter'
  return 'waiter'; // Cambia según el rol que deseas probar
};

export default useUserRole;