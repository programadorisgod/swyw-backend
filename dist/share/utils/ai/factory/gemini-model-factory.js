import { GeminiModel } from "../models/gemini/gemini.js";
import { AIModelFactory } from "./ai-model-factory.js";
export class GeminiModelFactory extends AIModelFactory {
  createAIModel() {
    return new GeminiModel();
  }
}