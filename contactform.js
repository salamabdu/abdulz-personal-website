$(document).ready(function(){
    $("#contact-form").validate({
        rules:{
            fname:{
                required:true
                 
            },
           place:{
               required:true
           },
           email:{
               required:true
           },
           mobile:{
               required:true,
               minlength:10,
               maxlength:10
           },
           message:{
                required:true,
                
            }   
            
            
           
        },
        messages:{
            mobile:{
                minlength:'please enter valid mobile number!',
                maxlength:'please enter valid mobile number'
            }
        }
    })
})