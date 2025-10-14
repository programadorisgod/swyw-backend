export class AIModelFactory {
  getAIModel() {
    const concreteAIModel = this.createAIModel();
    return concreteAIModel;
  }
}