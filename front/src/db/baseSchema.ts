import { schema, Typesaurus } from 'typesaurus';

type User = {
  id: string;
  name: string;
  email: string;
};

export const db = schema(($) => ({
  user: $.collection<User>(),
}));

export type Schema = Typesaurus.Schema<typeof db>;
