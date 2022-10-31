class Service {
    constructor(id, name, pris, fra) {
        this.id = id;
        this.name = name;
        this.pris = pris;
        this.fra = fra
    }
}

const services = [
    new Service(1, "Dameklipp", 660, true),
    new Service(2, "Barneklipp", 210, true),
    new Service(3, "Studentklipp", 560, false),
    new Service(4, "Styling uten hårvask", 250, false),
    new Service(5, "Avfarging", 760, false),
    new Service(6, "Farge", 790, true),
    new Service(7, "Foliestriper", 1260, true),
    new Service(8, "Airtouchteknikk", 2500, true),
    new Service(9, "Balayage, ombre, shatush", 1850, true),
    new Service(10, "Hårbotox", 1300, true),
    new Service(11, "Hårbotox + klipp", 1830, true),
    new Service(12, "Nanoplastikk", 1900, true),
    new Service(13, "Oppsetting", 600, true),
    new Service(14, "Brudeoppsett", 2500, true),
    new Service(15, "Vippefarge", 210, false),
    new Service(16, "Brynnapping", 250, false),
    new Service(17, "Brynfarge", 370, false),
    new Service(18, "Make up", 750, false)
]

const copy = {
    header: {
        title: "Zhanna D'art frisør",
        subTitle: "Få håret ditt til å se strålende ut",
    },
    work: {
        title: "Mitt arbeid",
        subTitle: "Noen eksempler av mine prosjekter"
    },
    about: {
        title: "Om meg",
        subTitle: "Jeg heter Zhanna og jeg er en utdannet frisør med 20års erfaring. Jeg spesialiserer meg innen hårfarge og keratinbehandlinger."
    },
    services: {
        title: "Tjenester",
        subTitle: "NB! Prisene varierer utfra hårlengde og tykkelse",
        list: services
    },
    contact: {
        title: "Kontakt",
        subTitle: "Har du noen spørsmål så kan du kontakte meg på messenger eller telefon. Bestillinger tar jeg gjerne via knappen nedenfor. ",
        address: "Bersvendveita 16, 7011 Trondheim",
        telefon: "458 09 985",
    },
    links: {
        fb: "https://www.facebook.com/ZhannaD.Art.as/",
        ig: "https://www.instagram.com/zhannadart/",
        messenger: "https://m.me/ZhannaD.Art.as/",
        booking: "https://zhannadart.onlinebooq.net/"
    }
}



export default copy;