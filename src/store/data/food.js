export default {
  th: ['名称', '品质', '卡路里', '保质期', '厨具'],
  map: ['name', 'quality', 'calories', 'spoilTime', 'cooking'],
  description: [
    '',
    '食物的品质影响提供的士气，比如3品质的食物可以提供3士气',
    '1个或者1kg该食物所提供的卡路里',
    '',
    '制造该食物需要用到的厨具'
  ],
  td: [
    {
      name: '烤肉',
      src: require('@/assets/image/barbeque.png'),
      quality: 3,
      calories: '6400kcal',
      spoilTime: '1200s/1周期',
      cooking: '微波炉'
    },
    {
      name: '炙烤浆果',
      src: require('@/assets/image/gristle_berry.png'),
      quality: 1,
      calories: '6000kcal',
      spoilTime: '100s',
      cooking: '不需要'
    },
    {
      name: '炙烤浆果2',
      src: require('@/assets/image/gristle_berry.png'),
      quality: 2,
      calories: '62000kcal',
      spoilTime: '2100s',
      cooking: '不需要'
    }
  ]
};
