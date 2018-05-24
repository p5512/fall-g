var oLi = document.getElementsByTagName('li'),
    page =1,
    flag =true;


function ajaxFun(){
    if(flag){
        flag = false;
        ajax('get','getPics.php',getData,'cpage='+page,true);
        page++;
    }
   

}

ajaxFun()

function getData(data){
    var value = JSON.parse(data)
    console.log(value);
    value.forEach(function(ele,index){
       var  index = minListIndex(oLi);
    var oDiv = document.createElement('div'),
        oP = document.createElement('p'),
        oImg = new Image();
        oImg.src = ele.preview;
        oDiv.className = 'item';
        oP.innerHTML = ele.title;

       oImg.style.height = ele.height/ele.width * 200 + 'px'; 
        oDiv.appendChild(oImg);
        oDiv.appendChild(oP);


        
        oLi[index].appendChild(oDiv);
        oImg.onerror = function(){
            oImg.style.margin = '-1px';
            oImg.style.width = '202px';
        }


    })
    flag = true;
    
}


function minListIndex(dom){
var min = dom[0].offsetHeight,
    index = 0,
    len = dom.length;
    for(var i = 1;i< len;i++){
        if(min>dom[i].offsetHeight){
            min = dom[0].offsetHeight;
            index = i
        }
    }
    return index;
}
console.log(minListIndex(oLi));

window.onscroll = function(){
    var scrollHeight = document.documentElement.scrollTop||document.body.scrollTop,
    clientHeight = document.documentElement.clientHeight||document.body.clientHeight;
    var minHeight = oLi[minListIndex(oLi)].offsetHeight;

    if(scrollHeight + clientHeight>=minHeight){

        ajaxFun();
    }
}

