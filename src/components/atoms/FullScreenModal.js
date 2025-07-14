import React from "react";

const FullScreenModal = ({ show, onClose, title, children }) => {
  return (
    <div
      className={`modal ${show ? "d-block" : "d-none"}`}
      tabIndex="-1"
      role="dialog"
      style={{
        background: "linear-gradient(135deg, #0000FF, #00FFFF, #FFFFFF)", // dégradé bleu -> cyan -> blanc fluo
        // Pour un effet plus fluo intense, on peut ajuster les couleurs :
        // background: "linear-gradient(135deg, #0000FF 0%, #00FFFF 50%, #AAFFAA 100%)",
        // Pas de transparence, donc pas d'opacity
        minHeight: "100vh",
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1050, // pour être au-dessus du contenu
        display: show ? "block" : "none",
      }}
    >
      <div className="modal-dialog modal-fullscreen" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Fermer
            </button>
          </div>
        </div>
      </div>
      {/* Pas besoin de backdrop distinct si le container a le background */}
    </div>
  );
};

export default FullScreenModal;