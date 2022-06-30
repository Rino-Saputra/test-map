import './App.css';
// import Aos from 'aos';
// import 'aos/dist/aos.css'
import { useEffect, useState } from 'react';
import i18n from 'i18next';
import { useTranslation, initReactI18next, Trans } from "react-i18next"
import Routes from './Routes';

import {geolocated} from 'geolocation'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

export default function App(){
  const [loc,setLoc]=useState({})
  const [longt,setLongt]=useState(0);
  const[done,setdone]=useState(false);

  setInterval(()=>{
    const location=navigator.geolocation.getCurrentPosition(position=>{
      setLoc(position.coords);
      setLongt(position.coords.longitude);
      setdone(true)
    })
  },1000)



  useEffect(()=>{
    const location=navigator.geolocation.getCurrentPosition(position=>{
      setLoc(position.coords);
      setLongt(position.coords.longitude);
      setdone(true)
    })
  },[])//latitude,longitude

  return(
    <>
    {done &&<> <p>{loc.latitude}</p>
      <MapContainer 
        center={[loc.latitude,loc.longitude]} 
        zoom={13} 
        scrollWheelZoom={true}
        id="mapId">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Routes cordinat={loc}/>
      </MapContainer></>
    }
    </>
  )
}




































// const translationsEn = {
//   welcome: "Welcome!",
//   "sample-text": "Sample <bold><italic>text</italic></bold>.",
//   changed: "You have changed the language {{count}} time",
//   changed_plural: "You have changed the language {{count}} times",
// };

// const translationsFr = {
//   welcome: "Bienvenue!",
//   "sample-text": "Exemple de <bold><italic>texte</italic></bold>.",
//   changed: "Vous avez changé la langue {{count}} fois",
// };

// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .init({
//     resources: {
//       en: { translation: translationsEn },
//       gr: { translation: translationsFr },
//     },
//     lng: "en",
//     fallbackLng: "en",
//     interpolation: { escapeValue: false },
//   });

// function App() {

//   const { t } = useTranslation();
//   // const [count, setCount] = useState(0);
//   const onChange = (event) => {
//     i18n.changeLanguage(event.target.value);
//     console.log(event.target.value);
//     // setCount((previousCount) => previousCount + 1);
//   };

//   useEffect(()=>{
//     // Aos.init({duration: 2000})
//   },[])
//   return (
//     <div>
//       <h1>{t("changed")}</h1>
//       <select name="language" onChange={onChange}>
//         <option value="en">English</option>
//         <option value="gr">French</option>
//       </select>
//     </div>

//       // <div className="App">
//       //   <div className="box">1</div>
//       //   <div className="box">2</div>
//       //   <div data-aos='fade-down' className="box">3</div>
//       //   <div data-aos='fade-up' className="box">4</div>
//       //   <div data-aos='fade-left' className="box">5</div>
//       // </div>
//   );
// }

// export default App;
