====
Getting Started
====

ACHTUNG: Dies ist ein Test-Projekt - es soll meine Arbeit mit euch teilen, damit ich mich durch euer Feedback verbessern kann.
Außerdem wollte ich einfach mal testen wie man solch eine Game-Engine programmiert.
Das ganze wird von mir in JavaScript umgesetzt. Gerne gehe ich auch auf eure Fragen ein, damit auch ihr von meinem Fortschritt lernen könnt!

====
Usage
====

Um die Game-Engine nutzen zu können, erstelle ein Objekt mit folgendem Befehl:

.. code-block:: javascript

  const game = new GameEngine();

Die Game-Engine bietet ein 2D-Canvas, welches als Haupt-Scene für das Spiel benutzt wird:
Um ein Objekt der Scene hinzuzufügen, wird zuerst solch ein Objekt benötigt.
Es stehen mehrere Objekte zur Auswahl:

.. code-block:: javascript

  const player = new EntityObject();

Das erstellte Objekt kann nun der sichtbaren 2D-Scene hinzugefügt werden:

.. code-block:: javascript

  game.scene.appendChild(player);

====
GameEngine
====


Features
====

Die Game-Engine bietet folgende Features:

1. Ein Physic-Update alle 60 Sekunden.

2. Ein Render-Update alle 60 Sekunden.

3. Eine Scene um Objekte hinzuzufügen.

4. Eine automatische Skalierung der Scene beim Verändern der Bildschirmgröße.


Physic Update
----

Render Update
----

GameEngine.scene
----

Events
----

.. code-block:: javascript

  window.addEventListener("resize", () => {
      cvs.width = innerWidth;
      cvs.height = innerHeight;
  });
