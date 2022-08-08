import './style/index.css';
import { h, render } from 'preact';
import createApp from './components/app';


const main = document.getElementById('main')
render(createApp("/"), main as Element)
