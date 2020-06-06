for(var i = 0; i <= 100; i++){

    if(i % 3 == 0 && i % 5 == 0 && i != 0){
        console.log(i+"    fizz e buzz");
    }
    
    if(i % 3 == 0 && i != 0){
        console.log(i+"    fizz");
    }
    
    if(i % 5 == 0 && i != 0){
        console.log(i+"    buzz");
    }else{
        console.log(i);
    }

}