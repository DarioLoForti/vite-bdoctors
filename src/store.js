import { reactive } from 'vue';

export const store = reactive({

    baseUrl: 'http://127.0.0.1:8000',

    review : [
        {
          titolo: "Navigazione semplice e veloce",
          testo: "Ho trovato il sito estremamente facile da usare per trovare un dottore specialista adatto alle mie esigenze. La barra di ricerca intuitiva e la possibilità di filtrare i risultati in base alla specializzazione, alla posizione e alle recensioni dei pazienti hanno reso il processo di selezione rapido e senza stress. Grazie alla struttura chiara e organizzata del sito, ho potuto prenotare una visita con il dottore giusto in pochi minuti. Consiglio vivamente questo sito a chiunque cerchi un modo semplice e conveniente per gestire la propria salute.",
          autore: "Francesca Coppola",
          voto: 5
        },
        {
          titolo: "Esperienza utente impeccabile",
          testo: "La mia esperienza con questo sito è stata estremamente positiva grazie alla sua interfaccia utente intuitiva e ben progettata. La possibilità di cercare dottori per specializzazione e posizione ha reso la ricerca molto efficiente, mentre le schede dettagliate dei dottori con informazioni chiare e recensioni dei pazienti mi hanno aiutato a prendere una decisione informata. Inoltre, il processo di prenotazione online è stato rapido e senza intoppi. Grazie a questo sito, ho trovato il dottore perfetto per le mie esigenze in pochi clic.",
          autore: "Michele Giannetti",
          voto: 5
        },
        {
          titolo: "Navigazione intuitiva e personalizzata",
          testo: "Sono rimasto impressionato dalla facilità con cui ho potuto trovare un dottore specialista tramite questo sito. La sua interfaccia utente intuitiva mi ha permesso di cercare e filtrare i risultati in base alle mie esigenze specifiche, garantendomi di trovare rapidamente il dottore più adatto a me. Inoltre, ho apprezzato la funzionalità di salvataggio dei preferiti, che mi ha permesso di tenere traccia dei dottori che mi interessavano di più per confrontarli in seguito. Grazie alla sua navigazione fluida e personalizzata, questo sito si è dimostrato un prezioso strumento nella gestione della mia salute.",
          autore: "Salvatore Turrisi",
          voto: 4.5
        },
        {
          titolo: "Sito affidabile e conveniente",
          testo: "Ho utilizzato questo sito per cercare un nuovo dottore e sono rimasto soddisfatto dell'esperienza complessiva. La piattaforma è stata facile da navigare e ho apprezzato la vasta gamma di filtri disponibili per restringere la ricerca. Inoltre, ho trovato preziose le recensioni dei pazienti, che mi hanno aiutato a prendere una decisione informata. Il processo di prenotazione è stato rapido e senza problemi. Consiglio vivamente questo sito a chiunque sia alla ricerca di una soluzione conveniente per trovare un dottore.",
          autore: "Laura Rossi",
          voto: 4
        },
        {
          titolo: "Servizio eccellente",
          testo: "Ho utilizzato questo sito per cercare un dottore specialista e sono rimasto estremamente soddisfatto del servizio offerto. La navigazione del sito è stata semplice e intuitiva, consentendomi di trovare rapidamente il dottore di cui avevo bisogno. Le recensioni dei pazienti sono state particolarmente utili nel prendere una decisione informata. Inoltre, il processo di prenotazione è stato rapido e senza intoppi. Consiglio vivamente questo sito a chiunque cerchi un servizio affidabile e conveniente per prenotare visite mediche.",
          autore: "Giovanni Bianchi",
          voto: 5
        },
        {
          titolo: "Ottima esperienza utente",
          testo: "Sono rimasto molto soddisfatto dell'esperienza utente offerta da questo sito. La ricerca di un dottore specialista è stata semplice e veloce grazie alla sua interfaccia intuitiva e ai numerosi filtri disponibili. Le recensioni dei pazienti sono state molto utili nel valutare le opzioni disponibili. Inoltre, il processo di prenotazione è stato rapido e senza intoppi. Consiglio vivamente questo sito a chiunque cerchi un modo semplice e affidabile per trovare un dottore.",
          autore: "Anna Esposito",
          voto: 4.5
        },
        {
          titolo: "Strumento prezioso nella gestione della salute",
          testo: "Ho utilizzato questo sito per cercare un nuovo dottore e sono rimasto estremamente soddisfatto dell'esperienza. La sua interfaccia utente intuitiva ha reso la navigazione del sito semplice e piacevole. Ho trovato molto utile la possibilità di filtrare i risultati in base alla posizione e alle recensioni dei pazienti. Inoltre, il processo di prenotazione è stato rapido e senza intoppi. Consiglio vivamente questo sito a chiunque cerchi un modo pratico per gestire la propria salute.",
          autore: "Marco Ferrari",
          voto: 4
        },
        {
          titolo: "Facile da usare e conveniente",
          testo: "Ho avuto un'ottima esperienza con questo sito durante la ricerca di un nuovo dottore specialista. La sua interfaccia utente intuitiva ha reso la navigazione del sito estremamente semplice. Ho apprezzato la possibilità di filtrare i risultati in base alle mie esigenze specifiche. Le recensioni dei pazienti sono state molto utili nel prendere una decisione informata. Inoltre, il processo di prenotazione è stato rapido e senza intoppi. Consiglio vivamente questo sito a chiunque cerchi un modo conveniente per trovare un dottore adatto alle proprie esigenze.",
          autore: "Roberta Martini",
          voto: 5
        },
        {
        titolo: "Efficienza e professionalità",
        testo: "Ho trovato il servizio fornito da questo sito estremamente efficiente e professionale. La sua interfaccia intuitiva ha reso la ricerca di un dottore specialista molto semplice. Sono rimasto particolarmente soddisfatto della rapidità con cui ho potuto prenotare una visita. Consiglio vivamente questo sito a chiunque cerchi un modo rapido e affidabile per trovare assistenza medica.",
        autore: "Giulia Conti",
        voto: 4.5
        },
        {
        titolo: "Piacevole sorpresa",
        testo: "Non mi aspettavo di trovare un sito così ben fatto per la ricerca di dottori specializzati. La sua interfaccia chiara e intuitiva ha reso il processo di selezione molto semplice. Sono rimasto colpito dalla varietà di specialisti disponibili e dalle informazioni dettagliate fornite su ciascun dottore. Grazie a questo sito, ho trovato il professionista giusto per le mie esigenze.",
        autore: "Alessandro Russo",
        voto: 4
        },
        {
        titolo: "Soddisfatto al 100%",
        testo: "Questo sito è stato un salvavita per me nella ricerca di un dottore specialista. La sua interfaccia intuitiva e la possibilità di filtrare i risultati hanno reso il processo di selezione molto efficiente. Ho apprezzato anche la sezione delle recensioni dei pazienti, che mi ha aiutato a prendere una decisione informata. Consiglio vivamente questo sito a chiunque cerchi assistenza medica di qualità.",
        autore: "Simone Bianchi",
        voto: 5
        },
        {
        titolo: "Fantastico strumento",
        testo: "Sono rimasto estremamente soddisfatto della mia esperienza con questo sito. La sua interfaccia intuitiva e la vasta gamma di filtri disponibili hanno reso la ricerca di un dottore specialista un'esperienza piacevole. Sono rimasto colpito dalla qualità delle informazioni fornite su ciascun professionista. Grazie a questo sito, ho trovato il dottore giusto per le mie esigenze in pochi minuti.",
        autore: "Martina Rossi",
        voto: 5
        },
        {
        titolo: "Servizio impeccabile",
        testo: "Non posso che elogiare questo sito per il servizio impeccabile che offre. La sua interfaccia utente intuitiva mi ha permesso di trovare rapidamente un dottore specialista adatto alle mie esigenze. Ho trovato estremamente utile la sezione delle recensioni dei pazienti, che mi ha aiutato a prendere una decisione informata. Consiglio vivamente questo sito a chiunque sia alla ricerca di assistenza medica di qualità.",
        autore: "Luca Ferrari",
        voto: 4.5
        },
        {
        titolo: "Facile da usare e completo",
        testo: "Ho apprezzato molto la semplicità d'uso di questo sito nella ricerca di un dottore specialista. La sua interfaccia intuitiva mi ha permesso di trovare rapidamente le informazioni di cui avevo bisogno. Sono rimasto soddisfatto della quantità di informazioni disponibili su ciascun professionista. Grazie a questo sito, ho trovato il dottore perfetto per le mie esigenze in pochi passaggi.",
        autore: "Federica Moretti",
        voto: 4
        },
        {
        titolo: "Esperienza positiva",
        testo: "Ho avuto una esperienza molto positiva con questo sito nella ricerca di un dottore specialista. La sua interfaccia intuitiva mi ha permesso di trovare rapidamente ciò che cercavo. Sono rimasto particolarmente soddisfatto delle recensioni dei pazienti, che mi hanno aiutato a prendere una decisione informata. Consiglio vivamente questo sito a chiunque sia alla ricerca di assistenza medica di qualità.",
        autore: "Marco Moretti",
        voto: 4.5
        },
        {
        titolo: "Professionale e veloce",
        testo: "Questo sito si è dimostrato estremamente professionale e veloce nella ricerca di un dottore specialista. La sua interfaccia intuitiva mi ha permesso di trovare rapidamente ciò che cercavo. Sono rimasto particolarmente soddisfatto della qualità delle informazioni fornite su ciascun professionista. Grazie a questo sito, ho trovato il dottore giusto per le mie esigenze in pochi clic.",
        autore: "Elena Bianchi",
        voto: 5
        },
        {
        titolo: "Strumento essenziale",
        testo: "Questo sito è diventato uno strumento essenziale nella mia ricerca di un dottore specialista. La sua interfaccia intuitiva e la vasta gamma di filtri disponibili hanno reso il processo di selezione molto semplice. Sono rimasto soddisfatto della quantità di informazioni fornite su ciascun professionista. Grazie a questo sito, ho trovato il dottore perfetto per le mie esigenze.",
        autore: "Giacomo Morelli",
        voto: 4.5
        },
        {
        titolo: "Ottimo servizio",
        testo: "Sono rimasto molto soddisfatto del servizio offerto da questo sito nella ricerca di un dottore specialista. La sua interfaccia intuitiva mi ha permesso di trovare rapidamente ciò di cui avevo bisogno. Sono rimasto particolarmente soddisfatto della sezione delle recensioni dei pazienti, che mi ha aiutato a prendere una decisione informata. Consiglio vivamente questo sito a chiunque sia alla ricerca di assistenza medica di qualità.",
        autore: "Elisa Conti",
        voto: 4
        }
      ],

    menu: [
        {
            name:'home',
            label: 'Home',
        },
        {
            name:'doctors',
            label: 'Dottori',
        },
        {
            name:'specializations',
            label: 'Specializzazioni',
        },
    ],
    sponsorships: [],
    specializations: [],
    specrequest: '',
});
