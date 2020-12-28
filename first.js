jQuery(document).ready(
    ()=>{
        var findP=$('section').find('p');
        console.log("Find Method",findP)

        var childP=$('section').children('p');
        console.log("Child Method",childP)
        //$.blockUI({ message: '<h1><img src="download.jpg" /> Just a moment...</h1>' });
    }
);

jQuery(document).ready(
    ()=>{
        console.log($('div').html());
        $('div').html("<span> This is HTML()..........</span>")
        $('div#div1').css('color','cyan')
        console.log($('div#div1').css('color'))
        $('div:even').addClass('even')
    }
)



$('button').click(()=>{
    $('div:even').toggleClass('even')
    $('span'.toggle())
    $('div').height('200')
})