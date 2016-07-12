page ={};
//page.parent_1 ='<div class="box">';
//page.parent_2 = '</div>';
page.str = '<div class="acivca">'+
    '<div class="N"> </div>'+
    '<label class="iconN" >'+
    '<input type="file" class="icon_input" name="files[0]" >'+
    '</label>'+
    '<span class="Np">';

page.str2 ='</span>'+
    '</div>';
var N = document.getElementsByClassName('Np')[0];
    N.innerHTML = 1;

page.number=2;
for(var i= 0;i<99;i++) {           //выбираем количество наград
    //if(i==0) document.write(page.parent_1);
    document.write(page.str + page.number + page.str2);
    page.number++;
   if(i==99) document.write(page.parent_2);
}
document.querySelector('body').addEventListener('change', function(event) { 
    var target = event.target;
    var event_2 = event;
    do {
        var i=false;
        var classList = target.classList.toString();
        classList=classList.split(' ');
        for(var i in classList){
            if(classList[i] == 'icon_input') {i=true;
                var number_span =target.parentNode.nextSibling.innerText -1; //определения элемента
                break;}
        }
        if(i==true) break;
        target=target.parentNode;
    }while(target.tagName == 'BODY');
    event.returnValue = false;

    handleFileSelect(event_2, number_span);
});

function handleFileSelect(evt, number_span) { //выбираем изображение
    var files = evt.target.files; // FileList object
    var test = document.querySelectorAll('.iconN');
    if (!files[0].type.match('image.*')) {
        exit();
    }

    var reader = new FileReader();
    reader.onload = (function(theFile) {
        return function(e) {
           // alert(e.target.result);
            test[number_span].style.backgroundImage = 'url('+ e.target.result+')';
        };
    })(files[0]);
    reader.readAsDataURL(files[0]);

}
