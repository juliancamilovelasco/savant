# voice/tts_test.py
from gtts import gTTS
import pyttsx3
import os
 
# === Opción 1: gTTS (requiere Internet) ===
def text_to_speech_gtts(text: str, filename: str = "output.mp3"):
    tts = gTTS(text=text, lang='en')
    tts.save(filename)
    print(f"Audio generado con gTTS: {filename}")
 
# === Opción 2: pyttsx3 (offline) ===
def text_to_speech_pyttsx3(text: str):
    engine = pyttsx3.init()
    engine.say(text)
    engine.runAndWait()
    print("Audio reproducido con pyttsx3")
 
# === Validación ===
def test_tts_output():
    filename = "output.mp3"
    text_to_speech_gtts("Testing TTS validation excercise for savant challenge", filename)
    assert os.path.exists(filename), "El archivo de audio no se generó"
    assert os.path.getsize(filename) > 0, "El archivo está vacío"
    print("✅ Prueba TTS pasada")
 
if __name__ == "__main__":
    # Ejecutar pruebas
    test_tts_output()
    # Reproducir con pyttsx3
    text_to_speech_pyttsx3("Hello! This is a test for TTS using pyttsx3.")