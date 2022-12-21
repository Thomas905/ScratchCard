const fs = require("fs");

const data1String = fs.readFileSync("export.json", "utf8");
const data2String = fs.readFileSync("address.json", "utf8");

const data1 = JSON.parse(data1String); //object1
const data2 = JSON.parse(data2String); //object2

const matches = [];

for (const object1 of data1) {
    // Find the object with the same name in the second data table
    const object2 = data2.find((item) => item.name === object1.name);
    // Add the corresponding object to the new mapping table
    matches.push({ object1, object2 });
}
const names = matches.map((item) => item.object1.name + " " + item.object2.email);

const counts = {};

Object.values(names).forEach((value) => {
    if (counts[value]) {
        counts[value]++;
    } else {
        counts[value] = 1;
    }
});
for (const value in counts) {
    console.log(`${value}: ${counts[value]}`);
}