export function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    // Generate random number
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

export function duplicateArrayWithId(array) {
  let l = array.length;
  // console.log(array);

  for (var i = 0; i < l; i++) {
    // Generate random number
    let newCard = Object.assign({}, array[i]);
    // console.log(typeof newCard);
    newCard["id"] = (parseInt(newCard["id"]) + 100).toString();
    array.push(newCard);
  }
  // console.log(array);
  return array;
}

export function getRandomCharacterIdList(n) {
  let idList = [];
  while (idList.length < n) {
    let newId = parseInt(Math.random() * 100);
    if (!idList.includes(newId) && newId !== 0) {
      idList.push(newId);
    }
  }
  return idList;
}

export function getDifficultyNumber(l) {
  if (l === "Low") {
    return 10;
  } else if (l === "Medium") {
    return 15;
  } else if (l === "High") {
    return 20;
  }
}

export function getPairingDifficultyNumber(l) {
  if (l === "Low") {
    return 8;
  } else if (l === "Medium") {
    return 12;
  } else if (l === "High") {
    return 16;
  }
}
