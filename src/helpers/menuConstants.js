//Menu Constants
export const MODE_GAME = ['NORMAL', 'SORTEIO'];
export const TEMA = [
  'Gestão de Projetos',
  'Hardware',
  'Historia da Computação',
  'Computação e Lógica',
];
export const TIME_ROUND = [
  '1 minuto',
  '50 segundos',
  '40 segundos',
  '30 segundos',
  '20 segundos',
  '10 segundos',
];

export const TIME_ROUND_CONVERTER = {
  '1 minuto': 60,
  '50 segundos': 50,
  '40 segundos': 40,
  '30 segundos': 30,
  '20 segundos': 20,
  '10 segundos': 10,
};

export const ATTEMPT = {
  7: ['#09CB85', '#09CB85'],
  6: ['#09CB85','RGBA(255,0,0,0.2)'],
  5: ['#09CB85','RGBA(255,0,0,0.3)'],
  4: ['#09CB85','RGBA(255,0,0,0.4)'],
  3: ['#09CB85','RGBA(255,0,0,0.5)'],
  2: ['#09CB85','RGBA(255,0,0,0.6)'],
  1: ['#09CB85','RGBA(255,0,0,0.7)'],
  0: ['RGBA(255,0,0)','RGBA(255,0,0)'],
};

export const TIME = {
  60: ['#09CB85', '#09CB85'],
  50: ['#09CB85','RGBA(255,0,0,0.2)'],
  40: ['#09CB85','RGBA(255,0,0,0.3)'],
  30: ['#09CB85','RGBA(255,0,0,0.4)'],
  20: ['#09CB85','RGBA(255,0,0,0.5)'],
  10: ['#09CB85','RGBA(255,0,0,0.6)'],
  0: ['RGBA(255,0,0)','RGBA(255,0,0)'],
};

export const PLACEHOLDER_MODE_GAME = 'MODO DE JOGO (OBRIGATÓRIO)';
export const PLACEHOLDER_TEMA = 'TEMA (OBRIGATÓRIO)';
export const PLACEHOLDER_TIME_ROUND = 'TEMPO MÁX. DE ROUND (OPCIONAL)';
export const PLACEHOLDER_TEMA_SORTEIO_ESCOLHIDO = 'VOCÊ ESCOLHEU SORTEIO';
