import './index.css';
import '../share';
import { secret } from './secret';
function render(){
    console.log('xx',secret);
    return `h1 class="text-3xl text-5xl font-bold underline">
    Hello world!
  </h1>`
}
render();