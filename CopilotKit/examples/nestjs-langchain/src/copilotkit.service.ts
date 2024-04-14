import { Injectable } from '@nestjs/common';
import { CopilotBackend, LangChainAdapter } from '@copilotkit/backend';
import { ChatOpenAI } from '@langchain/openai';

@Injectable()
export class CopilotkitService {
  private backend: CopilotBackend;
  private adapter: LangChainAdapter;

  constructor() {
    this.backend = new CopilotBackend();
    this.adapter = new LangChainAdapter(async (forwardedProps) => {
      const model = new ChatOpenAI({ modelName: 'gpt-4-1106-preview' });
      return model.stream(forwardedProps.messages, {
        tools: forwardedProps.tools,
      });
    });
  }

  async process(request: any, response: any): Promise<void> {
    await this.backend.streamHttpServerResponse(
      request,
      response,
      this.adapter,
    );
  }
}
