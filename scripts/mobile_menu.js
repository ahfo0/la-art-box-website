// mobile 메뉴  on/off

// on
mobile_header.addEventListener('click', () => {
    document.querySelector('#only_mobile_menu').style.top = "0";
    $("#mobile_header1").css("transform", "translateX(-50%) scale(0)");
    $("#mobile_header1").css("top", "20px");
    $("#mobile_header2").css("transform", "translateX(-50%) scale(0)");
    $("#mobile_header2").css("bottom", "20px");
    $("#mobile_header3").css("transform", "translate(-50%,-50%) rotate(45deg) scale(1)");
    $("#mobile_header3").css("top", "50%");
    $("#mobile_header3").css("left", "50%");
    $("#mobile_header4").css("transform", "translate(-50%,-50%) rotate(-45deg) scale(1)");
    $("#mobile_header4").css("top", "50%");
    $("#mobile_header4").css("left", "50%");
    $("#only_mobile_main div:nth-child(1)").css("transform", "translateX(0)");
    $("#only_mobile_main div:nth-child(2)").css("transform", "translateX(0)");
    $("#only_mobile_main div:nth-child(3)").css("transform", "translateX(0)");
    $("#only_mobile_main div:nth-child(4)").css("transform", "translateX(0)");
    $("#only_mobile_main div:nth-child(5)").css("transform", "translateX(0)");
    $("#mobile_sns").css("opacity", "1");
    $("#mobile_copy").css("opacity", "1");
});

// off
mobile_header0.addEventListener('click', () => {
    document.querySelector('#only_mobile_menu').style.top = "-100vh";
    $("#mobile_header1").css("transform", "translateX(-50%) scale(1)");
    $("#mobile_header1").css("top", "20px");
    $("#mobile_header2").css("transform", "translateX(-50%) scale(1)");
    $("#mobile_header2").css("bottom", "20px");
    $("#mobile_header3").css("transform", "translate(-50%,-50%) rotate(45deg) scale(0)");
    $("#mobile_header3").css("top", "50%");
    $("#mobile_header3").css("left", "50%");
    $("#mobile_header4").css("transform", "translate(-50%,-50%) rotate(-45deg) scale(0)");
    $("#mobile_header4").css("top", "50%");
    $("#mobile_header4").css("left", "50%");
    $("#only_mobile_main div:nth-child(1)").css("transform", "translateX(-330px)");
    $("#only_mobile_main div:nth-child(2)").css("transform", "translateX(-330px)");
    $("#only_mobile_main div:nth-child(3)").css("transform", "translateX(-330px)");
    $("#only_mobile_main div:nth-child(4)").css("transform", "translateX(-330px)");
    $("#only_mobile_main div:nth-child(5)").css("transform", "translateX(-330px)");
    $("#mobile_sns").css("opacity", "0");
    $("#mobile_copy").css("opacity", "0");
});