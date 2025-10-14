import { GeminiModelFactory } from "../factory/gemini-model-factory.js";
import { ENV_MODEL_AI } from "../../../../config/app.config.js";
export class ProviderAIModel {
  static create() {
    const modelFactory = this._AIModels.get(ENV_MODEL_AI);
    if (!modelFactory) {
      throw new Error('Model not found');
    }
    return modelFactory;
  }
}
ProviderAIModel._AIModels = new Map([['gemini', new GeminiModelFactory()]]);