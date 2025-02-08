import { createStore } from 'redux';

const INTIAL_VALUE = {
    counter:0,
    privacy: false,
};
const CounterReducer=(store=INTIAL_VALUE,action) =>{
    
    if (action.type==='INCREMENT'){
        return {...store,counter:store.counter + 1};
    }
    else if (action.type==='DECREMENT'){
        return {...store,counter:store.counter - 1};
    }
    else if (action.type==='ADD'){
        return {...store,counter:store.counter +Number(action.payload.number) };
    }
    else if(action.type==='SUB'){
    return {...store,counter:store.counter -Number(action.payload.number)};
    }
    else if(action.type==='TOGGLE_PRIVACY'){
        return {...store,  privacy:!store.privacy};
    }

    return store;
}
const CounterStore= createStore(CounterReducer);

export default CounterStore;