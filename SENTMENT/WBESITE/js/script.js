setInterval(function(){
    $("#banner ul").delay(2000);
    $("#banner ul").animate({
        marginLeft:'-1920px'
    },500);
    $("#banner ul").delay(2000);
    $("#banner ul").animate({
        marginLeft:'-3840px'
    },500);
    // $("#banner ul").delay(2000);
    //  $("#banner ul").animate({
    //     marginLeft:'-5760px'
    // },500);
     $("#banner ul").animate({
        marginLeft:'0px'
    },0);
});
