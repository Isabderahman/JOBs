import { UTILISATEUR } from "./actionTypes";

export const definirUtilisateur = (utilisateur) => {
  return {
    type: UTILISATEUR,
    payload: utilisateur,
  };
};