const tweetBox = document.getElementById("tweetBox");
const tweetArea = document.getElementById("tweetArea");
const addTweet = document.getElementById("addTweet");
const hashtagDisplay = document.getElementById("hashtagDisplay");
const clearLocalStorage = document.getElementById("clearLocalStorage");
const inputImageForm = document.querySelector('input[type="file"]');
let hashtagAll = [];
let tweetDatabase = [];
const MAX_CHARACTER = 140;
let test = { name: "Tuan" };
let myApiJsonUrl = "https://api.myjson.com/bins/h3hx2";

//LOCAL STORAGE PART
// const clearLocalStorageButton = () => {
//   localStorage.clear()
// }

// clearLocalStorage.addEventListener('click', clearLocalStorageButton);

// const saveLocalStorage = () => {
//   localStorage.setItem('tweetDatabase', JSON.stringify(tweetDatabase));
// }

// const getLocalStorage = () => {
//   tweetDatabase = JSON.parse(localStorage.getItem('tweetDatabase'));
//   if (!tweetDatabase) {
//     tweetDatabase = [];
//   }
//   console.log(`Just get from local storage`);
//   console.log(tweetDatabase);
// }

//only get the URL after run this. Definitely in the beginning
const startJsonApi = () => {
  let url = "https://api.myjson.com/bins";
  fetch(url, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(tweetDatabase),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      myApiJsonUrl = data.uri;
      console.log(myApiJsonUrl);
    });
};

const loadJsonApi = url => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      tweetDatabase = data;
      hashtagAll = tweetDatabase
        .map(item => item.hashtagList)
        .reduce(
          (total, accumulator) =>
            accumulator ? total.concat(accumulator) : total.concat(""),
          []
        );
      render();
    });
};

const updateJsonApi = url => {
  fetch(url, {
    method: "PUT",
    mode: "cors",
    body: JSON.stringify(tweetDatabase),
    headers: {
      "Content-Type": "application/json"
    }
  });
};

const clearJsonApi = url => {
  fetch(url, {
    method: "PUT",
    mode: "cors",
    body: JSON.stringify([]),
    headers: {
      "Content-Type": "application/json"
    }
  });
};

const render = () => {
  tweetArea.innerHTML = renderTweet();
  hashtagDisplay.innerHTML = renderHashtag();
  document.getElementById("inputImageDisplay").innerHTML = renderImage();
  updateJsonApi(myApiJsonUrl);
};

const renderTweet = () => {
  return tweetDatabase
    .map(item => {
      return `
    <li id=${item.id}>${item.content.replace(
        /(^|\s)(#[a-z\d-]+)/gi,
        "$1<span class='hash_tag'>$2</span>"
      )}
        <a href='#' onClick="handleLike(${item.id})">${
        item.isLike ? "Unlike" : "Like"
      }</a>
        <a href='#' onClick="handleRetweet(${item.id})">Retweet</a>
        <a href='#' onClick="handleDelete(${item.id})">Delete</a>
    </li>
    `;
    })
    .join("");
};

// const handleUsername = () => { 
//   const regEx = /^|\s(@[a-z\d]+)\s/gi;
//   if (tweetBox.value.match(regEx)) 
// }

const handleHashtag = () => {
  const regEx = /(^|\s)(#[a-z\d-]+)/gi;
  if (tweetBox.value.match(regEx)) {
    trimSpace = tweetBox.value
      .match(regEx)
      .map(hashtag => hashtag.replace(/\s+/g, ""));
    hashtagAll = hashtagAll.concat(trimSpace);
    return trimSpace;
  }
};

const renderHashtag = () => {
  let hashtagWithCount = {};
  hashtagAll.forEach(item => {
    if (item) {
      if (hashtagWithCount[item]) {
        hashtagWithCount[item]++;
      } else {
        hashtagWithCount[item] = 1;
      }
    }
  });
  let htmlHashtag = "";

  for (let key in hashtagWithCount) {
    if (key) {
      htmlHashtag += `<li><a href='#' onClick="filterHashtag('${key}')">${key} (${
        hashtagWithCount[key]
      })</a></li>`;
    }
  }
  return htmlHashtag;
};

const handleDelete = id => {
  tweetDatabase = tweetDatabase.filter(item => item.id !== id);
  render();
};

const handleLike = id => {
  tweetDatabase = tweetDatabase.map(item => {
    if (item.id === id) {
      item.isLike = !item.isLike;
    }
    return item;
  });
  console.log(tweetDatabase);
  render();
};

const filterHashtag = hashtag => {
  tweetDatabase = tweetDatabase.filter(tweet =>
    tweet.hashtagList.includes(hashtag)
  );
  render();
};

const insert = (arr, index, newItem) => [
  ...arr.slice(0, index),
  newItem,
  ...arr.slice(index)
];

const handleRetweet = id => {
  let reTweetItem;
  let reTweetIndex;
  tweetDatabase = tweetDatabase.map((item, index) => {
    if (item.id === id) {
      reTweetItem = Object.assign({}, item);
      reTweetItem.isLike = false;
      reTweetItem.belongToId = item.id;
      reTweetItem.reTweetId = new Date().getTime();
      reTweetIndex = index + 1;
    }
    return item;
  });
  tweetDatabase = insert(tweetDatabase, reTweetIndex, reTweetItem);
  console.log(tweetDatabase);
  render();
};

addTweet.addEventListener("click", () => {
  tweetDatabase = [
    ...tweetDatabase,
    {
      content: tweetBox.value,
      isLike: false,
      id: new Date().getTime(),
      belongToId: null,
      reTweetId: null,
      hashtagList: handleHashtag ? [].concat(handleHashtag()) : []
    }
  ];
  document.getElementById(
    "charRemaining"
  ).innerHTML = `140 characters remaining`;
  render();
  tweetBox.value = "";
  tweetBox.focus();
});

tweetBox.addEventListener("input", () => {
  document.getElementById("charRemaining").innerHTML = `${MAX_CHARACTER -
    tweetBox.value.length} character(s) remaining`;
  //Disable button if >140 Char
  if (tweetBox.value.length > 140) {
    addTweet.setAttribute("disabled", "disabled");
  } else {
    addTweet.removeAttribute("disabled");
  }
});

const handleImage = () => {
  console.log(inputImageForm.files);
  for (i in inputImageForm.files) {
    if (i == "length") {
      break;
    }
    console.log(inputImageForm.files[i]);
    console.log(URL.createObjectURL(inputImageForm.files[i]));
  }
  render();
};

let htmlImage = "";
const renderImage = () => {
  if (inputImageForm.files.length == 0) {
    console.log("Select more file");
    return ``;
  } else {
    for (i in inputImageForm.files) {
      if (i == "length") {
        break;
      }
      let src = URL.createObjectURL(inputImageForm.files[i]);
      let alt = inputImageForm.files[i].name
       htmlImage += `
      <li class='list-inline-item'><img class='img-fluid img-thumbnail reduce-size' src='${src}' alt=${alt} /> </li>
    `;
    }
    return htmlImage;
  }
};

inputImageForm.addEventListener("change", handleImage);

loadJsonApi(myApiJsonUrl);
render();

