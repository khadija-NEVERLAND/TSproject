# TSproject
Cette application web comporte deux fonctionnalités principales : la conversion de texte en discours (Text To Speech - TTS) et la conversion de discours en texte (Speech To Text - STT). Voici comment elles fonctionnent :

Conversion de texte en discours (TTS) :

Lorsque l'utilisateur entre du texte dans la zone de texte et clique sur le bouton "Listen", la fonction speak(text) est déclenchée.
Cette fonction crée un nouvel objet SpeechSynthesisUtterance, qui est utilisé pour configurer les paramètres de la synthèse vocale, tels que le texte à lire.
Ensuite, un objet Audio est créé et configuré pour lire le texte .
Conversion de discours en texte (STT) :

Lorsque l'utilisateur clique sur le bouton "Voice To Text", la fonction listen() est déclenchée.
Cette fonction crée un nouvel objet webkitSpeechRecognition, qui est une interface de reconnaissance vocale basée sur le navigateur.
Les propriétés de reconnaissance vocale telles que interimResults (résultats intérimaires) et continuous (continu) sont configurées pour permettre la reconnaissance vocale en temps réel et s'arrêter après la première détection de discours.
Lorsque la reconnaissance vocale détecte du discours, l'événement onresult est déclenché, et la transcription du discours est récupérée à partir de cet événement.
Cette transcription est affichée dans la zone de texte dédiée à la conversion de discours en texte.
En résumé, cette application utilise les API de synthèse vocale et de reconnaissance vocale fournies par les navigateurs modernes pour permettre la conversion bidirectionnelle entre le texte et le discours.
