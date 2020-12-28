$(document).ready(
    () => {
        $("#b1").click(function () {
            $('div').slideUp(1000);
        });

        $("#b2").click(function () {
            $('div').slideDown(1000);
        });


        $("#b3").click(function () {
            $('div').FadeIn(2000, () => { alert("Fade in Completed!") })

        });


        $("#b4").click(function () {
            $('div').fadeOut(200,()=>{alert("Fade Out Completed!")})
        });
    })