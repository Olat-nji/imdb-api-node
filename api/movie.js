const request = require('request');
const cherio = require('cherio');

        function hi( val){
         module.exports=val;   
            
        }
     
const callback=(error, response, html) => {
      
              

    if(!error && response.statusCode == 200){
        
     const $ = cherio.load(html);
        const image=$('.findResult');
        

     hi(html);
        
        
    }else{
         
        
    }
    

};
   
request('https://www.imdb.com/find?q=blood&s=tt&ttype=ft&ref_=fn_ft',callback);



