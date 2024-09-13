type Location = {
  lat: number;
  lng: number;
};

type Viewport = {
  northeast: Location;
  southwest: Location;
};

type Geometry = {
  location: Location;
  viewport: Viewport;
};

type Photo = {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
  url: string;
};

type PlusCode = {
  compound_code: string;
  global_code: string;
};

export type Place = {
  business_status: string;
  geometry: Geometry;
  icon: string;
  icon_background_color: string;
  icon_mask_base_uri: string;
  name: string;
  opening_hours: {
    open_now: boolean;
  };
  photos: Photo[];
  place_id: string;
  plus_code: PlusCode;
  rating: number;
  reference: string;
  scope: string;
  types: string[];
  user_ratings_total: number;
  vicinity: string;
  permanently_closed?: boolean;
  price_level?: number;
  //BBYpass de triche TS
  wheelId?: string;
};

export type GetClosestRestaurantsResponse = {
  data: Place[];
};
