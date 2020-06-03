var index = 0
var isShow = true

var topabout = $(".two-page").offset().top;
var topskill = $(".three-page").offset().top;
var topworks = $(".four-page").offset().top;
var topmaster = $(".five-page").offset().top;
var topcall = $(".six-page").offset().top;
var topnav = $(".nav").offset().top;
console.log(topmaster,$(".five-page").offset().top)


$("h1").on('click',function (){
    ++index
    if(index % 2 == 1){
        $(".img2").fadeOut("slow","linear")
        $(".img1").fadeIn("slow","linear")
    }else{
        $(".img1").fadeOut("slow","linear")
        $(".img2").fadeIn("slow","linear")
    }
})

setInterval(() =>{
    $("h1").click();
},3000)

$(".inner-img").on('click',() =>{
    if(isShow){
        $('.img-ul'). slideDown("slow")
        isShow = false
    }else if(!isShow){
        $('.img-ul').slideUp("slow")
        isShow = true
    }
    
})

$(document).ready(function(){

    $(window).scroll(function(){

        var top = $(document).scrollTop();
        if(top > $(".two-page").offset().top && top < $(".three-page").offset().top){
            $(".content hr").css(
                "width", 80
            )
            $(".AboutMe").addClass("active")
        }
        else{
            // $(".AboutMe").removeClass("active")

        }
        if(top >$(".three-page").offset().top ){
            $(".skill hr").css(
                "width", 80
            )
            $(".AboutMe").removeClass("active")

            $(".Skill").addClass("active")

        }else{
            $(".Skill").removeClass("active")

        }
        if(top >$(".four-page").offset().top){
            $(".some-wrok hr").css(
                "width", 80
            )
            $(".Skill").removeClass("active")

            $(".Works").addClass("active")

        }else{
            $(".Works").removeClass("active")

        }
        if(top > $(".five-page").offset().top ){
            $(".master hr").css(
                "width", 80
            )
            $(".Works").removeClass("active")

            $(".Master").addClass("active")

        }else{
            $(".Master").removeClass("active")

        }
        if(top > $(".six-page").offset().top ){
            $(".call hr").css(
                "width", 80
            )
            $(".Master").removeClass("active")

            $(".CallMe").addClass("active")

        }else{
            $(".CallMe").removeClass("active")

        }
        if(top > $(".nav").offset().top){
            $(".nav").css(
                {
                    position:"fixed",
                    top:0,
                    left:0,
                    zIndex:10
                }
            )
        }
        if($(".nav").offset().top < 730){
            $(".nav").css(
                "position","relative",
            )
        }
    })

})

// var valOfScroll =$("#id").offset().top;
// $("html,body").animate({scrollTop: valOfScroll}, 600)


$(".AboutMe").on('click',function (){
    $("html,body").animate({scrollTop: $(".two-page").offset().top + 50}, 600)
})
$(".about").on('click',function (){
    $(".AboutMe").click();
})
$(".Skill").on('click',function (){
    $("html,body").animate({scrollTop: $(".three-page").offset().top + 50}, 600)
})

$(".Works").on('click',function (){
    $("html,body").animate({scrollTop: $(".four-page").offset().top + 50}, 600)

})
$(".works").on('click',function (){
    $(".Works").click();

})
$(".Master").on('click',function (){
    $("html,body").animate({scrollTop: $(".five-page").offset().top + 50}, 800)


})
$(".CallMe").on('click',function (){
    $("html,body").animate({scrollTop: $(".six-page").offset().top + 50}, 600)

})


var liArr = Array.from($(".nav-ul li"))
var imgArr = Array.from($(".img-ul li"))

for(let i = 0 ; i< liArr.length ;i++){

    $(liArr[i]).on('click',() =>{
        for(let j = 0 ;j <liArr.length;j++){
            $(liArr[j]).removeClass("active")
        }
        $(liArr[i]).addClass("active")

    })
}
for(let i = 0 ; i< imgArr.length ;i++){

    $(imgArr[i]).on('click',() =>{
        for(let j = 0 ;j <imgArr.length;j++){
            $(imgArr[j]).removeClass("active")
        }
        $(imgArr[i]).addClass("active")

    })
}