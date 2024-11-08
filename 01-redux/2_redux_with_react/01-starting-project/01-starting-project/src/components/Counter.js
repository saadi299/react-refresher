import store from '../store';
import classes from './Counter.module.css';
import { useSelector, connect, useDispatch } from 'react-redux';


const Counter = () => {
  const counter = useSelector(state => state.counter)


  const toggleCounterHandler = (e) => {
    store.dispatch('increment')
    
  };


  const onClickIncrement = () => {
    store.useDispatch('increment')
  }

  const onClickDecrement = () => {
    store.useDispatch('decrement')
  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- COUNTER VALUE : {counter} --</div>
      <div>
        <button onClick={onClickIncrement}>Increment</button>
        <button onClick={onClickDecrement}>Decrement</button>
      </div>
      
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
