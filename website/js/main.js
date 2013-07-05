$(function(){
    $('.event-content').hide();
    $('p.button').click(function(){
        var clicked_event = $(this).parent();
        $('.event-overview').each(function(){
            if (!$(this).is(clicked_event)){
                $(this).hide(500);
            }
        });
        if (clicked_event.hasClass('right-event')){
            clicked_event.css('float','left');
        }else if (clicked_event.hasClass('left-event')){
            clicked_event.css('margin-right','0');
        }
        clicked_event.children('.button').hide()
        clicked_event.next().show(500);
    });
    $('.back_to_events').click(function(){
        clicked_event = $(this).parents('.event-content').prev()
        if (clicked_event.hasClass('right-event')){
            clicked_event.css({'float':'right'});
        }else if (clicked_event.hasClass('left-event')){
            clicked_event.css('margin-right','50px');
        }
        $('.event-overview').each(function(){
            $(this).show(500);
        });
        clicked_event.children('.button').show()
        $('.event-content').hide();
    });
});

