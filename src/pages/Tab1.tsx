import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonText } from '@ionic/react';
import { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [cookieCounter, setCookieCounter] = useState(0);
  const [visibleAdd, setVisibleAdd] = useState(false);
  const audio = new Audio('/assets/Hom-nom.mp3');
  function activateSound() {
    setVisibleAdd(true);
    setCookieCounter(cookieCounter + 1)
    setTimeout(() => setVisibleAdd(false), 3600)
    audio.play();
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Cookies: {cookieCounter}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
        <div className="container">
          {visibleAdd && (
            <IonText color="primary">
              <h1>+1&nbsp;&nbsp;<IonIcon src={'/assets/cookie.svg'} /></h1>
            </IonText>
          )}
          <img onClick={activateSound} style={{ maxWidth: '15rem', alignItems: 'center' }} src="/assets/cookieMonster.png">
          </img>
          <br />
          <br />
          {visibleAdd && <IonIcon style={{ fontSize: 70 }} color="tertiary" src={'/assets/cookie.svg'} />}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
