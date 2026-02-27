# Spielzug Design

1. Nachdem ein Spielzug **erfolgreich** getätigt wird, leuchtet der Rand der bewegten Disk in der Farbe **#f8fafc**.  

2. Alle Buttons für die Bewegung sind `rect`-Elemente mit abgerundeten Ecken in der Farbe **#7fc3d9**.  

3. Die Nachricht nach dem Gewinn lautet:  
   > **"You have won with a total of {Anzahl der Züge}"**  

4. Die einzelnen Disks sind ebenfalls `rect`-Elemente mit abgerundeten Kanten.  
   Die Türme sind exakt gleich gestaltet.  

5. Die Anzahl der Züge wird rechts oben angezeigt.  

6. Wenn ein nicht erlaubter Zug gemacht wird, erscheint kurz die Nachricht:  
   > **"This move is not allowed"**  
   oberhalb der Spielfläche.  

7. Links oben befindet sich der Reset-Button in der Farbe **#ef4444**.
