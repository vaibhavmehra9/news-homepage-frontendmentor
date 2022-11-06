import { ReactNode } from 'react';

export type LayoutT = {
  children: ReactNode;
};

export type RouteT = {
  title: string;
  url: string;
};

export type RoutesT = RouteT[];

export type SideBarT = {
  children: ReactNode;
  onClose: () => void;
};

export type NewsTrendT = {
  title: string;
  description: string;
};

export type ButtonT = {
  type: 'button' | 'submit' | 'reset';
  children: ReactNode;
};

export type ArticleT = {
  id: string;
  title: string;
  description: string;
  img: string;
};
