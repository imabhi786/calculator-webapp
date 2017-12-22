var app=angular.module("calc",[]);
app.controller("ctrl1",f1);
 
function f1(){
    this.result=0;
    this.validate1=function(){
        this.operatorvalue="+";
    }
    this.validate2=function(){
        this.operatorvalue="-";
    }
    this.validate3=function(){
        this.operatorvalue="*";
    }
    this.validate4=function(){
        this.operatorvalue="/";
    }
    this.validate5=function(){
        this.operatorvalue="%";
    }
    this.validate6=function(){
        this.operatorvalue="^";
    }
    this.validate7=function(){
        this.operatorvalue="!";
    }
    this.validate8=function(){
        this.operand1="";
        this.operand2="";
        this.result=0;
        this.operatorvalue="";
    }
    this.calculate=function(){
        var n1= parseFloat(this.operand1); 
        var n2= parseFloat(this.operand2); 
        console.log(n1);
        console.log(n2);
        if(this.operatorvalue==="+")
        this.result=n1+n2;
        else if(this.operatorvalue==="-")
        this.result=n1-n2;
        else if(this.operatorvalue==="*")
        this.result=n1*n2;
        else if(this.operatorvalue==="/")
        this.result=n1/n2;
        else if(this.operatorvalue==="%")
        this.result=n1%n2;
        else if(this.operatorvalue==="^")
       {
           this.result=1;
           for (var i=1;i<=n2;i++)
           this.result*=n1;
       }
       else if(this.operatorvalue==="!")
       {
           this.result=1;
           for (var i=1;i<=n1;i++)
           this.result*=i;
       }
        console.log(this.result);
      }
}