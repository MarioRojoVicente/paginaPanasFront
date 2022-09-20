function loadView(viewPath){

    previousJS = document.getElementById("loadedJS");
    if (previousJS != undefined){
        previousJS.remove();
    }

    previousCSS = document.getElementById("loadedCSS");
    if (previousCSS != undefined){
        previousCSS.remove();
    }

    fetch(viewPath)
    .then(response=> {
        if(response.status == 200){
            return response.text()
        }else if(response.status == 400){
            console.log("La vista", viewPath , "no existe.");
        }else{
            console.log("Error inesperado con código", res.status);
        }
    }).then(text=> document.getElementsByTagName("main")[0].innerHTML = text);

    relatedJSFile = "../scripts/"+viewPath.replace(".html", ".js");

    fetch(relatedJSFile).then( (response) => {
            if (response.status == 200){
                let script = document.createElement("script");
                script.setAttribute("src", relatedJSFile);
                script.setAttribute("id", "loadedCSS");
                document.getElementsByTagName("head")[0].appendChild(script);
            }else if(response.status == 404){
                console.log("Esta vista no tiene un fichero .js asociado.");
            }else{
                console.log("Error inesperado con código", res.status);
            }
        }
    )

    relatedCSSFile = "../styles/"+viewPath.replace(".html", "Styles.css");
    fetch(relatedCSSFile).then( (response) => {
            if (response.status == 200){
                let link = document.createElement("link");
                link.setAttribute("href", relatedCSSFile);
                link.setAttribute("rel", "stylesheet");
                link.setAttribute("type", "text/css");
                link.setAttribute("id", "loadedCSS");
                document.getElementsByTagName("head")[0].appendChild(link);
            }else if(response.status == 404){
                console.log("Esta vista no tiene un fichero .css asociado.");
            }else{
                console.log("Error inesperado con código", res.status);
            }
        }
    )
}