var app = new Vue({
    el: '#app',
    data: {
        events: {},
        event: {}
    },
    methods: {

        details(id) {
            axios
                .get('https://cefis.com.br/api/v1/event/' + id + '?include=classes')
                .then(req => {
                    this.event = req.data.data;
                })
                .catch(erro => { });
            this.hideList();
        },
        showLista() {
            this.event = {};
            this.hideDetails();
        },
        hideList() {
            $("#list").hide();
            $("#details").show();
        },
        hideDetails() {
            $("#details").hide();
            $("#list").show();
        }

        /**
        Details Sem Request no Servidor
        details(evento) {
            this.event = evento;
        }
        **/

    },
    mounted() {
        this.hideDetails();
        axios
            .get('https://cefis.com.br/api/v1/event')
            .then(req => {
                this.events = req.data.data;
            })
            .catch(erro => { });
    },
})