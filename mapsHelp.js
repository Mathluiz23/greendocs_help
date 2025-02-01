let map = new Map();
map.set("name", "John");
map.set("age", 30);

console.log(map.get("name")); // "John"
console.log(map.has("age")); // true
map.delete("age");
console.log(map.has("age")); // false

for (let [key, value] of map) {
    console.log(`${key}: ${value}`);
}


