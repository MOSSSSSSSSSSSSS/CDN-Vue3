export default{
    template: /*html*/`
     <section v-show="beforeBuy.length"> 
            <h2>未购零食</h2>
                <ul>
                    <li v-for="food in beforeBuy" :key="food.id">
                        <img :src="food.image">
                        <span>{{ food.name }}</span>
                        <input type="checkbox" v-model="food.purchased"> 
                    </li>
                </ul>
        </section>

        <section v-show="afterBuy.length">
            <h2>已购零食</h2>
                <ul>
                    <li v-for="food in afterBuy" :key="food.id">
                        <img :src="food.image">
                        <span>{{ food.name }}</span>
                        <input type="checkbox" v-model="food.purchased"> 
                    </li>
                </ul>
        </section>
    `,
    data(){
        return {
            foods: [
                { id: 1, name: '原味鱿鱼丝', image: './images/原味鱿鱼丝.png', purchased: false},
                { id: 2, name: '辣味鱿鱼丝', image: './images/辣味鱿鱼丝.png', purchased: false},
                { id: 3, name: '炭烧味鱿鱼丝', image: './images/碳烧味鱿鱼丝.png', purchased: false}
            ]
        }
    },
    computed: {
        beforeBuy(){
            return this.foods.filter(item => !item.purchased)  //这里要用this
        },
        afterBuy(){
            return this.foods.filter(item => item.purchased)
        }
    }
}