import { allProjects, allMetas } from 'content-collections';
import { loader } from 'fumadocs-core/source';
import { createMDXSource } from '@fumadocs/content-collections';

export const source = loader({
  baseUrl: '/projects',
  source: createMDXSource(allProjects, allMetas)
});