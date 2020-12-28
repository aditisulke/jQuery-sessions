$(document).ready(()=>{
    $("button").click(()=>{
        $.ajax({
            url:"resource.json",
            method:"POST",
            data:{
                "name":"You don't know JS-Book Series",
                "provider":"Kyle Simpson",
                "url":"https://github.com/getify/You-Dont-Know-JS"

            },
            success:(x)=>{
                alert(x.name+"posted!!!");
                console.log(x);
            },
            error:(x)=>{
                alert("Error!!"+x)
            }

            /*success:function(result){
                console.log(result);
            }*/
        });
    });
});