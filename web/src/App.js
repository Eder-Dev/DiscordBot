import React, {useEffect, useState} from 'react';
import './App.css';

import api from './services/api';

function App() {
	const [images,setImages] = useState([]);
	
	useEffect(() => {
        api.get('listar').then(response => {
            setImages(response.data);
        });
        
    },[]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Luh Plantas</h1>
      </header>
	  <main>
		<ul>
			{images.map(image => (
				<li>
					<img src={image.url} />
					<p class="nome">{image.nomePopu} - <b>{image.nomeCien}</b></p>
					<p class="data">{image.data}</p>
				</li>
			))}
		</ul>
	  </main>
	  <footer></footer>
    </div>
  );
}

export default App;
