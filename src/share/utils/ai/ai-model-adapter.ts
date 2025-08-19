import type { AIModel } from './interfaces/ai-model.interface';

export class AIModelAdapter implements AIModel {
    generate(prompt: string): Promise<string> {
        throw new Error('Method not implemented.');
    }
}
