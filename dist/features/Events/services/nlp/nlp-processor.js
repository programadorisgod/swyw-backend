import { DIContainer } from "../../../../container/container.js";
import { TOKENS } from "../../../../container/tokens.js";
import { wrapperPromise } from "../../../../share/utils/network/network.js";
import { prompt } from "./prompt.js";
export class NlpProcessor {
  constructor() {
    this._ai = DIContainer.getInstance().resolve(TOKENS.aiModel);
  }
  async process(messageEvent) {
    const [err, response] = await wrapperPromise(this._ai.generate(prompt({
      messageEvent
    })));
    if (err) {
      console.log(err);
      return err;
    }
    if (!response) {
      return new Error('No response from AI model');
    }
    try {
      const createEventData = JSON.parse(response);
      return createEventData;
    } catch (err) {
      console.error('Error parsing AI response:', err);
      return new Error('Error parsing AI response');
    }
  }
}