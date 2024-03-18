const colorVarient = document.querySelectorAll('.varient-img-container img');

colorVarient.forEach((e) => {
  changeProductImage(e);
});

function changeProductImage(elem) {
  elem.addEventListener('click', () => {
    setColorVarientImage(elem);
    addNewIcon(elem);
  });
}

function setColorVarientImage (elem) {
  const productImage = elem.closest(".gridItem").querySelector('.productImage');
  productImage.src = elem.dataset.src;
  
  /* Remove solid border from all color varients in individual grid item */
  const colorVarientImg = elem.closest(".gridItem").querySelectorAll('.varient-img-container img')
  colorVarientImg.forEach((e) => {
    e.classList.remove('active')
  });
  /* Add solid border to selected color varient */
  elem.classList.add('active');
};

function addNewIcon(elem) {
  const newIcon = elem.closest(".gridItem").querySelector('.newIcon');
  if(!elem.classList.contains('new')) {
    newIcon.style = "display: none"
  } else {
    newIcon.style = "display: block"
  };
};


