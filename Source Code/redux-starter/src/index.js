import store from './store';
import * as actions from './actions'; 

store.subscribe(() => {
    console.log("store changed", store.getState()); 
}); 

store.dispatch(actions.bugAdded("Bug 1")); 


console.log(store.getState()); 

