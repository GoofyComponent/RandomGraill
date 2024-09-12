import { schema, Typesaurus } from 'typesaurus';

interface User {
  name: string;
  email: string;
  photoURL: string;
}

interface UserWheel {
  list: Schema['wheels']['Id'][];
  isFavorite: boolean;
}

interface Restaurant {
  id: number;
  name: string;
  address: string;
  image: string;
  active: boolean;
  distance: string;
}

interface Wheel {
  name: string;
  restaurants: Restaurant[];
}

export const db = schema(($) => ({
  user: $.collection<User>().sub({
    wheels: $.collection<UserWheel>(),
  }),
  wheels: $.collection<Wheel>(),
}));

export type Schema = Typesaurus.Schema<typeof db>;
