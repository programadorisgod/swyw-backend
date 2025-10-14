import { GoogleGenAI } from '@google/genai';
import { GEMINI_API_KEYI } from "../../../../../config/app.config.js";
export class GeminiModel {
  constructor() {
    this._ai = void 0;
    this._ai = new GoogleGenAI({
      apiKey: GEMINI_API_KEYI
    });
  }
  async generate(prompt) {
    const response = await this._ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt
    });
    return response.text || '';
  }
}