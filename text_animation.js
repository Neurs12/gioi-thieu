function genStr(length) {
    let result = "";
    const characters = "1qaz!QAZ2wsx@WSX3edc#EDC4rfv$RFV5tgb%TGB6yhn^YHN7ujm&UJM8ik,*IK<9ol.(OL>0p;/)P:?-['_{\"=]\\+}|";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function randomTextFlyer(element, text) {
    const conentLength = text.length;
    var compare = 0;
    var ds = setInterval(() => {
        compare += 1;
        element.textContent = text.slice(0, compare) + text.slice(compare, conentLength).split(" ").map(p => genStr(p.length)).join(" ");
        if (compare == conentLength){
            clearInterval(ds);
        }
    }, 50);
}