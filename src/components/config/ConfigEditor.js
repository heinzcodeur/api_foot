import { useState } from "react";

function ConfigEditor() {
  const [apiKeys, setApiKeys] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convertir la chaîne en tableau, en séparant par virgules
    const keysArray = apiKeys
      .split(",")
      .map(key => key.trim())
      .filter(key => key.length > 0);

    try {
      const res = await fetch("/api/update-config", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ API_KEYS: keysArray }),
      });

      const text = await res.text();
      setMessage(text);
    } catch (err) {
      console.error(err);
      setMessage("Erreur lors de la mise à jour.");
    }
  };

  return (
    <div className="col-6 mx-auto">
      <h2>changer la clé API</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="apiKeys">Clé API :</label>
        <textarea
          id="apiKeys"
          value={apiKeys}
          onChange={(e) => setApiKeys(e.target.value)}
          placeholder='ex: clé1, clé2, clé3'
          rows={5}
          style={{ width: "100%", marginTop: "0.5rem" }}
        />
        <button type="submit" className="btn btn-warning">
          Mettre à jour
        </button>
      </form>
      {message && <p style={{ marginTop: "1rem" }}>{message}</p>}
    </div>
  );
}

export default ConfigEditor;