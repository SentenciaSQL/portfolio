import {StackFilter} from './stacks';

export type ProjectLinkKind = 'api' | 'ui' | 'repo' | 'admin';

export interface ProjectLink {
  kind: ProjectLinkKind;
  url: string;
}

export interface ProjectMeta {
  id: string;
  stacks: StackFilter[];
  links: ProjectLink[];
  featured?: boolean;
}
