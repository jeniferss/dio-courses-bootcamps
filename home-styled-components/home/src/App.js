import React from 'react';
import Header from './components/Header';
import Global from './theme/global';
import Footer from './components/Footer'
import Content from './components/Content'

function App() {
  return (
		<React.Fragment>
			<Global></Global>
			<Header></Header>
			<Content></Content>
			<Footer></Footer>
		</React.Fragment>
  );
}

export default App;
