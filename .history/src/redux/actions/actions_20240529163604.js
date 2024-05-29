import { UTILISATEUR } from "./actionTypes";

export const ajouterUtilisateur = (utilisateur) => {
  return {
    type: UTILISATEUR,
    payload: utilisateur,
  };
};