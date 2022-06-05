

function loadProjectsList(){
    let projects_mock = [
        {title:"Titulo de Proyectooooooooooooooooooooooooooooooooooooooooooooooooo",
         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor nisi, dictum vel congue eu, aliquet quis arcu. Nam euismod quam quis viverra elementum. In ornare, nibh vel pellentesque finibus, elit dolor vestibulum est, quis vehicula lorem purus vel arcu. Cras ex justo, pharetra placerat bibendum vitae, placerat et ante. Aenean metus diam, elementum vitae justo id, semper pharetra ligula. Sed mattis leo in dui facilisis vestibulum. Pellentesque sit amet viverra lectus, nec placerat felis. Aliquam iaculis sit amet erat ac rutrum. Sed posuere quam quis faucibus lacinia. Proin id velit quis purus laoreet rhoncus et vel turpis. Morbi aliquam finibus euismod. Nulla mollis urna mi, non fermentum ipsum vehicula at. Vestibulum vel aliquam enim. Phasellus efficitur tellus quam, dignissim imperdiet augue malesuada eget. Suspendisse id lobortis odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec eget viverra diam. Sed non diam imperdiet, cursus dui eu, sodales orci. Suspendisse potenti. Nam pharetra ultrices turpis ut varius.",
         participants: [{
                            name: "Pedro",
                            lastname: "Del Arco"
                        },
                        {
                            name: "Tedro",
                            lastname: "Tel Arco"
                        },
                        {
                            name: "Oedro",
                            lastname: "Del Arco"
                        },
                        {
                            name: "Medro",
                            lastname: "Rel Arco"
                        }
                    ],
         tags: ["Machine Learning", "Photography", "Computer Networks"]
        },
        {title:"Titulo de Proyecto",
         description: "Lorem ipsum dolor sit amet",
         participants: [{
                    name: "Pedro",
                    lastname: "Del Arco"
                },
                {
                    name: "Tedro",
                    lastname: "Tel Arco"
                },
                {
                    name: "Oedro",
                    lastname: "Del Arco"
                },
                {
                    name: "Medro",
                    lastname: "Rel Arco"
                }
            ],
        tags: ["Machine Learning", "Photography", "Computer Networks"]

        },
        {title:"Titulo de Proyecto",
         description: "Lorem ipsum dolor sit amet",
         participants: [{
                    name: "Pedro",
                    lastname: "Del Arco"
                },
                {
                    name: "Tedro",
                    lastname: "Tel Arco"
                },
                {
                    name: "Oedro",
                    lastname: "Del Arco"
                },
                {
                    name: "Medro",
                    lastname: "Rel Arco"
                }
            ],
        tags: ["Machine Learning", "Photography", "Computer Networks"]

        },
        {title:"Titulo de Proyecto",
         description: "Lorem ipsum dolor sit amet",
         participants: [{
                    name: "Pedro",
                    lastname: "Del Arco"
                },
                {
                    name: "Tedro",
                    lastname: "Tel Arco"
                },
                {
                    name: "Oedro",
                    lastname: "Del Arco"
                },
                {
                    name: "Medro",
                    lastname: "Rel Arco"
                }
            ],
        tags: ["Machine Learning", "Photography", "Computer Networks"]
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
        descriptionContainer.setAttribute("id", "description")
        let description = document.createTextNode(project.description);
        descriptionContainer.appendChild(description);
        div.appendChild(img);
        div.appendChild(span);
        div.appendChild(descriptionContainer);
        addParticipants(project.participants, div);
        addTags(project.tags, div);
        container.appendChild(div);
    }
    main.appendChild(container)
}

function addParticipants(list, div){
    let limit = list.length;
    if (limit > 3) limit = 2;
    let idx = 0;
    while (idx < limit){
        let circDiv = document.createElement("div");
        circDiv.classList.add("circle");
        circDiv.style.left = String(40*idx) + "px";
        circDiv.style["grid-column"] = "1";
        let span = document.createElement("span");
        let text = document.createTextNode(list[idx].name[0] + list[idx].lastname[0]);
        span.appendChild(text);
        circDiv.appendChild(span);
        addFullNameTag(circDiv, list[idx].name + " " + list[idx].lastname);
        div.appendChild(circDiv);
        idx++;
    }
    if (limit != list.length) {
        let circDiv = document.createElement("div");
        circDiv.classList.add("circle");
        circDiv.style["grid-column"] = "1";
        circDiv.style.left = String(40*idx) + "px";
        let span = document.createElement("span");
        let text = document.createTextNode("+" + String(list.length-2));
        span.appendChild(text);
        circDiv.appendChild(span);
        div.appendChild(circDiv);
    }
}

function addTags(list, div){
    let limit = list.length;
    if (limit > 3) limit = 2;
    let idx = 0;
    while (idx < limit){
        let circDiv = document.createElement("div");
        circDiv.classList.add("circle");
        circDiv.style.right = String(80 - 40*idx) + "px";
        circDiv.style["grid-column"] = "10";

        let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');
        let initials = [...list[idx].matchAll(rgx)] || [];
        initials = (
        (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
        ).toUpperCase();

        let span = document.createElement("span");
        let text = document.createTextNode(initials);
        span.appendChild(text);
        circDiv.appendChild(span);
        addFullNameTag(circDiv, list[idx]);
        div.appendChild(circDiv);
        idx++;
    }
    if (limit != list.length) {
        let circDiv = document.createElement("div");
        circDiv.classList.add("circle");
        circDiv.style.right = String(80 - 40*idx) + "px";
        circDiv.style["grid-column"] = "10";
        let span = document.createElement("span");
        let text = document.createTextNode("+" + String(list.length-2));
        span.appendChild(text);
        circDiv.appendChild(span);
        div.appendChild(circDiv);
    }
}

function addFullNameTag(div, name){
    let textDiv = document.createElement("div");
    textDiv.setAttribute("id", "textDiv");
    let triangleDiv = document.createElement("div");
    triangleDiv.setAttribute("id", "triangleDiv");
    let text = document.createTextNode(name);
    textDiv.appendChild(text);
    div.appendChild(triangleDiv);
    div.appendChild(textDiv);
}

loadProjectsList();