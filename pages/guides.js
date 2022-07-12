import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/authContext";
import styles from "../styles/Guides.module.css";

export default function Guides() {
  const { user, authReady } = useContext(AuthContext);

  const [guides, setGuides] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if(authReady){
      fetch("/.netlify/functions/restricted", user &&{
        headers: {
          Authorization: "Bearer " + user.token.access_token
        }
      })
      .then(res => {
        if(!res.ok){
          throw Error('You must be logged in');
        }else{
          return res.json();
        }        
      })
      .then(data => {
        setGuides(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setGuides(null);
      });
    }
    
  },[user, authReady]);
  
  return (
    <div className={styles.guides}>
      { !authReady && <p>Loading...</p> }
      { error && (
        <div className={styles.error}><p>{ error }</p></div>
      )}

      { guides && guides.map(guide => (
        <div key={ guide.id } className={styles.card}>
          <h3>{ guide.name }</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed auctor arcu. Cras cursus nec nunc eget laoreet. Nunc fringilla felis nec orci aliquet laoreet quis in lacus. Aenean commodo arcu vel elit tristique euismod. Maecenas eu sapien in ligula dignissim blandit vel vel justo. Praesent dignissim massa et ante finibus, in fermentum leo molestie. Etiam sed lorem eget turpis commodo aliquet id quis lacus. Suspendisse et turpis maximus, ornare urna ac, pretium odio. Nunc venenatis placerat tellus, eu suscipit turpis. Aliquam convallis elit odio, quis feugiat arcu rutrum quis.</p>
        </div>
      ))}
    </div>
  )
}
