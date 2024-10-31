import type { Locale } from '.';

const esES: Locale = {
  // locales for all components
  global: {
    placeholder: 'Por favor, seleccione',
    emptyText: 'No hay datos disponibles',
    okText: 'Confirmar',
    cancelText: 'Cancelar',
  },
  calendar: {
    weekdayNames: [
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
      'Domingo',
    ],
    title: 'YYYY año MM mes',
    today: 'Hoy',
    start: 'Empezar',
    end: 'Fin',
    startAndEnd: 'Inicio/Fin',
  },
  rangePicker: {
    startPlaceholder: 'No ha comenzado la selección',
    endPlaceholder: 'Selección no completada',
  },
  guideTour: {
    gotItText: 'Entendido',
    nextStepText: 'Siguiente paso',
    prevStepText: 'Paso anterior',
    jumpText: 'Saltar',
  },
  imageUpload: {
    uploadingText: 'Subiendo',
    uploadfailedText: 'Error al subir',
  },
  pageContainer: {
    failed: {
      title: 'La página ha encontrado algunos pequeños problemas',
      message: 'Lo probaré más tarde',
    },
    disconnected: {
      title: 'La red está un poco ocupada',
      message: 'Mueve tus dedos para ayudar a arreglarlo',
    },
    empty: {
      title: 'Aquí no hay nada',
      message: 'Echa un vistazo a los demás',
    },
    busy: {
      title: 'Congestión por delante',
      message: 'Intente refrescar',
    },
  },
};

export default esES;
