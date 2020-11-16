class Search{
    constructor(){}
    display(){
        var input = createinput("Laptops");
        input.position(300,300);
        input.mousePressed(function(){
            input.hide();
        })
    }
}