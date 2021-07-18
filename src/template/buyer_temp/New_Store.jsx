import Food_store from './store/Food_store';
import Fruit_store from './store/Fruit_store';
import Fashion_store from './store/Fashion_store';

const New_Store = []

for (let index = 0; index < 2; index++) {
    const element = Food_store[index];
    New_Store.push(element);
}
for (let index = 0; index < 2; index++) {
    const element = Fruit_store[index];
    New_Store.push(element);
}
for (let index = 0; index < 2; index++) {
    const element = Fashion_store[index];
    New_Store.push(element);
}

export default New_Store;