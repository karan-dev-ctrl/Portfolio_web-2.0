import { GoogleGenAI } from "@google/genai";

// Initialize the client with the API key from the environment
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const RESUME_CONTEXT = `
You are an AI assistant for Alex Dev's portfolio website. 
Alex is a Senior Creative Developer specializing in React, Next.js, TypeScript, and Creative Coding.
Experience: 
- 5+ years in frontend development.
- Currently working at Studio Digital as Lead Engineer.
- Previous experience at TechFlow Inc.
Skills: React, Tailwind CSS, WebGL, Three.js, Node.js, Gemini API.
Personality: Professional, concise, slightly witty, and helpful.
Goal: Answer visitor questions about Alex's work and availability.
If asked to contact, suggest emailing alex@example.com.
`;

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  try {
    // We use gemini-2.5-flash for speed and efficiency in a chat context
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: RESUME_CONTEXT,
        temperature: 0.7,
      },
    });

    return response.text || "I'm having a bit of trouble thinking right now. Please try again later.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Sorry, I couldn't reach the server. Please check your connection.";
  }
};