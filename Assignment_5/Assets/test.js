
/*Change image while choosing color*/

$(document).ready(function() {
  $('.color-choose input').on('click', function() {
      var itemColor = $(this).attr('data-image')
      $('.active').removeClass('active');
      $('.column2of3 img[data-image = ' + itemColor + ']').addClass('active');
      $(this).addClass('active');
  });
});

/*Add to shopping bag to show numbers of items in bag*/
let numOfItems = 0
function addToBag(){
	$('ul li:nth-child(4) span').remove();
	$('ul li:nth-child(4)').append(`<span> ${++numOfItems} </span>`);
}

let numOfItemsinwishlist = 0
function addToWish(){
	$('ul li:nth-child(5) span').remove();
	$('ul li:nth-child(5)').append(`<span> ${++numOfItemsinwishlist} </span>`);
}


/*Get information of item to display in shopping bag*/
function showItem(){
	itemname = []
	itemcolor =[]
	itemshape = []
	itemqty=[]

	itemname.push(document.getElementById('name').value)
	itemcolor.push(document.getElementById('color').value)
	itemshape.push(document.getElementById('select-shape').value)
	itemqty.push(document.getElementById('select-qty').value)

displaycart()
}

/*Show information of item in shopping bag*/

function displaycart(){
	cartdata = '<table><tr><th>Product Name</th><th>Color</th><th>Shape</th><th>Qty</th></tr>'

	document.getElementById('cart').innerHTML = cartdata
}

/*Delete item in shopping bag*/
function deleteListItem(item) {
	    // remove li element (item) from ol element (item.parentNode)
 	    item.remove();
}
$(document).on("click", ".delete-item", function() {
    $(this).parent().remove();
});


/*Carousel js*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

