const cardsData = [
  {
    title: "毕业快乐",
    subtitle: "致张润铭师兄",
    image: "assets/images/01.jpg",
    text: "从西安交大创新港出发，奔赴下一段山海。愿此去前程浩荡，未来灿烂。",
    author: "",
    note: "封面使用创新港夜景图"
  },
  {
    title: "来自吕文卿的祝福",
    subtitle: "To 张润铭师兄",
    image: "assets/images/08.jpg",
    text: "各位观众好，欢迎收看本期特别新闻播报。今天，我们要宣布一则重磅喜报，张润铭同志顺利圆满完成学业，正式博士毕业！\n\n据了解，张润铭同志多年潜心深耕学术，伏案钻研、笃行不怠，今日终摘博士桂冠，圆满走完求学长路，迎来学业生涯的高光里程碑。喜讯一出，师长同窗、亲友同仁纷纷发来贺词，致以诚挚祝贺。\n\n我们在此衷心祝愿张润铭同志：学术长青，前程浩荡，治学顺遂大展宏图，前路璀璨万事胜意！",
    author: "吕文卿",
    note: "图片待人工确认"
  },
  {
    title: "来自祁昕阳的祝福",
    subtitle: "To 张润铭师兄",
    image: "assets/images/06.jpg",
    text: "鹏程岂是天涯远，一步云阶一步天。\n\n祝师兄毕业快乐，前程似锦。愿你在新的阶段继续坚定向前，所行皆坦途，所遇皆美好，未来一路顺遂，越来越好！",
    author: "祁昕阳",
    note: "使用王翔宇原来的照片，原祁昕阳照片不再引用"
  },
  {
    title: "来自王翔宇的祝福",
    subtitle: "To 张润铭师兄",
    image: "assets/images/pashan.jpg",
    text: "去年今日，我们还在一起送别达哥，没想到时间过得这么快，转眼之间，又到了送别师兄的时候。\n\n能和师兄一起在创新港相处、度过这两年快乐又难忘的时光，是我人生中很幸运的一件事。现在回想起来，很多画面都还很清晰：记得我们一起骑车去咸阳，迎着风一路说说笑笑；记得我们一起爬山，在路上聊天、休息、拍照；也记得我们一起打英雄联盟时的欢乐和吐槽。这些看似平常的日子，现在想来都变成了很珍贵的回忆。\n\n更让我感激的是，在我学业不顺、工作受阻、情绪低落的时候，师兄总能给我关怀、安慰和鼓励。很多时候，你可能只是随口说了几句话，或者简单地陪我聊一聊，但对当时的我来说，真的给了我很大的力量。你不仅是我学习和科研上的师兄，也是生活中很值得信赖的朋友和兄长。\n\n离别总是让人不舍，尤其是想到以后可能不能像现在这样经常在创新港见面、一起吃饭、一起聊天、一起玩游戏，心里难免有些遗憾。但我也真心为师兄即将开启人生的新阶段感到高兴。无论未来你去往哪里，是否还留在西安，都希望你能一路顺利，前程似锦，继续保持热爱和从容，走向更加广阔的人生。\n\n愿师兄此去山高路远，前路有光；愿我们不管相隔多远，依旧常联系、常相聚。毕业快乐，未来可期！",
    author: "王翔宇",
    note: "使用爬山合影照片"
  },
  {
    title: "来自王泓鉴的祝福",
    subtitle: "To 张润铭师兄",
    image: "assets/images/02.jpg",
    text: "潜心研电气，\n空余赴峡谷。\n下路常拿射，\n开团无输出。\n\n莫笑操作浅，\n才学自有金。\n高升薪资涨，\n前路踏青云。",
    author: "王泓鉴",
    note: "使用图02"
  },
  {
    title: "来自刘俊贤的祝福",
    subtitle: "To 张润铭师兄",
    image: "assets/images/ljx.jpg",
    text: "汽笛一声肠已断，从此天涯孤旅。凭割断愁丝恨缕。要似昆仑崩绝壁，又恰像台风扫寰宇。\n\n愿你的行程坦然，风禾尽起；愿少年人的愤怒常在你身；愿你依旧前进，就像你的指针，永远落在前方。",
    author: "刘俊贤",
    note: "使用图集中的 ljx"
  },
  {
    title: "来自刘心怡的祝福",
    subtitle: "To 张润铭师兄",
    image: "assets/images/lxy.jpg",
    text: "天空上面是天空，道路前面还是道路。学术的终点，亦是全新旷野的起点。愿你在未来的人生课题里，依然保有科研的坚韧与纯粹。\n\n感谢同门这段岁月里，你给予我的耐心指引与无私帮助。长路漫漫，祝前程似锦！",
    author: "刘心怡",
    note: "使用图集中的 lxy"
  },
  {
    title: "来自陈洁立的祝福",
    subtitle: "To 张润铭师兄",
    image: "assets/images/04.jpg",
    text: "速速（王翔宇让说的）",
    author: "陈洁立",
    note: "图片待人工确认"
  },
  {
    title: "来自付瑾晖的祝福",
    subtitle: "To 张润铭师兄",
    image: "assets/images/07.jpg",
    text: "恭喜我家先生顺利通关学术界的最高难度副本！我为你开心骄傲～愿未来的你，依然眼底有光，心中有火。\n\n新的人生副本也即将开启啦，是和最爱的你一起去解锁更大的世界地图，一起去很多地方，看很多风景，收集数不清的开怀大笑，把每一个平凡的日子，都过成我们想要的美好模样。毕业快乐，我的Dr.！",
    author: "付瑾晖",
    note: "使用第7张图"
  },
  {
    title: "毕业快乐，未来可期",
    subtitle: "愿我们常有相逢",
    image: "assets/images/dahz.jpg",
    text: "从创新港到更远的远方，从并肩同行到各自奔赴，很多日子也许平凡，却因为一起经历而变得珍贵。\n\n愿师兄毕业快乐，前程似锦，所行皆坦途，所遇皆良善。无论未来去往哪里，都愿你保持热爱，坚定从容，拥有属于自己的精彩人生。\n\n愿我们山高路远，常有相逢。",
    author: "",
    note: "结尾页使用图集中的大合照"
  }
];

const coverScreen = document.querySelector("#coverScreen");
const coverPhoto = document.querySelector("#coverPhoto");
const coverTitle = document.querySelector("#coverTitle");
const coverSubtitle = document.querySelector("#coverSubtitle");
const coverText = document.querySelector("#coverText");
const cardApp = document.querySelector("#cardApp");
const openCardBtn = document.querySelector("#openCardBtn");
const albumPage = document.querySelector("#albumPage");
const pageCounter = document.querySelector("#pageCounter");
const cardLabel = document.querySelector("#cardLabel");
const cardTitle = document.querySelector("#cardTitle");
const cardSubtitle = document.querySelector("#cardSubtitle");
const cardText = document.querySelector("#cardText");
const cardAuthor = document.querySelector("#cardAuthor");
const cardImage = document.querySelector("#cardImage");
const imageFrame = document.querySelector("#imageFrame");
const imagePlaceholder = document.querySelector("#imagePlaceholder");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const replayBtn = document.querySelector("#replayBtn");
const dots = document.querySelector("#dots");

let currentIndex = 0;
let touchStartX = 0;
let touchStartY = 0;
const preloadedImages = new Set();

function setCoverImage() {
  const coverCard = cardsData[0] || {};
  const coverImage = coverCard.image || "assets/images/01.jpg";
  document.documentElement.style.setProperty("--cover-image", `url("${coverImage}")`);
  coverPhoto.style.backgroundImage = `url("${coverImage}")`;
  coverTitle.textContent = coverCard.title || "";
  coverSubtitle.textContent = coverCard.subtitle || "";
  coverText.textContent = coverCard.text || "";
}

function renderText(text) {
  cardText.innerHTML = "";
  text
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .forEach((paragraph) => {
      const p = document.createElement("p");
      p.textContent = paragraph;
      cardText.appendChild(p);
    });
}

function setImage(card, pageNumber) {
  imageFrame.classList.remove("is-error");
  imagePlaceholder.textContent = "照片暂未加载";
  cardImage.hidden = false;
  cardImage.alt = `${card.title}照片，第 ${pageNumber} 页`;
  cardImage.onload = () => {
    imageFrame.classList.remove("is-error");
    cardImage.hidden = false;
  };
  cardImage.onerror = () => {
    imageFrame.classList.add("is-error");
    cardImage.hidden = true;
    imagePlaceholder.textContent = "照片暂未加载，可检查图片路径是否正确";
  };
  cardImage.src = card.image;
}

function preloadImage(index) {
  if (index < 0 || index >= cardsData.length) {
    return;
  }

  const imagePath = cardsData[index]?.image;
  if (!imagePath || preloadedImages.has(imagePath)) {
    return;
  }

  preloadedImages.add(imagePath);
  const img = new Image();
  img.decoding = "async";
  img.src = imagePath;
}

function preloadAdjacentImages() {
  preloadImage(currentIndex + 1);
  preloadImage(currentIndex - 1);
}

function buildDots() {
  dots.innerHTML = "";
  cardsData.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "dot";
    dot.setAttribute("aria-label", `跳转到第 ${index + 1} 页`);
    dot.addEventListener("click", () => showCard(index));
    dots.appendChild(dot);
  });
}

function updateDots() {
  [...dots.children].forEach((dot, index) => {
    const isActive = index === currentIndex;
    dot.classList.toggle("is-active", isActive);
    dot.setAttribute("aria-current", isActive ? "page" : "false");
  });
}

function updateControls() {
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === cardsData.length - 1;
  prevBtn.disabled = isFirst;
  nextBtn.hidden = isLast;
  replayBtn.hidden = !isLast;
  pageCounter.textContent = `${currentIndex + 1} / ${cardsData.length}`;
  updateDots();
}

function renderCard() {
  const card = cardsData[currentIndex];
  const pageNumber = currentIndex + 1;
  cardLabel.textContent = `第 ${pageNumber} 页`;
  cardTitle.textContent = card.title;
  cardSubtitle.textContent = card.subtitle || "";
  renderText(card.text || "");
  cardAuthor.textContent = card.author ? `—— ${card.author}` : "";
  setImage(card, pageNumber);
  updateControls();
  preloadAdjacentImages();
}

function showCard(index) {
  if (index < 0 || index >= cardsData.length || index === currentIndex) {
    return;
  }

  const direction = index > currentIndex ? "turn-next" : "turn-prev";
  currentIndex = index;
  renderCard();

  albumPage.classList.remove("turn-next", "turn-prev");
  void albumPage.offsetWidth;
  albumPage.classList.add(direction);
}

function openCard() {
  coverScreen.hidden = true;
  cardApp.hidden = false;
  renderCard();
  try {
    nextBtn.focus({ preventScroll: true });
  } catch (error) {
    nextBtn.focus();
  }
}

function goNext() {
  showCard(currentIndex + 1);
}

function goPrev() {
  showCard(currentIndex - 1);
}

function restartAlbum() {
  currentIndex = 0;
  renderCard();
  albumPage.classList.remove("turn-next", "turn-prev");
  void albumPage.offsetWidth;
  albumPage.classList.add("turn-prev");
}

openCardBtn.addEventListener("click", openCard);
prevBtn.addEventListener("click", goPrev);
nextBtn.addEventListener("click", goNext);
replayBtn.addEventListener("click", restartAlbum);

document.addEventListener("keydown", (event) => {
  if (cardApp.hidden) {
    return;
  }

  if (event.key === "ArrowRight") {
    goNext();
  }

  if (event.key === "ArrowLeft") {
    goPrev();
  }
});

albumPage.addEventListener("touchstart", (event) => {
  const touch = event.changedTouches[0];
  touchStartX = touch.clientX;
  touchStartY = touch.clientY;
}, { passive: true });

albumPage.addEventListener("touchend", (event) => {
  const touch = event.changedTouches[0];
  const diffX = touch.clientX - touchStartX;
  const diffY = touch.clientY - touchStartY;

  if (Math.abs(diffX) < 50 || Math.abs(diffX) < Math.abs(diffY) * 1.2) {
    return;
  }

  if (diffX < 0) {
    goNext();
  } else {
    goPrev();
  }
}, { passive: true });

buildDots();
setCoverImage();
renderCard();
