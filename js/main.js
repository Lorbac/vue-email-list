// Attraverso l'apposita API di Boolean
// (https://flynn.boolean.careers/exercises/api/random/mail)
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus:
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

Vue.config.devtools= true;

var app = new Vue ({
    el: "#root",
    data:{
        emailContainer: [],
        howManyMail: 10,
    },
    methods: {},
    // computed: {
    //     arrayFilled: function() {
    //         if (this.emailContainer.length == this.howManyMail) {
    //             return this.emailContainer;
    //         }
    //     }
    // },
    mounted() {
        
        for (i = 0 ; i < this.howManyMail ; i++) {
            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((result) => {
                this.emailContainer.push(result.data.response);
            });
        }
    },
})