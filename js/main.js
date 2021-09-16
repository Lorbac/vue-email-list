// Attraverso l'apposita API di Boolean
// (https://flynn.boolean.careers/exercises/api/random/mail)
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus:
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

Vue.config.devtools= true;

var app = new Vue ({
    el: "#root",
    data:{
        currentEmail: "",
        emailContainer: [],
    },
    methods: {},
    mounted() {
        let howManyMail = 10
        for (i = 0 ; i < howManyMail ; i++) {
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((result) => {
                    this.currentEmail = result.data.response;
                    this.emailContainer.push(result.data.response);  
                });
                console.log(this.emailContainer)
        }
    }   
})