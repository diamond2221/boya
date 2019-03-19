$(function() {
    var len = $(".banner ul.btn li").length;
    var timer;
    var cur = 0;
    var lock = true;
    // alert(len);
    $(".banner").hover(
        function() {
            clearInterval(timer);
        },
        function() {
            showImg();
        }
    );
    $(".banner ul.btn li").click(function(event) {
        if (!lock) {
            return;
        }
        clearInterval(timer);
        lock = false;
        cur = $(this).index();
        $(this)
            .addClass("active")
            .siblings(".banner ul.btn li")
            .removeClass("active");
        $(".banner .lunbo")
            .eq(cur)
            .fadeIn(800)
            .siblings(".banner .lunbo")
            .fadeOut(800, function(params) {
                lock = true;
            });
    });
    function showImg() {
        timer = setInterval(function() {
            cur++;
            if (cur >= len) {
                cur = 0;
            }
            $(".banner .lunbo")
                .eq(cur)
                .fadeIn(800)
                .siblings(".banner .lunbo")
                .fadeOut(800);
            $(".banner ul.btn li")
                .eq(cur)
                .addClass("active")
                .siblings(".banner ul.btn li")
                .removeClass("active");
        }, 2500);
    }
    showImg();
});
