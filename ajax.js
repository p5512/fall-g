function ajax(method, url, callback, data, flag){
    
        var  xhr = '';
        if(window.XMLHttpRequest){
            xhr = new XMLHttpRequest();
        }else{
            xhr = new ActiveXObject('Microsoft.XMLHttp');
        }
    
    
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                if(xhr.status == 200){
                    //console.log(JSON.parse(xhr.responseText))
                    callback(xhr.responseText);
                    
                }else{
                    console.log('error');
                }
            }
        }
        
        method = method.toUpperCase();
        if(method == 'GET'){
            var oDate = new Date(),
            timer = oDate.getTime();
    
          xhr.open(method,url+'?'+data+'&timer='+timer,flag);
           xhr.send();
        }else{
            xhr.open(method,url,flag);
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded')
            xhr.send(data);
            
        }   
    
    }



    