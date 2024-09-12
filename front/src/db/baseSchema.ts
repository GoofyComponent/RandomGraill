import { schema, Typesaurus } from 'typesaurus';

interface User {
  name: string;
  email: string;
  photoURL: string;
}

interface UserWheel {
  list: Schema['wheel']['Id'][];
}

interface Restaurant {
  name: string;
  address: string;
  image: string;
}

interface Wheel {
  name: string;
}

export const db = schema(($) => ({
  user: $.collection<User>().sub({
    wheels: $.collection<UserWheel>(),
  }),
  wheel: $.collection<Wheel>().sub({
    restaurants: $.collection<Restaurant>(),
  }),
}));

export type Schema = Typesaurus.Schema<typeof db>;
