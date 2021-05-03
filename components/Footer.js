app.component('footer-bank',{
    props: ['value', 'fecha'],
    template: /*html*/`
    <div class="bg-dark py-3 mt-2 text-white">
    <h3>{{ text }} - {{ value }}</h3>
    <p>{{ fecha }}</p>
    </div>
    `,
    data() {
        return {
            text: 'My website footer'
        }
    }
})