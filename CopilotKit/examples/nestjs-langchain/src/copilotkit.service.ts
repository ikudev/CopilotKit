import { Injectable } from '@nestjs/common';
import { CopilotBackend, OpenAIAdapter } from '@copilotkit/backend';

@Injectable()
export class CopilotkitService {
  private backend: CopilotBackend;
  private adapter: OpenAIAdapter;

  constructor() {
    this.backend = new CopilotBackend();
    this.adapter = new OpenAIAdapter();
  }

  async process(request: any, response: any): Promise<void> {
    await this.backend.streamHttpServerResponse(
      request,
      response,
      this.adapter,
    );
  }
}
