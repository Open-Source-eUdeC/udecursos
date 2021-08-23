const initialData = {
    tasks: {
      'task-1': { id: 'task-1', content: 'Física I', color: "black", credits: "4", code: "510140" },
      'task-2': { id: 'task-2', content: 'Álgebra I', color: "#FFD300", credits: "5", code: "525140" },
      'task-3': { id: 'task-3', content: 'Cálculo I', color: "#FFD300", credits: "5", code: "527140" },
      'task-4': { id: 'task-4', content: 'Química General I', color: "#FFD300", credits: "5", code: "531140" },
      'task-5': { id: 'task-5', content: 'Intro. Ingeniería Informática', color: "#FFD300", credits: "2", code: "503120" },
      
      'task-6': { id: 'task-6', content: 'Física II', color: "#FFD300", credits: "4", code: "510150" },
      'task-7': { id: 'task-7', content: 'Álgebra II', color: "#FFD300", credits: "5", code: "525150" },
      'task-8': { id: 'task-8', content: 'Cálculo II', color: "#FFD300", credits: "5", code: "527150" },
      'task-9': { id: 'task-9', content: 'Intro. Desarrollo Soluciones Inf.', color: "#FFD300", credits: "3", code: "503152" },
      'task-10': { id: 'task-10', content: 'Intro. Innovación Ingeniería', color: "#FFD300", credits: "2", code: "500151" },

      'task-11': { id: 'task-11', content: 'Lógica', color: "#FFD300", credits: "4", code: "503207" },
      'task-12': { id: 'task-12', content: 'Ecuaciones Diferenciales Ordinarias', color: "#FFD300", credits: "4", code: "521218" },
      'task-13': { id: 'task-13', content: 'Cálculo III', color: "#FFD300", credits: "5", code: "521227" },
      'task-14': { id: 'task-14', content: 'Programación I', color: "#FFD300", credits: "4", code: "503208" },

      'task-15': { id: 'task-15', content: 'Cálculo Numérico', color: "#FFD300", credits: "4", code: "521230" },
      'task-16': { id: 'task-16', content: 'Electro-magnetismo Aplicado', color: "#FFD300", credits: "4", code: "543206" },
      'task-17': { id: 'task-17', content: 'Matemáticas Discretas', color: "#FFD300", credits: "4", code: "503213" },
      'task-18': { id: 'task-18', content: 'Programación II', color: "#FFD300", credits: "4", code: "503212" },
      'task-19': { id: 'task-19', content: 'Complementaria I', color: "#FFD300", credits: "3", code: "201" },

      'task-20': { id: 'task-20', content: 'Estadística', color: "#FFD300", credits: "4", code: "523210" },
      'task-21': { id: 'task-21', content: 'Mecánica y Termodinámica', color: "#FFD300", credits: "5", code: "541341" },
      'task-22': { id: 'task-22', content: 'Estructura de Datos', color: "#FFD300", credits: "4", code: "503220" },
      'task-23': { id: 'task-23', content: 'Electiva I', color: "#FFD300", credits: "3", code: "101" },
      'task-24': { id: 'task-24', content: 'Complementaria II', color: "#FFD300", credits: "3", code: "202" },

      'task-25': { id: 'task-25', content: 'Economía', color: "#FFD300", credits: "4", code: "546370" },
      'task-26': { id: 'task-26', content: 'Arquitectura de Computadores', color: "#FFD300", credits: "4", code: "503305" },
      'task-27': { id: 'task-27', content: 'Teoría de Computación', color: "#FFD300", credits: "4", code: "503306" },
      'task-28': { id: 'task-28', content: 'Bases de Datos I', color: "#FFD300", credits: "4", code: "503307" },
      'task-29': { id: 'task-29', content: 'Complementaria III', color: "#FFD300", credits: "3", code: "203" },

      'task-30': { id: 'task-30', content: 'Formulación y Evaluación de Proyectos', color: "#FFD300", credits: "4", code: "546102" },
      'task-31': { id: 'task-31', content: 'Sistemas Operativos', color: "#FFD300", credits: "4", code: "503308" },
      'task-32': { id: 'task-32', content: 'Análisis de Algoritmos', color: "#FFD300", credits: "4", code: "503309" },
      'task-33': { id: 'task-33', content: 'Electiva II', color: "#FFD300", credits: "3", code: "102" },
      'task-34': { id: 'task-34', content: 'Complementaria IV', color: "#FFD300", credits: "3", code: "204" },

      'task-35': { id: 'task-35', content: 'Optimización', color: "#FFD300", credits: "4", code: "546351" },
      'task-36': { id: 'task-36', content: 'Gestión de Empresas', color: "#FFD300", credits: "4", code: "546101" },
      'task-37': { id: 'task-37', content: 'Redes de Computadores', color: "#FFD300", credits: "4", code: "503353" },
      'task-38': { id: 'task-38', content: 'Ingeniería de Software I', color: "#FFD300", credits: "4", code: "503354" },
      'task-39': { id: 'task-39', content: 'Electiva III', color: "#FFD300", credits: "3", code: "103" },

      'task-40': { id: 'task-40', content: 'Inteligencia Artificial', color: "#FFD300", credits: "4", code: "503356" },
      'task-41': { id: 'task-41', content: 'Gestión Informática', color: "#FFD300", credits: "4", code: "503358" },
      'task-42': { id: 'task-42', content: 'Informática y Sociedad', color: "#FFD300", credits: "4", code: "503357" },
      'task-43': { id: 'task-43', content: 'Ingeniería de Software II', color: "#FFD300", credits: "4", code: "503355" },
      'task-44': { id: 'task-44', content: 'Electiva IV', color: "#FFD300", credits: "3", code: "104" },

      'task-45': { id: 'task-45', content: 'Proyecto Informático', color: "#FFD300", credits: "4", code: "503369" },
      'task-46': { id: 'task-46', content: 'Memoria de Título', color: "#FFD300", credits: "20", code: "503599" },
      'task-47': { id: 'task-47', content: 'Electiva V', color: "#FFD300", credits: "3", code: "105" },
      'task-48': { id: 'task-48', content: 'Electiva VI', color: "#FFD300", credits: "3", code: "106" },

      'task-49': { id: 'task-49', content: 'Electiva VII', color: "#FFD300", credits: "3", code: "107" },
      'task-50': { id: 'task-50', content: 'Electiva VIII', color: "#FFD300", credits: "3", code: "108" },

    },
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'I',
        taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5'],
      },
      'column-2': {
        id: 'column-2',
        title: 'II',
        taskIds: ['task-6', 'task-7', 'task-8', 'task-9', 'task-10'],
      },
      'column-3': {
        id: 'column-3',
        title: 'III',
        taskIds: ['task-11', 'task-12', 'task-13', 'task-14'],
      },
      'column-4': {
        id: 'column-4',
        title: 'IV',
        taskIds: ['task-15', 'task-16', 'task-17', 'task-18', 'task-19'],
      },
      'column-5': {
        id: 'column-5',
        title: 'V',
        taskIds: ['task-20', 'task-21', 'task-22', 'task-23', 'task-24'],
      },
      'column-6': {
        id: 'column-6',
        title: 'VI',
        taskIds: ['task-25', 'task-26', 'task-27', 'task-28', 'task-29'],
      },
      'column-7': {
        id: 'column-7',
        title: 'VII',
        taskIds: ['task-30', 'task-31', 'task-32', 'task-33', 'task-34'],
      },
      'column-8': {
        id: 'column-8',
        title: 'VIII',
        taskIds: ['task-35', 'task-36', 'task-37', 'task-38', 'task-39'],
      },
      'column-9': {
        id: 'column-9',
        title: 'IX',
        taskIds: ['task-40', 'task-41', 'task-42', 'task-43', 'task-44'],
      },
      'column-10': {
        id: 'column-10',
        title: 'X',
        taskIds: ['task-45', 'task-46', 'task-47', 'task-48'],
    },
    'column-11': {
        id: 'column-11',
        title: 'XI',
        taskIds: ['task-49', 'task-50'],
      }
    },
    // Facilitate reordering of the columns
    columnOrder: [
        'column-1', 'column-2', 
        'column-3', 'column-4',
        'column-5', 'column-6',
        'column-7', 'column-8',
        'column-9', 'column-10',
        'column-11'],
  };
  
  export default initialData;
  