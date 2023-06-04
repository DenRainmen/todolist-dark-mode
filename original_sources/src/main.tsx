import ReactDOM from 'react-dom/client'
import './index.css'
import {App} from './App';

import {SplitIntoWords } from './01-hello-tests/01'

const sentense = "hello my friend !";
const result = SplitIntoWords(sentense)
console.log(result);

console.log(result[0] === "hello");
console.log(result[1] === "my");
console.log(result[2] === "friend");

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  
    <App />
  
)
