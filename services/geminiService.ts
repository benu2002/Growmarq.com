import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini API client
// Note: In a real production app, you might proxy this through a backend to hide the key,
// but for this frontend-only demo, we use the env variable directly as per instructions.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

export const generateBlogContent = async (topic: string, tone: string = 'professional'): Promise<string> => {
  if (!apiKey) {
    console.error("API Key is missing.");
    return "Error: API Key is missing. Please set the API_KEY environment variable.";
  }

  try {
    const prompt = `
      Write a comprehensive, SEO-friendly blog post about "${topic}".
      The tone should be ${tone}.
      Format the output in Markdown.
      Include proper headings (H2, H3) and a conclusion.
      Focus on Digital Marketing, AI, and Business Growth.
      Keep it between 400-600 words.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "Failed to generate content.";
  } catch (error) {
    console.error("Error generating content:", error);
    return "Error generating content. Please try again later.";
  }
};

export const generateMarketingIdea = async (businessType: string): Promise<string> => {
   if (!apiKey) return "API Key missing.";
   
   try {
     const prompt = `Provide 3 unique, high-impact digital marketing strategies for a "${businessType}" business. Keep it concise and actionable.`;
     const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
     });
     return response.text || "No ideas generated.";
   } catch (error) {
     console.error("Error generating idea:", error);
     return "Error generating ideas.";
   }
}
