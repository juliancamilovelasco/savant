import whisper
 
def speech_to_text_whisper(audio_file: str):
    model = whisper.load_model("base")  # Puedes usar "tiny", "small", "medium", "large"
    result = model.transcribe(audio_file)
    print("Texto reconocido:", result["text"])
    return result["text"]
 
if __name__ == "__main__":
    # Usa el archivo generado por TTS (output.mp3)
    speech_to_text_whisper("output.mp3")
 