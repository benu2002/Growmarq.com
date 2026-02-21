import { GoogleGenAI } from "@google/genai";

// Initialize the Gemini API client lazily
let ai: GoogleGenAI | null = null;

const getAiClient = () => {
  const apiKey = process.env.API_KEY || '';
  if (!apiKey) {
    console.error("API Key is missing.");
    return null;
  }
  if (!ai) {
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
};

export const generateBlogContent = async (topic: string, tone: string = 'professional'): Promise<string> => {
  const client = getAiClient();
  if (!client) {
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

    const response = await client.models.generateContent({
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
   const client = getAiClient();
   if (!client) return "API Key missing.";
   
   try {
     const prompt = `Provide 3 unique, high-impact digital marketing strategies for a "${businessType}" business. Keep it concise and actionable.`;
     const response = await client.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
     });
     return response.text || "No ideas generated.";
   } catch (error) {
     console.error("Error generating idea:", error);
     return "Error generating ideas.";
   }
}
