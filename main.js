const app = Vue.createApp({
    data(){
        return {
            tittle: 'HelloWord Vue.js',
            amount: 1000,
            link: 'http://www.youtube.com',
            state: true,
            services: ['Payments', 'Money Transfers', 'Bank Transfers'],
            disable: false
        }
    },
    methods:{
        addMoney(){
            this.amount += 100
        },
        decreaseMoney() {
            if(this.amount <= 0) {
                this.disable = true
                alert('No money')
                return
            }
            this.amount -= 100
        }
    },
    computed:{
        amountColor(){
            return this.amount > 500 ? 'text-success' : 'text-danger'
        }
    }
})