export default {
  th: ['名称', '品质', '卡路里', '保质期', '厨具'],
  map: ['name', 'quality', 'calories', 'spoilTime', 'cooking'],
  description: [
    '',
    '食物的品质影响提供的士气，比如3品质的食物可以提供3士气',
    '1千克该食物所提供的卡路里',
    '食物的保质期，普通速度下1周期等于600秒，最快速度3倍下为200秒',
    '制造该食物需要用到的厨具'
  ],
  td: [
    {
      name: {
        text: '烤肉串',
        src: require('@/assets/image/barbeque.png')
      },
      quality: 3,
      calories: '4000 kcal',
      spoilTime: '2周期',
      cooking: '电动烤炉'
    },
    {
      name: {
        text: '浆果泥膏',
        src: require('@/assets/image/gristle_berry.png')
      },
      quality: 3,
      calories: '4000 kcal',
      spoilTime: '65535', // 方便排序
      spoilTimeDes: '永不腐烂',
      cooking: '食物压制器'
    },
    {
      name: {
        text: '毛刺浆果',
        src: require('@/assets/image/gristle_berry.png')
      },
      quality: 0,
      calories: '1600 kcal',
      spoilTime: '4周期',
      cooking: '不需要'
    }
  ]
};
