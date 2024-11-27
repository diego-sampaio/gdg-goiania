export type Events = {
  id: number;
  image: string;
  title: string;
  date: {
    from: string;
    to: string;
  };
  location: {
    local: string;
    map: string;
  };
  url: string;
  description: string;
};

export type News = {
  id: number;
  title: string;
  date: string;
  summary: string;
};

export type Partners = {
  id: number;
  name: string;
  description: string;
  logo: string;
};

export type Staff = {
  id: number;
  name: string;
  role: string;
  photo: string;
  social: {
    instagram: string;
    linkedin: string;
    x: string;
    github: string;
  };
};
