let members_mock = [
    {
        name: "Pedro",
        lastnames: "Jimenez de la Paz",
        tags: ["Developer", "Designer", "Engeneer"]
    },
    {
        name: "Alberto",
        lastnames: "Pedrero Degüelles",
        tags: ["Developer", "Designer", "Engeneer"]
    },
    {
        name: "Elena",
        lastnames: "Nito del Bosque",
        tags: ["Developer", "Designer", "Engeneer"]
    },
    {
        name: "Elbert",
        lastnames: "Galarga",
        tags: ["Developer", "Designer", "Engeneer"]
    },
    {
        name: "Pedro",
        lastnames: "Jimenez de la Paz",
        tags: ["Developer", "Designer", "Engeneer"]
    },
    {
        name: "Alberto",
        lastnames: "Pedrero Degüelles",
        tags: ["Developer", "Designer", "Engeneer"]
    },
    {
        name: "Elena",
        lastnames: "Nito del Bosque",
        tags: ["Developer", "Designer", "Engeneer"]
    },
    {
        name: "Elbertttttttttttttttttttttttttttttttttttttttttt",
        lastnames: "Galarga",
        tags: ["Software Developerrrrrrrrrrrrrrrrr", "Designer", "Engeneer", "Developer", "Designer", "Engeneer"]
    }
]

async function loadMembersList(){

    let members = members_mock; // ahora se moquea pero aquí iría la llamada al endpoint de cgetMembers
    
    let main = document.getElementsByTagName("main")[0];
    let container = document.createElement("div");
    container.setAttribute("id", "membersCardsContainer");
    for (let member of members){
        let div = document.createElement("div");
        div.setAttribute("id", "memberCard");
        let img = document.createElement("img");
        img.setAttribute("src", "https://picsum.photos/200/200")
        let span = document.createElement("span");
        let divText = document.createTextNode( member.name +" "+ member.lastnames);
        div.appendChild(img);
        span.appendChild(divText);
        div.appendChild(span);
        container.appendChild(div);

        let tagDiv = document.createElement("div");
        tagDiv.setAttribute("id", "tagContainer");
        for (let tag of member.tags){
            let span = document.createElement("span");
            let text = document.createTextNode(tag);
            span.appendChild(text);
            tagDiv.appendChild(span)
        }
        div.appendChild(tagDiv);
    }
    main.appendChild(container)

}

loadMembersList();
