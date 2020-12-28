$(document).ready(
    ()=>{
        $("#myDiv").siblings().css('color','red');
        $("#myDiv").children().css('color','navy')
        $("#inrDiv").children().css('color','blue')
        $("#inrDiv").children().css("border","2px solid black")
    }
)