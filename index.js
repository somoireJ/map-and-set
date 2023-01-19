//MAPS
/*Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type*/
let map = new Map();
map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set('this is my string', 'string');
map.set(true, 'bool1'); // a boolean key
alert(map.get(1)); // 'num1'
alert(map.get('1')); // 'str1'
alert(map.get('this is my string'));
alert(map.size); // 3

//
let john = { name: "John" };
let ben = { name: "Ben" };
let visitsCountObj = {}; // try to use an object
visitsCountObj[ben] = 234; // try to use ben object as the key
visitsCountObj[john] = 123; // try to use john object as the key, ben object will get replaced
// That's what got written!
alert(visitsCountObj["[object Object]"]); // 123

/*For example, we have visitors coming, and we’d like to remember everyone. But repeated visits should not lead to duplicates. A visitor must be “counted” only once.
Set is just the right thing for that:*/

let set = new Set();

let john1 = { name: "John1" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john1);
set.add(mary);
set.add(pete);
set.add(mary);
set.add(john1);
set.add(john1);
set.add(mary);

// set keeps only unique values
alert(set.size); // 3

for (let user of set) {
  alert(user.name); // John1 (then mary and pete)
}