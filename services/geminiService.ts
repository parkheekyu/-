
import { GoogleGenAI, Type } from "@google/genai";
import { RecommendedIdea } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIRecommendations = async (userInput: string): Promise<RecommendedIdea[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `사용자가 관심 있어하는 전자책 주제: "${userInput}". 
      이 주제로 수익을 창출할 수 있는 3가지의 구체적인 전자책 제목과 내용을 제안해줘.
      제안할 때 한국어로 응답해줘.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING, description: "전자책 제목" },
              description: { type: Type.STRING, description: "주요 목차 및 내용 설명" },
              price: { type: Type.STRING, description: "추천 판매 가격 (예: 15,000원)" },
              reason: { type: Type.STRING, description: "이 주제가 잘 팔릴 이유" }
            },
            required: ["title", "description", "price", "reason"]
          }
        }
      }
    });

    return JSON.parse(response.text || "[]");
  } catch (error) {
    console.error("AI Recommendation failed:", error);
    return [];
  }
};
