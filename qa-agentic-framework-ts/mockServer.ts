import express from 'express';
import cors from 'cors';
import type { Request, Response } from 'express';
 
const app = express();
 
// Habilitar CORS para permitir peticiones desde otros orígenes
app.use(cors());
 
// Middleware para parsear JSON
app.use(express.json());
 
// === Tipo para manejar intents ===
type IntentData = {
  intent: string;
  responses: string[];
  usedIndices: number[];
};
 
// === Mapa de intents ===
const intentsMap: Record<string, IntentData> = {
  hello: {
    intent: 'greeting',
    responses: [
      'Hello! How can I help you today?',
      'Hi there! What can I do for you?',
      'Hey! Nice to see you.'
    ],
    usedIndices: []
  }
};
 
// === Endpoint: /agent/respond ===
app.post('/agent/respond', (req: Request, res: Response) => {
  console.log('Received payload *************** VALIDAR *************:', req.body);
  const { message } = req.body;
 
  if (!message || message.trim() === '') {
    return res.status(400).json({ error: 'Invalid payload' });
  }
 
  const lowerMsg = message.toLowerCase();
 
  // Buscar intent
  let matchedIntent: IntentData | undefined;
  for (const key in intentsMap) {
    if (lowerMsg.includes(key)) {
      matchedIntent = intentsMap[key];
      break;
    }
  }
 
  if (!matchedIntent) {
    return res.status(200).json({
      intent: 'unknown',
      response: "I didn't understand that. Can you rephrase?"
    });
  }
 
  // === Lógica para elegir respuesta aleatoria sin repetir ===
  let availableIndices = matchedIntent.responses
    .map((_, i) => i)
    .filter(i => !matchedIntent!.usedIndices.includes(i));
 
  if (availableIndices.length === 0) {
    matchedIntent.usedIndices = [];
    availableIndices = matchedIntent.responses.map((_, i) => i);
  }
 
  const randomIndex: number =
    availableIndices[Math.floor(Math.random() * availableIndices.length)]!;
 
  matchedIntent.usedIndices.push(randomIndex);
 
  const responseText: string = matchedIntent.responses[randomIndex]!;
 
  // === Logs para depuración ===
  console.log('--- Nueva petición ---');
  console.log('Mensaje:', message);
  console.log('Intent:', matchedIntent.intent);
  console.log('Índices usados:', matchedIntent.usedIndices);
  console.log('Índices disponibles:', availableIndices);
  console.log('Respuesta seleccionada:', responseText);
 
  return res.status(200).json({
    intent: matchedIntent.intent,
    response: responseText
  });
});
 
// === Iniciar servidor ===
app.listen(5000, () => console.log('Mock server running on port 5000'));