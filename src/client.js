import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: "552nodxx",
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: "skM8RvXq1Hn28vEwI7YaHQ17vty2ZxeR2sdlHIv9ZifEZpGIBeYAcI2nlVZQieCb0Mc0XGDF8N9MwNuNsDOqDHhZMV26TumunaYwTgWFE1egZhaGQUUo0wKBdzWoXYkbyA32QlLABHeymYuQc34m9ngns5CRowtftPhUgybybJ6ScgHejPFi",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)