import './style.css'
import {createHomepage, createIntro} from './home'
import { createHeader, createFooter } from './navbar_footer';

const initWebsite = (() => {
  createHeader();
  createFooter();
  createIntro();
})();