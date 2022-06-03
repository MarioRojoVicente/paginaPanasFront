let members_mock = [
    {
        name: "Pedro",
        lastnames: "Jimenez de la Paz"
    },
    {
        name: "Alberto",
        lastnames: "Pedrero Degüelles"
    },
    {
        name: "Elena",
        lastnames: "Nito del Bosque"
    },
    {
        name: "Elbert",
        lastnames: "Galarga"
    },
    {
        name: "Pedro",
        lastnames: "Jimenez de la Paz"
    },
    {
        name: "Alberto",
        lastnames: "Pedrero Degüelles"
    },
    {
        name: "Elena",
        lastnames: "Nito del Bosque"
    },
    {
        name: "Elbert",
        lastnames: "Galarga"
    },
    {
        name: "Pedro",
        lastnames: "Jimenez de la Paz"
    },
    {
        name: "Alberto",
        lastnames: "Pedrero Degüelles"
    },
    {
        name: "Elena",
        lastnames: "Nito del Bosque"
    },
    {
        name: "Elbert",
        lastnames: "Galarga"
    }
]

async function loadMembersList(){

    let members = members_mock; // ahora se moquea pero aquí iría la llamada al endpoint de cgetMembers
    
    console.log(members);
    let main = document.getElementsByTagName("main")[0];
    let div = document.createElement("div");
    for (let member of members){
        let link = document.createElement("a");
        link.setAttribute("href", "https://example.com");
        let linkText = document.createTextNode( member.name +" "+ member.lastnames);
        link.appendChild(linkText);
        div.appendChild(link);
    }
    main.appendChild(div)

}

loadMembersList();
