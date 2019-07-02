import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as contentful from 'contentful';
import * as serviceWorker from './serviceWorker';

let client = contentful.createClient({
    space: 'oaxtrzockd9v',
    accessToken: '6b23e7ca579a00606c8e69b3a75c4c88d4f17510354bb59714ddddfaff1a8c9a' })
  client.getEntries().then(entries => {
    entries.items.forEach(entry => {
      if(entry.fields) {
        console.log(entry.fields)
      }
    })
  })
  

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
