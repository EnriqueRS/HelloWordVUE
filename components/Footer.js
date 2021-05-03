app.component('footer-bank',{
    template: /*html*/`
    <div class="bg-dark py-3 mt-2 text-white">
    <h3>{{ text }}</h3>
    </div>
    `,
    data() {
        return {
            text: 'My website footer'
        }
    }
})