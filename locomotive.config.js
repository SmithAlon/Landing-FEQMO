// locomotive.config.js
export const locomotiveConfig = {
  // Configuración principal
  smooth: true,
  lerp: 0.08, // 0.1 = más suave, 0.01 = menos suave
  multiplier: 1, // Velocidad del scroll
  class: 'is-revealed',
  scrollbarContainer: false,
  
  // Configuración para móviles
  smartphone: {
    smooth: true,
    breakpoint: 767
  },
  
  // Configuración para tablets
  tablet: {
    smooth: true,
    breakpoint: 1024
  },
  
  // Configuración avanzada
  reloadOnContextChange: false,
  touchMultiplier: 2,
  firefoxMultiplier: 50,
  
  // Callbacks
  scrollCallback: {
    onScroll: (scroll) => {
      // console.log('Scrolling:', scroll.scroll.y);
    },
    onCall: (func, way, obj) => {
      // console.log('Trigger:', func, way);
    }
  }
};

// Función helper para inicializar
export function initLocomotive(container) {
  if (!container) return null;
  
  return new LocomotiveScroll({
    el: container,
    ...locomotiveConfig
  });
}