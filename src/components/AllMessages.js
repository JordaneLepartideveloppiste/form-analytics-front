import { useEffect } from "react";
import Message1 from "../components/Message1";
import Message2 from "../components/Message2";
import Message3 from "../components/Message3";

const AllMessages = ({ 
    width,
  setMessages,
  setInstruction2,
  instruction2,
  setInstruction3,
  instruction3,
  skipBtn,
  setSkipBtn,
  setDivSelected,
  setIsClicked,
  setInputUnit,
  setConverter,
  setUnitiesToMap,
  setOptionsToMap, 
  setQuantity,
  setIsChecked,
  setInputSelected,
  setUnity,
}) => {
  const setManual = () => {
    setTimeout(() => {
      setSkipBtn(true);
    }, 1000);

    setTimeout(() => {
      setDivSelected(6);
      setIsClicked(true);
    }, 2000);

    setTimeout(() => {
      setInstruction2(true);
    }, 3000);

    setTimeout(() => {
      setInputUnit(true);
      setUnitiesToMap(["cm2", "m2", "are", "ha"]);
      setOptionsToMap([
        {
          name: "Terrain de foot",
          number: 10800,
          img: "https://res.cloudinary.com/dzlah6r2w/image/upload/v1648206946/dumb-converter/foot_r0zknw.webp",
          text: "Le terrain, et les différentes surfaces qui le composent, sont délimités par des lignes sur le sol. Les buts ont une longueur de 7,32 m entre l’intérieur de chaque poteau et 2,44 m de haut entre le sol et la partie inférieure de la barre transversale. Ils sont placés au centre de chaque ligne de but. Chacun des buts est entouré à 16,5 m par une « surface de réparation ». Le point de penalty est à 11 m en face du but.",
        },
        {
          name: "Terrain de basket",
          number: 420,
          img: "https://res.cloudinary.com/dzlah6r2w/image/upload/v1648206945/dumb-converter/basket_jfrgei.webp",
          text: "Aux abords d'un terrain de basket-ball, on trouve la table de marque, où il y a le marqueur, l'opérateur et le chronomètre. À ses côtés, il y a les deux bancs des deux équipes (l'équipe locale à gauche ; l'équipe visiteuse à droite). Dans certaines salles de petite dimension, les spectateurs peuvent se trouver en contact direct avec les joueurs, à 2 mètres seulement du terrain.",
        },
        {
          name: "Magasin Ikea",
          number: 32700,
          img: "https://res.cloudinary.com/dzlah6r2w/image/upload/v1648206946/dumb-converter/ikea_cm66in.webp",
          text: "Retrouvez bornes électriques, navettes, applis, listes d'achats, sacs et chariots, aires de jeu, facilités pour les familles sont proposés dans les 34 magasins de l'enseigne de meubles à monter soi-même .",
        },
        {
          name: "Champ de mars",
          number: 245000,
          img: "https://res.cloudinary.com/dzlah6r2w/image/upload/v1648206947/dumb-converter/mars_zsfyjn.webp",
          text: "Le Champ-de-Mars est un vaste jardin public, entièrement ouvert et situé à Paris dans le 7e arrondissement, entre la tour Eiffel au nord-ouest et l'École militaire au sud-est. Il est l'un des plus grands espaces verts de Paris.",
        },
      ]);
    }, 3600);

    setTimeout(() => {
      setQuantity(1);
      setIsChecked(true);
      setInputSelected(1);
      setUnity("cm2");
    }, 4600);

    setTimeout(() => {
      setInstruction3(true);
      setSkipBtn(false);
    }, 6000);

    setTimeout(() => {
      setConverter(true);
    }, 6600);

    setTimeout(() => {
      setMessages(false);
      setConverter(false);
      setInputUnit(false);
      setDivSelected(0);
      setIsClicked(false);
      setIsChecked(false);
      setInputSelected(0);
      setUnity("");
      setUnitiesToMap([]);
      setOptionsToMap([]);
    }, 12000);
  };

useEffect(() => {
    setManual();
})
      
  

  return (
    <div className="all-messages">
      <div className="all-messages-top">
        {instruction2 ? <Message2 width={width} /> : null}
      </div>
      <div className="all-messages-bottom">
        <Message1 width={width} />
        {instruction3 ? <Message3 width={width} /> : null}
      </div>

      {skipBtn ? (
        <div
          className="skip-btn"
          onClick={() => {
            setMessages(false);
          }}
        >
          Passer l'intro
        </div>
      ) : null}
    </div>
  );
};

export default AllMessages;
