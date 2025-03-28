export const configurazione = {
  testo: "S",

  dimensione: 0.8,
  interlinea: 0.7,
  allineamento: "centro",
  percorsoFont: "./assets/InputMonoCondensed-BoldItalic.ttf",

  sensibilitàMicrofonoBase: 70,
  densitàPuntiBase: 0.5,

  nascondiInterfaccia: false,
};

/**
 * Disegna punto
 * Metti qui quello che vuoi disegnare per ogni punto della font!
 *
 * @typedef {Object} Ingredienti
 * @property {number} x - La coordinata x del punto
 * @property {number} y - La coordinata y del punto
 * @property {number} angolo - L'angolo della curva della font in quel punto
 * @property {number} indice - Il numero del punto nella sequenza (0, 1, 2, 3, ...)
 * @property {number} unita - Unita' di misura: corrisponde al 10% della dimensione più piccola della finestra (larghezza o altezza)
 * @property {number} volume - Il volume del microfono - Varia da 0 a 1
 * @property {number} frameCount - Il numero di frame passati dall'avvio del programma
 * @property {number} [alpha] - Device orientation alpha angle (z-axis rotation) - Varia da 0 a 360
 * @property {number} [beta] - Device orientation beta angle (front-to-back tilt) - Varia da -90 a 90
 * @property {number} [gamma] - Device orientation gamma angle (left-to-right tilt) - Varia da -90 a 90
 * @property {number} [sensibilita] - Sensibilità del microfono
 *
 * @param {Ingredienti} ingredienti
 */
export function disegnaPunto({
  x,
  y,
  angolo,
  indice,
  unita,
  volume,
  frameCount,
  alpha = 0,
  beta = 0,
  gamma = 0,
  sensibilita,
}) {
  console.log(sensibilita);
  const dimensioneIngrandita =
    unita / 10 +
    Math.sin(frameCount * 0.05 + indice) * unita * map(volume, 0, 1, 1, 1.5); // Effetto di ingrandimento
  fill(255, 0, 0); // Riempimento bianco con opacità
  noStroke();
  ellipse(x, y, dimensioneIngrandita, dimensioneIngrandita); // Disegna il punto con effetto di ingrandimento
}

/**
 * Carica le risorse necessarie
 * Esempio: carica immagini, suoni, ecc.
 */
export function caricamentoRisorse() {}

/**
 * Imposta le impostazioni iniziali
 * Esempio: impostazioni di frame rate, misura degli angoli, ecc.
 */
export function impostazioni() {
  frameRate(30);
  angleMode(DEGREES);
  rectMode(CENTER);
}

/**
 * Disegna sotto i punti
 * @param {function} disegnaTesto - La funzione che disegna il testo
 */
export function sotto(disegnaTesto) {
  background(0); // Sfondo nero

  // [INFO] Rimuovi il commento per disegnare il testo
  // fill(255); // Testo bianco
  // disegnaTesto();
}

/**
 * Disegna sopra i punti
 * @param {function} disegnaTesto - La funzione che disegna il testo
 */
export function sopra(disegnaTesto) {
  // [INFO] Rimuovi il commento per disegnare il testo
  // fill("red"); // Colore del testo nero
  // disegnaTesto();
}

/**
 * Funzione per disegnare il testo con animazione
 */
export function disegnaTesto() {
  push();
  textSize(100); // Dimensione del testo
  textAlign(CENTER, CENTER);
  textFont(configurazione.percorsoFont); // Carica il font personalizzato
  fill(255); // Testo bianco
  const offset = Math.sin(frameCount * 0.05) * 5; // Effetto di movimento dolce
  text(configurazione.testo, width / 2, height / 2 + offset); // Disegna il testo animato
  pop();
}
