$(document).on("scroll", function () {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var tags = $("section")

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]

    if ($(tag).position().top < pageBottom) {
      $(tag).removeClass("visible")
    } else {
      $(tag).addClass("visible")
    }
      
  if (pageTop > 200) {
     $("header").addClass("hide") 
  } else
  	$("header").removeClass("hide") 
  }
  return false
})


$(".menu-toggle").on('click', function() {
  
  if ($(".bullet-points").is(':visible')) {
    $(".bullet-points").slideUp().addClass("fade-out") 
     $("img.plus1").attr("src", "../../assets/plus.svg")

      } else {
          $(".bullet-points").slideDown().removeClass("fade-out") 
     			$("img.plus1").attr("src", "../../assets/minus.svg")
      }

  return false
})

$(".menu-toggle2").on('click', function() {
  
  if ($(".bullet-points2, .careandfabric").is(':visible')) {
    $(".bullet-points2, .careandfabric").slideUp().addClass("fade-out") 
     $("img.plus2").attr("src", "../../assets/plus.svg")

      } else {
          $('.bullet-points2, .careandfabric').slideDown().removeClass("fade-out") 
     			$("img.plus2").attr("src", "../../assets/minus.svg")
      }

  return false
})

$(".filters-list a").on('click', function() {
  
//   var filter = $(this).attr('data-filter')

//   $('.product').hide()
//   $(filter).show()
  
  $('.filters-list a').removeClass('selected')

  $(this).addClass('selected')
  
  return false
})

$(".main-nav a").on('click', function() {
  
  $(this).addClass('selected')
  
})

$(".show-filters").on('click', function() {
  if ($(".filters-list").is(':visible')) {
    $(".filters-list").slideUp().addClass("fade-out")
    $(".show-filters").text("Show Filters")
  } else {
     $(".filters-list").slideDown().removeClass("fade-out")
   	 $(".show-filters").text("Hide Filters")
	}    
  return false
})

// whenever we load the page, always display the first slide
var currentSlide = 0

// here we ant to find out how many slides we have using the .length property
// this is useful because we can use it as our max slide value
var totalSlides = $('.product-holder div').length

var moveSlide = function (slide) {
   	// we are going to turn our currentSlide value into a negative vw unit
  	// and  had the 'vw' unit onto the end
 	 	var leftPosition = (-slide * 280) 
    
 //     + 'vw'
    
  	// pass the vw unit into our CSS method below
  	// here we grab the holder and change it to the second slide
  	$('.product-holder').css('left', leftPosition)
 
		var slideNumber = slide + 1
		// here we set the text for the steps using currentSlide and total number 
	$("div.steps").html('<span class="num">' + slideNumber + '</span><span class="slash">/</span><span class="num">' + 		 totalSlides + '</span>')
  $("span.slash").addClass("spin")
}


// 1. a function that deals with taking us to the next slide
// here we assign a function to our nextSlide variable
var nextSlide = function () {
  
   	// increment our currentSlide value by reassigning it  and incrementing it by 1
    currentSlide = currentSlide + 1
  
  	// here we test to check whether the currentSlide number is greater than
  	// or equal to the numberOfSlides. If it is we are going to set the currentSlide
  	// back to zero (it's initial state)
  	if (currentSlide >= totalSlides) {
    	currentSlide = 0
    }
  	moveSlide(currentSlide)
}

// 2. a function that deals with taking us to the previous slide
var previousSlide = function () {
   	// this is identical to our nextSlide function, apart from that 
  	// we are decrementing the currentSlide value (taking us back
  	// rather than forwards)
    currentSlide = currentSlide - 1
  
  	// if our currentSlide is less than 0, we want to set our currentSlide 
  	// to the last one
  	if (currentSlide < 0) {
    	currentSlide = totalSlides - 1
    }
   	moveSlide(currentSlide)  
}


// setInterval allows us to run a function every x amount of time
var autoSlide = setInterval(function () {
  // here our nextSlide function will run
  nextSlide()
 // runs every 3 secs (3000ms)
} ,3000)

// we also have setTimeout, which is the same, but runs only once


$('.next').on('click', function () {
  // this is going to cancel our autoSlide interval function
	// as the user has taken over control of the slide show
  clearInterval (autoSlide)
  // here we call the nextSlide function and go to the next slide
  nextSlide()
})

$('.prev').on('click', function () {
   // this is going to cancel our autoSlide interval function
	// as the user has taken over control of the slide show
  clearInterval (autoSlide)
  // here we call the nextSlide function and go to the next slide
  previousSlide()
})

// here we set a slideNumber variable which increments by 1 because
// our array starts at 0
var slideNumber = currentSlide + 1
// here we set the text for the steps using currentSlide and total number 
	$("div.steps").html('<span class="num">' + slideNumber + '</span><span class="slash">/</span><span class="num">' + 		 totalSlides + '</span>')
  $("span.slash").addClass("spin")

// whenever an event occurs in javascript we can also
// capture all the data that comes along with it
$('body').on('keydown', function (event) {
  
	// here we are grabbing the the keyCode of the key
	// we have just pressed down on the keyboard
   var keyCode = event.keyCode

	// if the keyCode is equal to our left arrow
	// run the previousSlide function
   if (keyCode == 37) {
   clearInterval(autoSlide)
   previousSlide()
   }
  
	// if the keyCode is equal to our right arrow
	// run the nextSlide function
   if (keyCode == 39) {
    clearInterval(autoSlide)
   	nextSlide()
   }
  
 })


