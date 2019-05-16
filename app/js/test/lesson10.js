// {
//     let set = new Set(['red', 'green', 'blue']);
//     console.log(set); // {"red", "green", "blue"}
//     let arr = [...set];
//     console.log(arr); // ["red", "green", "blue"]
// }
//
//
// {
//     let list = new Set();
//     list.add(5);
//     list.add(7);
//
//     console.log('size', list.size);
// }
//
// {
//     let arr = [1, 2, 3, 4, 5];
//     let list = new Set(arr);
//
//     console.log('size', list.size);
// }
//
// {
//     let list = new Set();
//     list.add(1);
//     list.add(2);
//     list.add(1);
//
//     console.log('list', list);
//
//     let arr = [1, 2, 3, 1, '2'];
//     let list2 = new Set(arr);
//
//     console.log('unique', list2);
// }
//
// {
//     let arr = ['add', 'delete', 'clear', 'has'];
//     let list = new Set(arr);
//
//     console.log('has', list.has('add'));
//     console.log('delete', list.delete('add'), list);
//     list.clear();
//     console.log('list', list);
// }
//
// {
//     let arr = ['add', 'delete', 'clear', 'has'];
//     let list = new Set(arr);
//
//     for (let key of list.keys()) {
//         console.log('keys', key);
//     }
//     for (let value of list.values()) {
//         console.log('value', value);
//     }
//     for (let [key, value] of list.entries()) {
//         console.log('entries', key, value);
//     }
//
//     list.forEach(function (item) {
//         console.log(item);
//     })
// }
//
//
// {
//     let weakList = new WeakSet();
//
//     let arg = {};
//
//     weakList.add(arg);
//
//     // weakList.add(2);
//
//     console.log('weakList', weakList);
// }
//
//
// {
//     let map = new Map();
//     let arr = ['123'];
//     // 添加一个 arr=> 456 这样的键值
//     map.set(arr, 456);
//     console.log('map', map); // 返回map 对象结构：{Array(1) => 456}
//     // 通过 get 数组键 arr 获取到对应的值
//     console.log('map-arr', map.get(arr)); // 返回456
// }
//
// {
//     let map = new Map([['a', 123], ['b', 456]]);
//     console.log('size', map.size); // 返回2
//     console.log('delete', map.delete('a')); // 返回 true
//     console.log('map', map); // 返回{"b" => 456}
//     // 清空
//     console.log('clear', map.clear());
//     console.log('map', map); // 返回{}
// }
//
// {
//     let weakmap = new WeakMap();
//
//     let o = {};
//     weakmap.set(o, 123);
//     console.log(weakmap.get(o));
// }

console.log("-------------------");

// {
//     //  map 和 array数据结构对比
//     let map = new Map();
//     let array = [];
//
//     //  增
//     map.set('t', 1);
//     array.push({t: 1});
//
//     console.log('map', map); // 返回 map 结构的{"t" => 1}
//     console.log('array', array); // 返回[{t: 1}]
//
//     //  查
//     let mapExist = map.has('t');
//     let arrayExist = array.find(item => item.t);
//
//     console.log('mapExist:', mapExist); // 返回 true
//     console.log('arrayExist:', arrayExist); // 返回{t: 1}
//
//     // 改
//     map.set('t', 2);
//     array.forEach(item => item.t ? item.t = 2 : '');
//     console.log('map', map); // 返回 map 结构的{"t" => 2}
//     console.log('array', array); // 返回 [{t: 2}]
//
//     // 删
//     map.delete('t');
//     let index = array.findIndex(item => item.t);
//     array.splice(index, 1);
//     console.log('map', map); // 返回{}
//     console.log('array', array); // 返回[]
// }


console.log("-------------------");
// {
//     // set 和 array 数据结构对比
//     let set = new Set();
//     let array = [];
//
//     let itemObj = {t: 1};
//     // 增
//     set.add(itemObj);
//     array.push({t: 1});
//     console.log('set', set); // 返回 set 结构的 {t: 1}
//     console.log('array', array); // 返回[{t: 1}]
//
//     // 查
//     let setExist = set.has(itemObj);
//     let arrayExist = array.find(item => item.t);
//     console.log('setExist:', setExist); // 返回 true
//     console.log('arrayExist:', arrayExist); // {t: 1}
//
//     // 改
//     set.forEach(item => item.t ? item.t = 2 : '');
//     array.forEach(item => item.t ? item.t = 2 : '');
//     console.log('set:', set); // 返回 set 结构的 {t: 2}
//     console.log('array:', array); // 返回[{t: 2}]
//
//     // 删
//     set.forEach(item => item.t ? set.delete(item) : '');
//     let index = array.findIndex(item => item.t);
//     array.splice(index, 1);
//     console.log('set:', set); // 返回{}
//     console.log('array:', array); // 返回[]
// }

{
    // map，set，object对比
    let item = {
        t: 1
    };
    let map = new Map();
    let set = new Set();
    let obj = {};

    // 增
    map.set('t', 1);
    set.add(item);
    obj['t'] = 1;
    console.log('map', map); // 返回 map结构的{"t" => 1}
    console.log('set', set); // 返回 set 结构的[{t: 1}]
    console.log('obj', obj); // 返回 {t: 1}

    // 查
    console.log('map', map.has('t')); // 返回 true
    console.log('set', set.has(item)); // 返回 true
    console.log('obj', 't' in obj); // 返回 true

    // 改
    map.set('t', 2);
    // 引用类型的值保存，如果不知道他的指针，就需要遍历整个 set 结构来修改
    // set.forEach(item => item.t ? item.t = 2 : '');
    item.t = 2; // 这里是因为 set 保存的是引用类型的值，所以可以直接修改引用（内存指针）
    obj['t'] = 2;
    console.log('map', map); // 返回 map结构的{"t" => 2}
    console.log('set', set); // 返回 set 结构的[{t: 2}]
    console.log('obj', obj); // 返回 {t: 2}

    // 删除
    map.delete('t'); // 返回空
    set.delete(item); // 返回空
    delete obj['t']; // 返回空
}

// 优先使用 map，如果对数据唯一性要求，使用 set，