$("#myTab a").click(function (e) {
    e.preventDefault();
    $(this).tab('show');
});

$(".card").hover(
        function () {
            $(this).children(".card-img-overlay").show();
            cambio(this);
        },
        function () {
            $(this).children(".card-img-overlay").hide();
            cambio(this);
        });

function cambio(dom) {
    var alt = $(dom).children("img").attr("alt");
    var src = $(dom).children("img").attr('src');
    $(dom).children("img").attr('alt', src);
    $(dom).children("img").attr('src', alt);
}