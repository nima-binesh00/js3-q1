// ? Display the following array on the page
// ? First, watch the video in the help folder.
// todo-1: In the next step, review the HTML and CSS files.
// todo-2: Iterate over the "data" array and create a card for each array index.
// todo-3: Append the created card to the element with the class "cards".
// todo-4: Each card should have a button; when clicked, the card title should be displayed on the element with the class "op".

const wrapper = document.querySelector(".cards");
const data = [
  {
    id: 1,
    title: "ravel Monkey Club #1",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item-9.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 2,
    title: "ravel Monkey Club #2",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-21.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 3,
    title: "ravel Monkey Club #3",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-10.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
  {
    id: 4,
    title: "ravel Monkey Club #4",
    src: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item8.jpg",
    account: "Ralph Garraway",
    accountImage:
      "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
  },
];

// !Answer:
data.forEach((element) => {
  const card = document.createElement("div");
  card.classList.add("container");

  const noo = document.createElement("div");
  noo.classList.add("noo");

  const image = document.createElement("img");
  image.classList.add("non");
  image.src = element.src;

  const lili = document.createElement("div");
  lili.classList.add("lili");

  const likeIcon = document.createElement("i");
  likeIcon.classList.add("fa-regular", "fa-heart");

  const likesNumber = document.createElement("p");
  likesNumber.textContent = "100";

  lili.appendChild(likeIcon);
  lili.appendChild(likesNumber);
  noo.appendChild(image);
  noo.appendChild(lili);

  const num88 = document.createElement("div");
  num88.classList.add("num88");

  const cardTitle = document.createElement("h4");
  cardTitle.textContent = element.title;

  const cardNum232 = document.createElement("div");
  cardNum232.classList.add("num232");
  cardNum232.textContent = "BSC";

  num88.appendChild(cardTitle);
  num88.appendChild(cardNum232);

  const but = document.createElement("div");
  but.classList.add("but");

  const li = document.createElement("div");
  li.classList.add("li");

  const accountImage = document.createElement("img");
  accountImage.classList.add("accountImage");
  accountImage.src = element.accountImage;

  const nyny = document.createElement("p");
  nyny.classList.add("nyny");
  nyny.textContent = element.account;

  const cartDiv = document.createElement("div");
  cartDiv.classList.add("cartDiv");

  const num = document.createElement("p");
  num.classList.add("num");
  num.textContent = "please Bid";

  const cartIcon = document.createElement("i");
  cartIcon.classList.add("cartIcon", "fa-solid", "fa-bag-shopping");

  cartDiv.addEventListener("click", () => {
    op.textContent = `You selected card #${element.id}`;
  });

  cartDiv.appendChild(cartIcon);
  cartDiv.appendChild(num);

  li.appendChild(accountImage);
  li.appendChild(nyny);
  but.appendChild(li);
  but.appendChild(cartDiv);

  card.appendChild(noo);
  card.appendChild(num88);
  card.appendChild(but);

  wrapper.appendChild(card);
});
