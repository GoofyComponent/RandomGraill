interface Restaurant {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  description: string;
  image: string;
  rating: number;
  price: number;
}

// Définir l'état initial
interface RestaurantState {
  restaurants: Restaurant[];
}

// Définir les types d'actions
interface AddRestaurantAction {
  type: 'ADD_RESTAURANT';
  payload: Restaurant;
}

interface UpdateRestaurantAction {
  type: 'UPDATE_RESTAURANT';
  payload: Restaurant; // On passe tout l'objet restaurant pour la mise à jour
}

interface RemoveRestaurantAction {
  type: 'REMOVE_RESTAURANT';
  payload: { id: number };
}

type RestaurantActionTypes =
  | AddRestaurantAction
  | UpdateRestaurantAction
  | RemoveRestaurantAction;

export type { Restaurant, RestaurantActionTypes, RestaurantState };
