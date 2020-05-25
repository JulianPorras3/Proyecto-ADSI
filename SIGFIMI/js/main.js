$('.toggle').click(function(){
    $('.formulario').animate({
        height: "toogle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'

    }, "slow");
});