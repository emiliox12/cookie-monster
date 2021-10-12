import { IonImg, IonItem } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
      <IonItem lines="none">
      <IonImg style={{ maxWidth: '15rem', alignItems: 'center' }} src="https://lh3.googleusercontent.com/proxy/85Gq8L-kYzlAwEjtOpn8tD2G8CmItW3P5CsrM_QjPkrIrJGw3quK05iJFAs6gERiM7iEOVeI3d22wO3jJ1h6BjWzdzGbmsLfPEBO-tqbqqeFBZrr8Dj2qDsildg"/>
      </IonItem>
    </div>
  );
};

export default ExploreContainer;
