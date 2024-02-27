function happyLadybugs(b) {
  // the string is only one letter long
  if (b.length === 1 && b[0] !== "_") {
    console.log("NO");
    return;
  }

  // there's a letter that only occurs once
  let oneOccurence = false;
  for (let i = 0; i < b.length; i++) {
    if (b[i] !== "_") {
      const regex = new RegExp(b[i], "g");
      const matches = b.match(regex);
      if (matches.length === 1) {
        oneOccurence = true;
      }
    }
  }

  // the string is all the same character
  let allOneChar = false;
  const arrB = b.split("");
  if ([...new Set(arrB)].length === 1) {
    allOneChar = true;
  }

  // there's an empty space
  let isEmptySpace = false;
  if (b.match(/_/g)) {
    isEmptySpace = true;
  }

  // there are no empty spaces, but all the letters are ordered correctly
  if (!isEmptySpace) {
    for (let i = 0; i < b.length; i++) {
      let regex = new RegExp(`${b[i]}{2,}`, "g");
      const matches = b.match(regex);
      console.log("Order matches:", matches);
      if (!matches) {
        console.log("NO");
        return;
      }
    }
    console.log("YES");
    return;
  }

  if ((!oneOccurence && isEmptySpace) || allOneChar) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

happyLadybugs(
  "QSMMSSWWSW"
);
