import express from 'express';
import { getVideos } from './videos';

export function createApp() {
  const app = express();

  app.use(express.json());

  app.get('/videos', getVideos);

  return app;
}
