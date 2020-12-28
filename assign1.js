
    $.ajax({
        url: "http://jsonplaceholder.typicode.com/photos",
        method: "get",
        datatype: "JSON",
           
        success: (data) => {
            $.each(data, function (i, v) {
                console.log(v.title);
                let e = 
                "<div class='div1'>" +
                    "<img src=" + v.thumbnailUrl +
                    "width='70' height='100'>" + "<br/>" +
                    "<span>" +
                    v.title +
                     "</span>" +
                      "</br>" +
                    "<button>cart></button>" +
                    "</div>";
                $(".article").append(e);
            })
            }
        });
