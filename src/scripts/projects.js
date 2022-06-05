

function loadProjectsList(){
    let projects_mock = [
        {title:"Titulo de Proyecto",
         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor nisi, dictum vel congue eu, aliquet quis arcu. Nam euismod quam quis viverra elementum. In ornare, nibh vel pellentesque finibus, elit dolor vestibulum est, quis vehicula lorem purus vel arcu. Cras ex justo, pharetra placerat bibendum vitae, placerat et ante. Aenean metus diam, elementum vitae justo id, semper pharetra ligula. Sed mattis leo in dui facilisis vestibulum. Pellentesque sit amet viverra lectus, nec placerat felis. Aliquam iaculis sit amet erat ac rutrum. Sed posuere quam quis faucibus lacinia. Proin id velit quis purus laoreet rhoncus et vel turpis. Morbi aliquam finibus euismod. Nulla mollis urna mi, non fermentum ipsum vehicula at. Vestibulum vel aliquam enim. Phasellus efficitur tellus quam, dignissim imperdiet augue malesuada eget. Suspendisse id lobortis odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec eget viverra diam. Sed non diam imperdiet, cursus dui eu, sodales orci. Suspendisse potenti. Nam pharetra ultrices turpis ut varius.",
         temp: null
        },
        {title:"Titulo de Proyecto",
         description: "Lorem ipsum dolor sit amet",
         temp: null
        },
        {title:"Titulo de Proyecto",
         description: "Lorem ipsum dolor sit amet",
         temp: null
        },
        {title:"Titulo de Proyecto",
         description: "Lorem ipsum dolor sit amet",
         temp: null
        }
    ]

    let projects = projects_mock;

    let main = document.getElementsByTagName("main")[0];
    let container = document.createElement("div");
    container.setAttribute("id", "projectsCardsContainer");
    for (let project of projects){
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.setAttribute("src", "https://picsum.photos/200/200");
        let span = document.createElement("span");
        let title = document.createTextNode(project.title);
        span.appendChild(title);
        let descriptionContainer = document.createElement("div");
        let description = document.createTextNode(project.description);
        descriptionContainer.appendChild(description);
        div.appendChild(img);
        div.appendChild(span);
        div.appendChild(descriptionContainer);
        container.appendChild(div);
    }
    main.appendChild(container)
}

loadProjectsList();