function consecutiveSubstrings(string) {
  // initialized array to store result
  const result = [];
  //outer loop: iterate through each starting position in the string
  for (let i = 0; i < string.length; i++) {
    //inner loop: iterates through each possible ending position for substrings starting at position i
    for (let j = i + 1; j <= string.length; j++) {
      //extract substrings and add to result array
      result.push(string.slice(i, j));
    }
  }
  return result;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings("abc"));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings("a"));

  console.log("");

  console.log(
    "Expecting: ['c', 'co', 'coi', 'coil', 'o', 'oi', 'oil', 'i', 'il', 'l']"
  );
  console.log("=>", consecutiveSubstrings("coil"));

  console.log("");
  console.log(
    "Expecting: ['r', 'ra', 'rac', 'race', 'racec', 'raceca', 'racecar', 'a', 'ac', 'ace', 'acec', 'aceca', 'acecar', 'c', 'ce', 'cec', 'ceca', 'cecar', 'e', 'ec', 'eca', 'ecar', 'c', 'ca', 'car', 'a', 'ar', 'r']"
  );
  console.log("=>", consecutiveSubstrings("racecar"));
}

module.exports = consecutiveSubstrings;
