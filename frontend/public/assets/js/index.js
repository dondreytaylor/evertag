(function() {
    "use strict";
    
    let tagList = document.querySelector("#tagList");

    let clearPhotos = () => { 
    }; 

    let prependPhoto = (randomNum) => { 
        let img = document.createElement("img");
        img.src = "https://picsum.photos/500/300?random=" + (randomNum || 0);
        tagList.prepend(img);
    }; 

    for (let i=0; i < 10; i++)
        prependPhoto(i);

})();