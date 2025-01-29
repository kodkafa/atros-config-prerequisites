import { ParamsWithSystem } from "./types";

export const apt_get: ParamsWithSystem = {
  system: "debian",
  list: ["$atros-use-apt-get"],
};

export const yay: ParamsWithSystem = {
  system: "arch",
  list: ["$atros-use-yay"],
};

export const cask: ParamsWithSystem = {
  system: "mac",
  list: ["--cask"],
};
