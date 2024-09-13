import { schema, Typesaurus } from 'typesaurus';

import { Place } from '@/types/googleMaps';

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

export interface User2 {
  name?: string;
  email?: string;
  preferences?: {
    radius: number;
  };
  wheelsList?: Schema['wheels']['Id'][];
}

export interface Wheel2 {
  name: string;
  restaurants: Place[];
  wheelId?: string;
}

export const db2 = schema(($) => ({
  user: $.collection<User2>(),
  wheels: $.collection<Wheel2>(),
}));

export type Schema = Typesaurus.Schema<typeof db>;
export type Schema2 = Typesaurus.Schema<typeof db>;
