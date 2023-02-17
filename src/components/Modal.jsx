import { createPortal } from "react-dom";

export default function Modal({ modal, closeModal }) {
  let portalRoot = document.getElementById("portal");
  if (!portalRoot) {
    portalRoot = document.createElement("div");
    portalRoot.setAttribute("id", "portal");
    document.body.appendChild(portalRoot);
  }

  if (modal === null) return null;

  return createPortal(
    <div id="modal">
      <div
        className="background"
        data-testid="modal-background"
        onClick={() => closeModal()}
      ></div>
      <div className="window">{modal}</div>
    </div>,
    portalRoot
  );
}
