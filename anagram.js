const string1 = "listen";
const string2 = "silent";

const s1 = string1.split("").sort().join("");
const s2 = string2.split("").sort().join("");

if (s1 === s2) console.log("Both are anagrams");
else console.log("Both are not anagrams");

// TC -> O(nlogn)
