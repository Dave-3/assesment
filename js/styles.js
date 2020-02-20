function stringIncrement(string){
    var string1 = string;
    var checknumber =/([0-9])+/;
    
    if(string.match(checknumber)){
        return string1 + 1;
    }
}