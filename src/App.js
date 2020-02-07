import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';


function App() {
	const VALUE_MAX = 10
	const [isShown1, setIsShown1] = useState(false);
	const [isShown2, setIsShown2] = useState(false);
	const [isShown3, setIsShown3] = useState(true);
	const [isShown4, setIsShown4] = useState(false);
	const [isShown5, setIsShown5] = useState(false);
	const [isShown6, setIsShown6] = useState(false);
	const [isShown7, setIsShown7] = useState(false);
	const [isShown8, setIsShown8] = useState(false);
	const [isShown9, setIsShown9] = useState(false);
	const [isShown10, setIsShown10] = useState(false);
	const [isShown11, setIsShown11] = useState(false);
	const [isShown12, setIsShown12] = useState(false);
	const [isShown13, setIsShown13] = useState(false);
	const [isShown14, setIsShown14] = useState(false);
	const [isShown15, setIsShown15] = useState(false);
	const [cpt, setCpt] = useState(0)
	const [printURL, setPrintURL] = useState(false)
	
    return (
    <div>
		<p style={{fontSize: 25}}><b>Cliquez sur le bouton jaune</b></p>
		  <Button variant={isShown1 ? "warning" : "info"} disabled={!isShown1}
			onMouseEnter={() => {
				if (isShown1) {
					setCpt(cpt + 1)
				setIsShown1(false)
				setIsShown2(false)
				setIsShown3(false)
				setIsShown4(false)
				setIsShown5(false)
				setIsShown6(false)
				setIsShown7(false)
				setIsShown8(false)
				setIsShown9(false)
				setIsShown10(false)
				setIsShown11(false)
				setIsShown12(false)
				setIsShown13(true)
				setIsShown14(false)
				setIsShown15(false)
				}
				if (cpt >= VALUE_MAX)
					setPrintURL(true)
				}}>
			Cliquez ici
		  </Button> {'  '}
		  <Button variant={isShown2 ? "warning" : "info"} disabled={!isShown2}
			onMouseEnter={() => {
				if (isShown2) {
					setCpt(cpt + 1)
				setIsShown1(false)
				setIsShown2(false)
				setIsShown3(false)
				setIsShown4(false)
				setIsShown5(false)
				setIsShown6(false)
				setIsShown7(false)
				setIsShown8(false)
				setIsShown9(false)
				setIsShown10(false)
				setIsShown11(false)
				setIsShown12(true)
				setIsShown13(false)
				setIsShown14(false)
				setIsShown15(false)
					}
				if (cpt >= VALUE_MAX)
					setPrintURL(true)
				}}>
			Cliquez ici
		  </Button> {'  '}
		  <Button variant={isShown3 ? "warning" : "info"} disabled={!isShown3}
			onMouseEnter={() => {
				if (isShown3) {
					setCpt(cpt + 1)
				setIsShown1(false)
				setIsShown2(false)
				setIsShown3(false)
				setIsShown4(false)
				setIsShown5(true)
				setIsShown6(false)
				setIsShown7(false)
				setIsShown8(false)
				setIsShown9(false)
				setIsShown10(false)
				setIsShown11(false)
				setIsShown12(false)
				setIsShown13(false)
				setIsShown14(false)
				setIsShown15(false)
					}
				if (cpt >= VALUE_MAX)
					setPrintURL(true)
				}}>
			Cliquez ici
		  </Button> {'  '}
		  <Button variant={isShown4 ? "warning" : "info"} disabled={!isShown4}
			onMouseEnter={() => {
				if (isShown4) {
					setCpt(cpt + 1)
				setIsShown1(false)
				setIsShown2(false)
				setIsShown3(false)
				setIsShown4(false)
				setIsShown5(false)
				setIsShown6(false)
				setIsShown7(false)
				setIsShown8(false)
				setIsShown9(false)
				setIsShown10(true)
				setIsShown11(false)
				setIsShown12(false)
				setIsShown13(false)
				setIsShown14(false)
				setIsShown15(false)
					}
				if (cpt >= VALUE_MAX)
					setPrintURL(true)
				}}>
			Cliquez ici
		  </Button> {'  '}
		  <Button variant={isShown5 ? "warning" : "info"} disabled={!isShown5}
			onMouseEnter={() => {
				if (isShown5) {
					setCpt(cpt + 1)
				setIsShown1(false)
				setIsShown2(false)
				setIsShown3(false)
				setIsShown4(false)
				setIsShown5(false)
				setIsShown6(false)
				setIsShown7(true)
				setIsShown8(false)
				setIsShown9(false)
				setIsShown10(false)
				setIsShown11(false)
				setIsShown12(false)
				setIsShown13(false)
				setIsShown14(false)
				setIsShown15(false)
					}
				if (cpt >= VALUE_MAX)
					setPrintURL(true)
				}}>
			Cliquez ici
		  </Button> {'  '}
		  <Button variant={isShown6 ? "warning" : "info"} disabled={!isShown6}
			onMouseEnter={() => {
				if (isShown6) {
					setCpt(cpt + 1)
				setIsShown1(false)
				setIsShown2(false)
				setIsShown3(false)
				setIsShown4(false)
				setIsShown5(false)
				setIsShown6(false)
				setIsShown7(false)
				setIsShown8(false)
				setIsShown9(false)
				setIsShown10(false)
				setIsShown11(false)
				setIsShown12(false)
				setIsShown13(false)
				setIsShown14(false)
				setIsShown15(true)
					}
				if (cpt >= VALUE_MAX)
					setPrintURL(true)
				}}>
			Cliquez ici
		  </Button> {'  '}
		  <Button variant={isShown7 ? "warning" : "info"} disabled={!isShown7}
			onMouseEnter={() => {
				if (isShown7) {
					setCpt(cpt + 1)
				setIsShown1(false)
				setIsShown2(true)
				setIsShown3(false)
				setIsShown4(false)
				setIsShown5(false)
				setIsShown6(false)
				setIsShown7(false)
				setIsShown8(false)
				setIsShown9(false)
				setIsShown10(false)
				setIsShown11(false)
				setIsShown12(false)
				setIsShown13(false)
				setIsShown14(false)
				setIsShown15(false)
					}
				if (cpt >= VALUE_MAX)
					setPrintURL(true)
				}}>
			Cliquez ici
		  </Button> {'  '}
		  <Button variant={isShown8 ? "warning" : "info"} disabled={!isShown8}
			onMouseEnter={() => {
				if (isShown8) {
					setCpt(cpt + 1)
				setIsShown1(true)
				setIsShown2(false)
				setIsShown3(false)
				setIsShown4(false)
				setIsShown5(false)
				setIsShown6(false)
				setIsShown7(false)
				setIsShown8(false)
				setIsShown9(false)
				setIsShown10(false)
				setIsShown11(false)
				setIsShown12(false)
				setIsShown13(false)
				setIsShown14(false)
				setIsShown15(false)
					}
				if (cpt >= VALUE_MAX)
					setPrintURL(true)
				}}>
			Cliquez ici
		  </Button> {'  '}
		  <Button variant={isShown9 ? "warning" : "info"} disabled={!isShown9}
			onMouseEnter={() => {
				if (isShown9) {
					setCpt(cpt + 1)
				setIsShown1(false)
				setIsShown2(false)
				setIsShown3(false)
				setIsShown4(true)
				setIsShown5(false)
				setIsShown6(false)
				setIsShown7(false)
				setIsShown8(false)
				setIsShown9(false)
				setIsShown10(false)
				setIsShown11(false)
				setIsShown12(false)
				setIsShown13(false)
				setIsShown14(false)
				setIsShown15(false)
					}
				if (cpt >= VALUE_MAX)
					setPrintURL(true)
				}}>
			Cliquez ici
		  </Button> {'  '}
		  <Button variant={isShown10 ? "warning" : "info"} disabled={!isShown10}
			onMouseEnter={() => {
				if (isShown10) {
					setCpt(cpt + 1)
				setIsShown1(false)
				setIsShown2(false)
				setIsShown3(false)
				setIsShown4(false)
				setIsShown5(false)
				setIsShown6(false)
				setIsShown7(false)
				setIsShown8(false)
				setIsShown9(false)
				setIsShown10(false)
				setIsShown11(false)
				setIsShown12(false)
				setIsShown13(false)
				setIsShown14(true)
				setIsShown15(false)
					}
				if (cpt >= VALUE_MAX)
					setPrintURL(true)
				}}>
			Cliquez ici
		  </Button> {'  '}
		  <Button variant={isShown11 ? "warning" : "info"} disabled={!isShown11}
			onMouseEnter={() => {
				if (isShown11) {
					setCpt(cpt + 1)
				setIsShown1(false)
				setIsShown2(false)
				setIsShown3(true)
				setIsShown4(false)
				setIsShown5(false)
				setIsShown6(false)
				setIsShown7(false)
				setIsShown8(false)
				setIsShown9(false)
				setIsShown10(false)
				setIsShown11(false)
				setIsShown12(false)
				setIsShown13(false)
				setIsShown14(false)
				setIsShown15(false)
					}
				if (cpt >= VALUE_MAX)
					setPrintURL(true)
				}}>
			Cliquez ici
		  </Button> {'  '}
		  <Button variant={isShown12 ? "warning" : "info"} disabled={!isShown12}
			onMouseEnter={() => {
				if (isShown12) {
					setCpt(cpt + 1)
				setIsShown1(false)
				setIsShown2(false)
				setIsShown3(false)
				setIsShown4(false)
				setIsShown5(false)
				setIsShown6(true)
				setIsShown7(false)
				setIsShown8(false)
				setIsShown9(false)
				setIsShown10(false)
				setIsShown11(false)
				setIsShown12(false)
				setIsShown13(false)
				setIsShown14(false)
				setIsShown15(false)
					}
				if (cpt >= VALUE_MAX)
					setPrintURL(true)
				}}>
			Cliquez ici
		  </Button> {'  '}
		  <Button variant={isShown13 ? "warning" : "info"} disabled={!isShown13}
			onMouseEnter={() => {
				if (isShown13) {
					setCpt(cpt + 1)
				setIsShown1(false)
				setIsShown2(false)
				setIsShown3(false)
				setIsShown4(false)
				setIsShown5(false)
				setIsShown6(false)
				setIsShown7(false)
				setIsShown8(false)
				setIsShown9(true)
				setIsShown10(false)
				setIsShown11(false)
				setIsShown12(false)
				setIsShown13(false)
				setIsShown14(false)
				setIsShown15(false)
					}
				if (cpt >= VALUE_MAX)
					setPrintURL(true)
				}}>
			Cliquez ici
		  </Button> {'  '}
		  <Button variant={isShown14 ? "warning" : "info"} disabled={!isShown14}
			onMouseEnter={() => {
				if (isShown14) {
					setCpt(cpt + 1)
					setIsShown1(false)
					setIsShown2(false)
					setIsShown3(false)
					setIsShown4(false)
					setIsShown5(false)
					setIsShown6(false)
					setIsShown7(false)
					setIsShown8(false)
					setIsShown9(false)
					setIsShown10(false)
					setIsShown11(true)
					setIsShown12(false)
					setIsShown13(false)
					setIsShown14(false)
					setIsShown15(false)
				}
				if (cpt >= VALUE_MAX)
					setPrintURL(true)
				}}>
			Cliquez ici
		  </Button> {'  '}
		  <Button variant={isShown15 ? "warning" : "info"} disabled={!isShown15}
			onMouseEnter={() => {
				if (isShown15) {
					setCpt(cpt + 1)
				setIsShown1(false)
				setIsShown2(false)
				setIsShown3(false)
				setIsShown4(false)
				setIsShown5(false)
				setIsShown6(false)
				setIsShown7(false)
				setIsShown8(true)
				setIsShown9(false)
				setIsShown10(false)
				setIsShown11(false)
				setIsShown12(false)
				setIsShown13(false)
				setIsShown14(false)
				setIsShown15(false)
				}
				if (cpt >= VALUE_MAX)
					setPrintURL(true)
				}}>
			Cliquez ici
		  </Button> {'  '}
	  
	  {printURL && <div>DROLE ! Bon cliquez <a href="http:/www.concours.terminusbrassband.com/enigme001">ici</a> pour télécharger le formulaire de candidature</div>}
      
    </div>
  );
}

export default App;
