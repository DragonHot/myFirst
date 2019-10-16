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
      name: '烤肉串',
      src: require('@/assets/image/barbeque.png'),
      quality: 3,
      calories: '4000 kcal',
      spoilTime: '2周期',
      cooking: '电动烤炉'
    },
    {
      name: '浆果泥膏',
      src: require('@/assets/image/berry_sludge.png'),
      quality: 3,
      calories: '4000 kcal',
      spoilTime: '65535', // 方便排序
      spoilTimeDes: '永不腐烂',
      cooking: '食物压制器'
    },
    {
      name: '毛刺浆果',
      src: require('@/assets/image/bristle_berry.png'),
      quality: 0,
      calories: '1600 kcal',
      spoilTime: '4周期',
      cooking: '不需要'
    },
    {
      name: '烤鱼排',
      src: require('@/assets/image/cooked_fish.png'),
      quality: 3,
      calories: '1600 kcal',
      spoilTime: '2周期',
      cooking: '不需要'
    },
    {
      name: '煎蘑菇',
      src: require('@/assets/image/fried_mushroom.png'),
      quality: 1,
      calories: '2800 kcal',
      spoilTime: '4周期',
      cooking: '不需要'
    },
    {
      name: '冰霜面包',
      src: require('@/assets/image/frost_bun.png'),
      quality: 2,
      calories: '1200 kcal',
      spoilTime: '4周期',
      cooking: '不需要'
    },
    {
      name: '冰霜汉堡',
      src: require('@/assets/image/frost_burger.png'),
      quality: 6,
      calories: '6000 kcal',
      spoilTime: '2周期',
      cooking: '不需要'
    },
    {
      name: '炙烤刺果',
      src: require('@/assets/image/gristle_berry.png'),
      quality: 1,
      calories: '2000 kcal',
      spoilTime: '4周期',
      cooking: '不需要'
    },
    {
      name: '六角根果',
      src: require('@/assets/image/hexalent_fruit.png'),
      quality: -1,
      calories: '6400 kcal',
      spoilTime: '65535',
      spoilTimeDes: '永不腐烂',
      cooking: '不需要'
    },
    {
      name: '海生菜',
      src: require('@/assets/image/lettuce.png'),
      quality: 0,
      calories: '400 kcal',
      spoilTime: '2周期',
      cooking: '不需要'
    },
    {
      name: '米虱面包',
      src: require('@/assets/image/liceloaf.png'),
      quality: 0,
      calories: '1700 kcal',
      spoilTime: '4周期',
      cooking: '不需要'
    },
    {
      name: '米虱',
      src: require('@/assets/image/meal_lice.png'),
      quality: -1,
      calories: '600 kcal',
      spoilTime: '4周期',
      cooking: '不需要'
    },
    {
      name: '肉',
      src: require('@/assets/image/meat.png'),
      quality: -1,
      calories: '1600 kcal',
      spoilTime: '4周期',
      cooking: '不需要'
    },
    {
      name: '淤泥根',
      src: require('@/assets/image/muckroot.png'),
      quality: -1,
      calories: '800 kcal',
      spoilTime: '65535',
      spoilTimeDes: '永不腐烂',
      cooking: '不需要'
    },
    {
      name: '软泥糕',
      src: require('@/assets/image/mush_bar.png'),
      quality: -1,
      calories: '800 kcal',
      spoilTime: '4周期',
      cooking: '不需要'
    },
    {
      name: '炸泥糕',
      src: require('@/assets/image/mush_fry.png'),
      quality: 0,
      calories: '1050 kcal',
      spoilTime: '4周期',
      cooking: '不需要'
    },
    {
      name: '蘑菇',
      src: require('@/assets/image/mushroom.png'),
      quality: 0,
      calories: '2400 kcal',
      spoilTime: '4周期',
      cooking: '不需要'
    },
    {
      name: '蘑菇卷',
      src: require('@/assets/image/mushroom_wrap.png'),
      quality: 4,
      calories: '4800 kcal',
      spoilTime: '2周期',
      cooking: '不需要'
    },
    {
      name: '小吃豆',
      src: require('@/assets/image/nosh_bean.png'),
      quality: 3,
      calories: '0 kcal',
      spoilTime: '4周期',
      cooking: '不需要'
    },
    {
      name: '营养棒',
      src: require('@/assets/image/nutrient_bar.png'),
      quality: -1,
      calories: '800 kcal',
      spoilTime: '65535',
      spoilTimeDes: '永不腐烂',
      cooking: '不需要'
    },
    {
      name: '煎蛋卷',
      src: require('@/assets/image/omelette.png'),
      quality: 2,
      calories: '2800 kcal',
      spoilTime: '2周期',
      cooking: '不需要'
    },
    {
      name: '帕库鱼片',
      src: require('@/assets/image/pacu_fillet.png'),
      quality: 2,
      calories: '1000 kcal',
      spoilTime: '2周期',
      cooking: '不需要'
    },
    {
      name: '火椒面包',
      src: require('@/assets/image/pepper_bread.png'),
      quality: 5,
      calories: '4000 kcal',
      spoilTime: '4周期',
      cooking: '不需要'
    },
    {
      name: '腌制米虱',
      src: require('@/assets/image/pickled_meal.png'),
      quality: -1,
      calories: '1800 kcal',
      spoilTime: '16周期',
      cooking: '不需要'
    },
    {
      name: '火椒粒',
      src: require('@/assets/image/pincha_peppernut.png'),
      quality: 0,
      calories: '0 kcal',
      spoilTime: '2周期',
      cooking: '不需要'
    },
    {
      name: '生蛋',
      src: require('@/assets/image/raw_egg.png'),
      quality: -1,
      calories: '0 kcal',
      spoilTime: '4周期',
      cooking: '不需要'
    },
    {
      name: '冰霜麦粒',
      src: require('@/assets/image/sleet_wheat_grain.png'),
      quality: 0,
      calories: '0 kcal',
      spoilTime: '8周期',
      cooking: '不需要'
    },
    {
      name: '麻婆豆腐',
      src: require('@/assets/image/spicy_tofu.png'),
      quality: 5,
      calories: '4000 kcal',
      spoilTime: '2周期',
      cooking: '不需要'
    },
    {
      name: '寿司',
      src: require('@/assets/image/stuffed_berry.png'),
      quality: 3,
      calories: '1600 kcal',
      spoilTime: '2周期',
      cooking: '不需要'
    },
    {
      name: '海陆双拼',
      src: require('@/assets/image/surf_turf.png'),
      quality: 4,
      calories: '6000 kcal',
      spoilTime: '2周期',
      cooking: '不需要'
    },
    {
      name: '豆腐',
      src: require('@/assets/image/tofu.png'),
      quality: 2,
      calories: '3600 kcal',
      spoilTime: '2周期',
      cooking: '不需要'
    }
  ]
};
