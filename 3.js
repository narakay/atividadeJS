var x = 4;
var y = 8;
var string="";
whrite(x,y);
function whrite(x,y){
    for(var j = 1; j <= y; j++){
        string += j % 2 == 0 ? " " : "";
        for(var i = 1; i <= x; i++){
            string += "# ";

        }string += "\n";

    }
    console.log(string);
}