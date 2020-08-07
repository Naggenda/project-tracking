function myfunction(view){
    var hide = document.getElementById('hide');
    
    if(hide.style.display== 'block'){

        var invisible = document.getElementById('invisible');
        invisible.style.display = 'none';

        var visible = document.getElementById('visible')
         visible.style.display = 'block';

         hide.style.display ='none';
     }
     else{
         var visible = document.getElementById('visible')
         visible.style.display = 'none';

         var invisible = document.getElementById('invisible');
         invisible.style.display = 'block';

         hide.style.display= 'block';
     }
}