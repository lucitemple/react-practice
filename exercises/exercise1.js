// Write a function which will take any string (sentence) and tell you which letter you used the most! fourFunction("The weather today is nice") should return { favoriteLetter: "e", count: 4 } 

const ourFunction = str => {
    let obj = { favoriteLetter: "", count: 0 };
    let regex;
    str.split("").forEach((letter) => {
      regex = new RegExp("" + letter + "", "gi");
      let count1 = str.match(regex).length;
      if (count1 > obj.count) {
        obj.favoriteLetter = letter;
        obj.count = count1;
      }
    });
    return obj;
}

ourFunction("The weather today is nice");