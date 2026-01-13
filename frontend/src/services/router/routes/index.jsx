import React from "react";
import { AUTH_ROUTES } from "./auth";
import { DEV_ROUTES } from "./dev";

export const ROUTES = [
  {
    name: "home",
    component: React.lazy(() => import("../../../pages/Home")),
    paths: {
      fr: "",
      en: "",
    },
  },
  {
    name: "about",
    component: React.lazy(() => import("../../../pages/About")),
    paths: {
      fr: "a-propos",
      en: "about",
    },
  },
  {
    name: "discover",
    component: React.lazy(() => import("../../../pages/Discover")),
    paths: {
      fr: "decouvrir",
      en: "discover",
    },
  },
  ...AUTH_ROUTES,
  {
    name: "users",
    component: React.lazy(() => import("../../../pages/Users/Profile")),
    paths: {
      fr: "u",
      en: "u",
    },
    children: [
      {
        name: "users-profile",
        component: React.lazy(() => import("../../../pages/Users/Profile")),
        paths: {
          fr: "{userSlug}",
          en: "{userSlug}",
        },
      },
    ],
  },
  ...DEV_ROUTES,
  {
    name: "settings",
    component: React.lazy(() => import("../../../pages/Settings")),
    paths: {
      fr: "parametres",
      en: "settings",
    },
    params: {
      section: "profile"
    },
    children: [
      {
        name: "settings-profile",
        component: React.lazy(() => import("../../../pages/Settings")),
        paths: {
          fr: "profil",
          en: "profile",
        },
        params: {
          section: "profile"
        },
      },
    ],
  },
  {
    name: "404",
    component: React.lazy(() => import("../../../pages/Error404")),
    paths: {
      fr: "404",
      en: "404",
    },
  },
];
