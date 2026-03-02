

export interface ItchGame {
  id: number;
  title: string;
  classification: string;
  type: "default" | "html";

  url: string;

  created_at: string;
  published: boolean;
  published_at: string;

  min_price: number;
  can_be_bought: boolean;

  downloads_count: number;
  views_count: number;
  purchases_count: number;

  has_demo: boolean;
  in_press_system: boolean;

  short_text?: string;

  cover_url?: string;
  still_cover_url?: string;

  p_windows: boolean;
  p_osx: boolean;
  p_linux: boolean;
  p_android: boolean;

  user: ItchUser;

  embed?: ItchEmbed;
}

export interface ItchUser {
  id: number;
  username: string;
  url: string;
  cover_url?: string;
}

export interface ItchEmbed {
  width: number;
  height: number;
  fullscreen: boolean;
}
export interface ItchGamesResponse {
    games: ItchGame[];
}