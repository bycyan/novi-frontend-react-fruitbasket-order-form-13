import React, { useState } from 'react';

const MyForm = () => {
  const [voornaam, setVoornaam] = useState('');
  const [achternaam, setAchternaam] = useState('');
  const [leeftijd, setLeeftijd] = useState('');
  const [postcode, setPostcode] = useState('');
  const [bezorgfrequentie, setBezorgfrequentie] = useState('');
  const [tijdvak, setTijdvak] = useState('');
  const [opmerking, setOpmerking] = useState('');
  const [akkoord, setAkkoord] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted!' + voornaam + achternaam + leeftijd + postcode + bezorgfrequentie + tijdvak + opmerking + akkoord);

      // Reset form fields
      setVoornaam('');
      setAchternaam('');
      setLeeftijd('');
      setPostcode('');
      setBezorgfrequentie('');
      setTijdvak('');
      setOpmerking('');
      setAkkoord(false);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <label htmlFor="voornaam">Voornaam:</label>
        <input
          type="text"
          id="voornaam"
          value={voornaam}
          onChange={(e) => setVoornaam(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="achternaam">Achternaam:</label>
        <input
          type="text"
          id="achternaam"
          value={achternaam}
          onChange={(e) => setAchternaam(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="leeftijd">Leeftijd:</label>
        <input
          type="text"
          id="leeftijd"
          value={leeftijd}
          onChange={(e) => setLeeftijd(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="postcode">Postcode:</label>
        <input
          type="text"
          id="postcode"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="bezorgfrequentie">Bezorgfrequentie:</label>
        <select
          id="bezorgfrequentie"
          value={bezorgfrequentie}
          onChange={(e) => setBezorgfrequentie(e.target.value)}
        >
          <option value="">Selecteer</option>
          <option value="week">Iedere week</option>
          <option value="twee-weken">Om de week</option>
          <option value="maand">Iedere maand</option>
        </select>
      </div>

      <div>
        <p>Tijdvak:</p>
        <label>
          <input
            type="radio"
            name="tijdvak"
            value="overdag"
            checked={tijdvak === 'overdag'}
            onChange={(e) => setTijdvak(e.target.value)}
          />
          Overdag
        </label>
        <label>
          <input
            type="radio"
            name="tijdvak"
            value="avond"
            checked={tijdvak === 'avond'}
            onChange={(e) => setTijdvak(e.target.value)}
          />
          's Avonds
        </label>
      </div>

      <div>
        <label htmlFor="opmerking">Opmerking:</label>
        <textarea
          id="opmerking"
          value={opmerking}
          onChange={(e) => setOpmerking(e.target.value)}
        />
      </div>

        <div>
            <label>
            <input
                type="checkbox"
                checked={akkoord}
                onChange={(e) => setAkkoord(e.target.checked)}
            />
            Ik ga akkoord met de voorwaarden
            </label>
        </div>

        <button type="submit">Verstuur</button>
    </form>
    );
}

export default MyForm;
