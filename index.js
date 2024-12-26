function scrollFunction(){
                    if(document.documentElement.scrollTop > 200){
                                        document.getElementById("navbar").classList.add("noTransparrent");
                    }
                    else{
                                        document.getElementById("navbar").classList.remove("noTransparrent");          
                    }
}
window.onscroll = function(){
                    scrollFunction();             
}
window.onload = function(){ //عند تحميل النافذة
let build = new CountUp("build-count",0,456,0,3);
build.start();
let design = new CountUp("design-count",0,785,0,3);
design.start();
let edit = new CountUp("edit-count",0,532,0,3);
edit.start();
let users = new CountUp("users-count",0,12466,0,7);
users.start();
};
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
                    'use strict'
                  
                    // Fetch all the forms we want to apply custom Bootstrap validation styles to
                    var forms = document.querySelectorAll('.needs-validation')
                  
                    // Loop over them and prevent submission
                    Array.prototype.slice.call(forms)
                      .forEach(function (form) {
                        form.addEventListener('submit', function (event) {
                          if (!form.checkValidity()) {
                            event.preventDefault()
                            event.stopPropagation()
                          }
                  
                          form.classList.add('was-validated')
                        }, false)
                      })
                  })();

document.getElementById("fullYear").innerHTML = new Date().getFullYear();