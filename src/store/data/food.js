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
      name: 'cooked_fish',
      src: require('@/assets/image/cooked_fish.png'),
      quality: 3,
      calories: '1600 kcal',
      spoilTime: '2周期',
      cooking: '不需要'
    },
    {
      name: 'fried_mushroom',
      src: require('@/assets/image/fried_mushroom.png'),
      quality: 1,
      calories: '2800 kcal',
      spoilTime: '4周期',
      cooking: '不需要'
    },
    {
      name: 'frost_bun',
      src: require('@/assets/image/frost_bun.png'),
      quality: 2,
      calories: '1200 kcal',
      spoilTime: '4周期',
      cooking: '不需要'
    },
    {
      name: 'frost_burger',
      src: require('@/assets/image/frost_burger.png'),
      quality: 6,
      calories: '6000 kcal',
      spoilTime: '2周期',
      cooking: '不需要'
    },
    {
      name: 'gristle_berry',
      src: require('@/assets/image/gristle_berry.png'),
      quality: 1,
      calories: '2000 kcal',
      spoilTime: '4周期',
      cooking: '不需要'
    },
    {
      name: 'hexalent_fruit',
      src: require('@/assets/image/hexalent_fruit.png'),
      quality: -1,
      calories: '6400 kcal',
      spoilTime: '4周期',
      cooking: '不需要'
    },
    {
      name: 'lettuce',
      src: require('@/assets/image/lettuce.png'),
      quality: 0,
      calories: '400 kcal',
      spoilTime: '2周期',
      cooking: '不需要'
    },
    {
      name: 'liceloaf',
      src: require('@/assets/image/liceloaf.png'),
      quality: 0,
      calories: '1700 kcal',
      spoilTime: '4周期',
      cooking: '不需要'
    },
    {
      name: 'meal_lice',
      src: require('@/assets/image/meal_lice.png'),
      quality: -1,
      calories: '600 kcal',
      spoilTime: '4周期',
      cooking: '不需要'
    },
    {
      name: 'meat',
      src: require('@/assets/image/meat.png'),
      quality: -1,
      calories: '1600 kcal',
      spoilTime: '4周期',
      cooking: '不需要'
    },
    {
      name: 'muckroot',
      src: require('@/assets/image/muckroot.png'),
      quality: -1,
      calories: '800 kcal',
      spoilTime: '4周期',
      cooking: '不需要'
    },
    {
      name: 'mush_bar',
      src: require('@/assets/image/mush_bar.png'),
      quality: -1,
      calories: '800 kcal',
      spoilTime: '4周期',
      cooking: '不需要'
    },
    {
      name: 'mush_fry',
      src: require('@/assets/image/mush_fry.png'),
      quality: 0,
      calories: '1050 kcal',
      spoilTime: '4周期',
      cooking: '不需要'
    },
    {
      name: 'mushroom',
      src: require('@/assets/image/mushroom.png'),
      quality: 0,
      calories: '2400 kcal',
      spoilTime: '4周期',
      cooking: '不需要'
    },
    {
      name: 'mushroom_wrap',
      src: require('@/assets/image/mushroom_wrap.png'),
      quality: 4,
      calories: '4800 kcal',
      spoilTime: '2周期',
      cooking: '不需要'
    },
    {
      name: 'nosh_bean',
      src: require('@/assets/image/nosh_bean.png'),
      quality: 3,
      calories: '0 kcal',
      spoilTime: '4周期',
      cooking: '不需要'
    },
    {
      name: 'nutrient_bar',
      src: require('@/assets/image/nutrient_bar.png'),
      quality: -1,
      calories: '800 kcal',
      spoilTime: '16周期',
      cooking: '不需要'
    },
    {
      name: 'omelette',
      src: require('@/assets/image/omelette.png'),
      quality: 2,
      calories: '2800 kcal',
      spoilTime: '2周期',
      cooking: '不需要'
    },
    {
      name: 'pacu_fillet',
      src: require('@/assets/image/pacu_fillet.png'),
      quality: 2,
      calories: '1000 kcal',
      spoilTime: '2周期',
      cooking: '不需要'
    },
    {
      name: 'pepper_bread',
      src: require('@/assets/image/pepper_bread.png'),
      quality: 5,
      calories: '4000 kcal',
      spoilTime: '4周期',
      cooking: '不需要'
    },
    {
      name: 'pickled_meal',
      src: require('@/assets/image/pickled_meal.png'),
      quality: -1,
      calories: '1800 kcal',
      spoilTime: '16周期',
      cooking: '不需要'
    },
    {
      name: 'pincha_peppernut',
      src: require('@/assets/image/pincha_peppernut.png'),
      quality: 0,
      calories: '0 kcal',
      spoilTime: '2周期',
      cooking: '不需要'
    },
    {
      name: 'raw_egg',
      src: require('@/assets/image/raw_egg.png'),
      quality: -1,
      calories: '0 kcal',
      spoilTime: '4周期',
      cooking: '不需要'
    },
    {
      name: 'sleet_wheat_grain',
      src: require('@/assets/image/sleet_wheat_grain.png'),
      quality: 0,
      calories: '0 kcal',
      spoilTime: '8周期',
      cooking: '不需要'
    },
    {
      name: 'spicy_tofu',
      src: require('@/assets/image/spicy_tofu.png'),
      quality: 5,
      calories: '4000 kcal',
      spoilTime: '2周期',
      cooking: '不需要'
    },
    {
      name: 'stuffed_berry',
      src: require('@/assets/image/stuffed_berry.png'),
      quality: 4,
      calories: '4400 kcal',
      spoilTime: '2周期',
      cooking: '不需要'
    },
    {
      name: 'surf_turf',
      src: require('@/assets/image/surf_turf.png'),
      quality: 4,
      calories: '6000 kcal',
      spoilTime: '2周期',
      cooking: '不需要'
    },
    {
      name: 'tofu',
      src: require('@/assets/image/tofu.png'),
      quality: 2,
      calories: '3600 kcal',
      spoilTime: '2周期',
      cooking: '不需要'
    }
  ]
};
