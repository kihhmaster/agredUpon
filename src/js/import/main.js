jQuery(function () { 

  new Skroll()
  .add(".start__title", {
      animation: "fadeInUp",
      delay: 200,
      duration: 750
  })
  .add(".start__subtitle", {
      animation: "fadeInUp",
      delay: 200,
      duration: 750
  })
  new Skroll()
  .add(".services__title", {
      animation: "fadeInUp",
      delay: 200,
      duration: 750
  })
  .add(".services__subtitle", {
      animation: "fadeInUp",
      delay: 200,
      duration: 750
  })
  .add(".whoAreWe__title", {
      animation: "slideInLeft",
      delay: 200,
      duration: 750
  })
  .add(".whoAreWe__text--one", {
      animation: "slideInLeft",
      delay: 200,
      duration: 750
  })
  .add(".whoAreWe__text--two", {
      animation: "slideInLeft",
      delay: 200,
      duration: 750
  })
  .add(".advantages__title", {
      animation: "fadeInUp",
      delay: 200,
      duration: 750
  })
  .add(".advantages__text--one", {
      animation: "fadeInUp",
      delay: 200,
      duration: 750
  })
  .add(".advantages__text--two", {
      animation: "fadeInUp",
      delay: 200,
      duration: 750
  })
  .add(".advantages__subtitle", {
      animation: "slideInRight",
      delay: 200,
      duration: 750
  })
  .add(".advantage:nth-child(1)", {
      animation: "slideInRight",
      delay: 200,
      duration: 750
  })
  .add(".advantage:nth-child(1)", {
      animation: "slideInRight",
      delay: 200,
      duration: 750
  })
  .add(".advantage:nth-child(1)", {
      animation: "slideInRight",
      delay: 200,
      duration: 750
  })
  .add(".advantage:nth-child(2)", {
      animation: "slideInRight",
      delay: 200,
      duration: 750
  })
  .add(".advantage:nth-child(3)", {
      animation: "slideInRight",
      delay: 200,
      duration: 750
  })
  .add(".advantage:nth-child(4)", {
      animation: "slideInRight",
      delay: 200,
      duration: 750
  })
  .add(".advantage:nth-child(5)", {
      animation: "slideInRight",
      delay: 200,
      duration: 750
  })
  .add(".advantage:nth-child(6)", {
      animation: "slideInRight",
      delay: 200,
      duration: 750
  })
  .add(".conditions__title", {
    animation: "fadeInUp",
    delay: 200,
    duration: 750
  })
  .add(".conditions__text", {
    animation: "fadeInUp",
    delay: 200,
    duration: 750
  })
  .add(".products__title", {
    animation: "fadeInUp",
    delay: 200,
    duration: 750
  })
  .add(".products__subtitle", {
    animation: "fadeInUp",
    delay: 200,
    duration: 750
  })
  .add(".products__text", {
    animation: "slideInRight",
    delay: 200,
    duration: 750
  })
  .add(".products__btn", {
    animation: "slideInRight",
    delay: 200,
    duration: 750
  })
  .init();
	
$( ".header__menu__item" ).mouseenter(function () {
  let headerMenuItem = $(this);
  let headerMenuList = headerMenuItem.children( '.header__menu__list' )
  headerMenuList.addClass('active')
});
$( ".header__menu__item" ).mouseleave(function () {
  let headerMenuItem = $(this);
  let headerMenuList = headerMenuItem.children( '.header__menu__list' )
  headerMenuList.removeClass('active')
});


let overlayBg = document.querySelector(".mob-menu--overlay");
let mobMenu = document.querySelector(".mob-menu__section");
let humb = document.querySelector(".hamburger");

var hamburger = $(".hamburger");
hamburger.on("click", function(e) {
  hamburger.toggleClass("is-active");
  console.log("rkbr")
});
var search = $(".header__other__search");
search.click( function(e) {
  $(this).children(".header__other__search__input").addClass("active"); 

});
$(document).mouseup(function (e){ 
  var search = $(".header__other__search");
  if (!search.is(e.target) 
      && search.has(e.target).length === 0) { 
        search.children(".header__other__search__input").removeClass("active"); 
  }
});

overlayBg.addEventListener("click", function () {
  mobMenu.classList.remove("active");
  humb.classList.remove("is-active");
  bodyYesScroll()
});
humb.addEventListener("click", function () {
  let kye = mobMenu.classList.contains("active");
  if (kye == false) {
    mobMenu.classList.add("active");
    bodyNoScroll()
  }else {
    mobMenu.classList.remove("active");
    bodyYesScroll()
  }
});

$(window).scroll(function() {
	var height = $(window).scrollTop();
	 /*Если сделали скролл на 100px задаём новый класс для header*/
	if(height > 10){
		$('.section__header').addClass('bg__black');
	} else{
	/*Если меньше 100px удаляем класс для header*/
		$('.section__header').removeClass('bg__black');
	}
});


	$('.contacts__form__textarea').on('input', function (e) {
		var state = e.target.value;
		if (state.length > 0) {
			$(this).addClass( "value" );
		} else {
			$(this).removeClass( "value" );
		}
	});


});
