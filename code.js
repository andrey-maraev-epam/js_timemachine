function runAnimation() {
    setInterval(function() {
        $("#current_time").text(new Date().toUTCString());
    }, 500);

    $color_fade = $(".animation .color_fade");

    function animate() {
        $color_fade.animate({
            backgroundColor: "#FFB07F"
        }, 3000);
        $color_fade.animate({
            backgroundColor: "#93D5FF"
        }, 3000);
        $color_fade.animate({
            backgroundColor: "#72FF8E"
        }, 3000, "swing", animate);
    }

    animate();
}