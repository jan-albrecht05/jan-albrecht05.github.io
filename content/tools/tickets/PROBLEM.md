Problembeschreibung beim READOUT in der Datei /readout.js:

- Beim erten Aufrufen Bug: 
   - Speicher im localstorage ist leer --> Script gibt Fehler in Konsole
   - erste Nummer wird erkannt und in Konsole ausgegeben, jedoch nicht mit Klasse ".highlight" markiert oder in array "scannedNumbers" hinzugefügt
   - zweite Nummer kann nicht gescannt werden
- Nach Dateineingabe UND page-reaload: 
   - von 3-stellige Zahlen wird nur 1. Ziffer ausgelesen und dementsprechend nur diese mit der Klasse ".highlight" versehen