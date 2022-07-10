const data = [{
    img: {
      md: "./images/desktop/image-deep-earth.jpg",
      sm: "./images/mobile/image-deep-earth.jpg"
    },
    text: "Deep earth"
  },
  {
    img: {
      md: "./images/desktop/image-night-arcade.jpg",
      sm: "./images/mobile/image-night-arcade.jpg"
    },
    text: "Night arcade"
  },
  {
    img: {
      md: "./images/desktop/image-soccer-team.jpg",
      sm: "./images/mobile/image-soccer-team.jpg"
    },
    text: "Soccer team VR"
  },
  {
    img: {
      md: "./images/desktop/image-grid.jpg",
      sm: "./images/mobile/image-grid.jpg"
    },
    text: "The grid"
  },
  {
    img: {
      md: "./images/desktop/image-from-above.jpg",
      sm: "./images/mobile/image-from-above.jpg"
    },
    text: "From up above VR"
  },
  {
    img: {
      md: "./images/desktop/image-pocket-borealis.jpg",
      sm: "./images/mobile/image-pocket-borealis.jpg"
    },
    text: "Pocket borealis"
  },
  {
    img: {
      md: "./images/desktop/image-curiosity.jpg",
      sm: "./images/mobile/image-curiosity.jpg"
    },
    text: "The curiosity"
  },
  {
    img: {
      md: "./images/desktop/image-fisheye.jpg",
      sm: "./images/mobile/image-fisheye.jpg"
    },
    text: "Make it fisheye"
  },
]

if (window) {
  let products = document.getElementById("products");

  console.log(products)

  data.forEach((card) => {
    let layout = document.createElement("div");
    layout.classList.add("card-img")
    let img_sm = document.createElement("img");
    img_sm.src = card.img.sm;
    img_sm.classList.add("img-sm")
    let img_md = document.createElement("img");
    img_md.src = card.img.md;
    img_md.classList.add("img-md")
    let span = document.createElement("span")
    span.innerText = card.text;

    layout.appendChild(img_sm)
    layout.appendChild(img_md)
    layout.appendChild(span)

    products.appendChild(layout);
  })
}