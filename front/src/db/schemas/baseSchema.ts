// https://typesaurus.com/get-started/

import { schema, Typesaurus } from 'typesaurus';

export const db = schema(($) => ({
  users: $.collection<User>().sub({
    notes: $.collection<Note>(),
  }),
}));

// Infer schema type helper with shortcuts to types in database
export type Schema = Typesaurus.Schema<typeof db>;

//Todo change after the real schema is defined
export interface User {
  name: string;
  email: string;
  password: string;
}

export interface Note {
  title: string;
  content: string;
  userId: string;
}
