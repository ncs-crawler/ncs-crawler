import { Test, TestingModule } from '@nestjs/testing';
import { NCSService } from './ncs.service';

describe('AppController', () => {
  describe('root', () => {
    it('should return "Hello World!"', () => {
      const ncsService = new NCSService();
      ncsService.crawl();
    });
  });
});
