import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

import { CopilotkitService } from './copilotkit.service';

@Controller('api')
export class ApiController {
  constructor(private copilotkitService: CopilotkitService) {}

  @Post('copilotkit')
  async copilot(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<void> {
    await this.copilotkitService.process(request, response);
  }
}
