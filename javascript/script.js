var sfade = 200;

$("#ToMenu").click(()=>{
    $("#FullMenu").fadeIn(sfade);
    $("#BodyContent").fadeOut(sfade);
})

$("#CloseBtn").click(()=>{
    $("#FullMenu").fadeOut(sfade);
    $("#BodyContent").fadeIn(sfade);
})

