class Login{
constructor(){
  this.input = createInput("Email");
  this.input2 = createInput("password");
  this.button = createButton('Signin');
  this.button2 = createButton('Forgot Password');
  this.button3 = createButton('Sign');
}
hide(){
    this.input.hide();
    this.input2.hide();
    this.button.hide();
    this.button2.hide();
    this.button3.hide();
  }
display(){
   //var input = createInput("Email");
   //var input2 = createInput("password");
    //var button = createButton('Signin');
//var button2 = createButton('Forgot password');
//var button3 = createButton('sign up');
    
  this.input.position(200,100);
   this.input2.position(200,240);
    this.button.position(200,300);
   this.button2.position(200,350);
    this.button3.position(200,370);

    this.button.mousepressed(function(){
        this.button.hide();
        this.button2.hide();
        this.button3.hide();
        this.input.hide();
        this.input2.hide();
    })
   this.button2.mousepressed(function(){
    this.button.hide();
    this.button2.hide();
    this.button3.hide();
        this.input.hide();
        this.input2.hide();
    })
    this.button3.mousepressed(function(){
        this.button.hide();
       this.button2.hide();
        this.button3.hide();
        this.input.hide();
        this.input2.hide();
    })
}
}