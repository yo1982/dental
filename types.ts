import React from 'react';

export type Page = 'home' | 'about' | 'services' | 'doctors' | 'gallery' | 'contact';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Doctor {
  image: string;
  name: string;
  specialty: string;
  bio: string;
}

export interface GalleryItem {
  image: string;
  description: string;
}

export interface SocialLink {
  icon: React.ReactNode;
  url: string;
  name: string;
}