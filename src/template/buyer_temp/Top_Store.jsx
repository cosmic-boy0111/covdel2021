import Food_store from './store/Food_store';
import Fruit_store from './store/Fruit_store';
import Fashion_store from './store/Fashion_store';

const Top_Store = [
    
]


for (let index = Food_store.length-1; index > Food_store.length-3; index--) {
    const element = Food_store[index];
    Top_Store.push(element);
}
for (let index = Fruit_store.length-1; index > Fruit_store.length-3; index--) {
    const element = Fruit_store[index];
    Top_Store.push(element);
}
for (let index = Fashion_store.length-1; index > Fashion_store.length-3; index--) {
    const element = Fashion_store[index];
    Top_Store.push(element);
}


export default Top_Store;















