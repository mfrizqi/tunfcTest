$("#ToMenu").click(()=>{
    alert("To The Menu!");
    $("#FullMenu").show();
    $(".mobile-screen").hide();
})

$("#CloseBtn").click(()=>{
    $("FullMenu").hide();
    $(".mobile-screen").show();
})