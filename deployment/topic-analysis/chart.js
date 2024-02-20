function LDAvis_load_lib(url, callback){
    var s = document.createElement('script');
    s.src = url;
    s.async = true;
    s.onreadystatechange = s.onload = callback;
    s.onerror = function(){console.warn("failed to load library " + url);};
    document.getElementsByTagName("head")[0].appendChild(s);
  }
  
  if(typeof(LDAvis) !== "undefined"){
   
     !function(LDAvis){
         new LDAvis("#" + "five_star_LDA", five_star_LDA);
     }(LDAvis);
  }else if(typeof define === "function" && define.amd){
    
     require.config({paths: {d3: "https://d3js.org/d3.v5"}});
     require(["d3"], function(d3){
        window.d3 = d3;
        LDAvis_load_lib("https://cdn.jsdelivr.net/gh/bmabey/pyLDAvis@3.3.1/pyLDAvis/js/ldavis.v3.0.0.js", function(){
          new LDAvis("#" + "five_star_LDA", five_star_LDA);
        });
      });
  }else{
      
      LDAvis_load_lib("https://d3js.org/d3.v5.js", function(){
           LDAvis_load_lib("https://cdn.jsdelivr.net/gh/bmabey/pyLDAvis@3.3.1/pyLDAvis/js/ldavis.v3.0.0.js", function(){
                   new LDAvis("#" + "five_star_LDA", five_star_LDA);
              })
           });
  }
  
  if(typeof(LDAvis) !== "undefined"){
     
     !function(LDAvis){
         new LDAvis("#" + "one_star_LDA", one_star_LDA);
     }(LDAvis);
  }else if(typeof define === "function" && define.amd){
     
     require.config({paths: {d3: "https://d3js.org/d3.v5"}});
     require(["d3"], function(d3){
        window.d3 = d3;
        LDAvis_load_lib("https://cdn.jsdelivr.net/gh/bmabey/pyLDAvis@3.3.1/pyLDAvis/js/ldavis.v3.0.0.js", function(){
          new LDAvis("#" + "one_star_LDA", one_star_LDA);
        });
      });
  }else{
    
      LDAvis_load_lib("https://d3js.org/d3.v5.js", function(){
           LDAvis_load_lib("https://cdn.jsdelivr.net/gh/bmabey/pyLDAvis@3.3.1/pyLDAvis/js/ldavis.v3.0.0.js", function(){
                   new LDAvis("#" + "one_star_LDA", one_star_LDA);
              })
           });
  }