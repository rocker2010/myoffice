if($.trim($('#widgetzone_Footer-Widget').html()) == '') {
	$(".footer .footer-widgets").css('padding', '0');
}
$(".fade .title-blog").animate({
	top: 0,
	opacity: 1,
}, 2000);
$(".fade .line-header").animate({
	opacity: 1,
}, 1000);
$(".fade .main-section").animate({
	opacity: 1,
}, 2000);
$(".footer").animate({
	opacity: 1,
}, 1000);
(function() {
	  //Make the dashboard widgets sortable Using jquery UI
  $(".connectedSortable").sortable({
    placeholder: "sort-highlight",
    connectWith: ".connectedSortable",
    forcePlaceholderSize: true,
    zIndex: 999999
  });
  $(".connectedSortable .widget").css("cursor", "move");
	var move, p1, p2, p3;
	p1 = 0;
	p2 = 0;
	p3 = 0;
	move = function() {
		p1 += 2;
		p2 += 1;
		p3 += 0.7;
		if(p1 > 795) {
			p1 = 0;
		}
		if(p2 > 778) {
			p2 = 0;
		}
		if(p3 > 962) {
			p3 = 0;
		}
		$('#bg1').css('background-position', p1 + 'px bottom');
		$('#bg2').css('background-position', p2 + 'px bottom');
		return $('#bg3').css('background-position', p3 + 'px bottom');
	};
	setInterval(move, 100);
}).call(this);
$(window).scroll(function() {
	if($(window).scrollTop() > 200) {
		$(".fixnav .header").addClass("fix-header");
	} else {
		$(".fixnav .header").removeClass("fix-header");
	}
});
$(".btn-toggle-search").click(function() {
	$(".header .search").addClass("open-search");
	$(this).hide();
	$(".header .search input[type='text']").focus();
});
$(".search input[type='text']").blur(function() {
	$(".search").delay(2000).removeClass("open-search");
	$(".btn-toggle-search").delay(2000).show();
});
$(".search input[type='text']").addClass("tooltip-search");
$(".search input[type='text']").attr('title', 'Press Enter to search');
$(window).scroll(function() {
	if($(window).scrollTop() > 200) {
		$('.scrollup').fadeIn();
	} else {
		$('.scrollup').fadeOut();
	}
});
$('.scrollup').click(function() {
	$("html, body").animate({
		scrollTop: 0
	}, 600);
	return false;
});
$(".footer-widgets .widget:nth-child(4n)").addClass("last-child");
$("html").addClass("js");
//selectnav('nav');
function selectnav2() {
	$('.control-sidebar-bg').css("position", "fixed");
}
$(function() {
	$('#control-sidebar').prepend($("#nav").clone());
	$("#selectnav2").click(function() {
		$('body').toggleClass("control-sidebar-open");
		selectnav2();
	});
})