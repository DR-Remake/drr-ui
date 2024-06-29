import berserkerBraveheart from "@/assets/characters/avatar_berserker_braveheart.png";
import berserkerKhan from "@/assets/characters/avatar_berserker_khan.png";
import berserkerLeader from "@/assets/characters/avatar_berserker_leader.png";
// berserkerRed
import berserkerRed from "@/assets/characters/avatar_berserker_red.png";
// berserkerTribal
import berserkerTribal from "@/assets/characters/avatar_berserker_tribal.png";
import berserker from "@/assets/characters/avatar_berserker.png";
import chefBiker from "@/assets/characters/avatar_chef_biker.png";
import chefSushi from "@/assets/characters/avatar_chef_sushi.png";
import chef from "@/assets/characters/avatar_chef.png";
import ghostSamuraiRed from "@/assets/characters/avatar_ghost_samurai_red.png";
import ghostSamuraiRonin from "@/assets/characters/avatar_ghost_samurai_ronin.png";
import ghostSamuraiZombie from "@/assets/characters/avatar_ghost_samurai_zombie.png";
import ghostSamurai from "@/assets/characters/avatar_ghost_samurai.png";
import militantFarmer from "@/assets/characters/avatar_militant_farmer.png";
import pyromancerDemon from "@/assets/characters/avatar_pyromancer_demon.png";
import rangerNative from "@/assets/characters/avatar_ranger_native.png";
import ranger from "@/assets/characters/avatar_ranger.png";
import vampireHunter from "@/assets/characters/avatar_vampire_hunter.png";
import berserkerBraveheartAvif from "@/assets/characters/avif/avatar_berserker_braveheart.avif";
import berserkerKhanAvif from "@/assets/characters/avif/avatar_berserker_khan.avif";
import berserkerLeaderAvif from "@/assets/characters/avif/avatar_berserker_leader.avif";
import berserkerRedAvif from "@/assets/characters/avif/avatar_berserker_red.avif";
import berserkerTribalAvif from "@/assets/characters/avif/avatar_berserker_tribal.avif";
import berserkerAvif from "@/assets/characters/avif/avatar_berserker.avif";
import chefBikerAvif from "@/assets/characters/avif/avatar_chef_biker.avif";
import chefSushiAvif from "@/assets/characters/avif/avatar_chef_sushi.avif";
import chefAvif from "@/assets/characters/avif/avatar_chef.avif";
import ghostSamuraiRedAvif from "@/assets/characters/avif/avatar_ghost_samurai_red.avif";
import ghostSamuraiRoninAvif from "@/assets/characters/avif/avatar_ghost_samurai_ronin.avif";
import ghostSamuraiZombieAvif from "@/assets/characters/avif/avatar_ghost_samurai_zombie.avif";
import ghostSamuraiAvif from "@/assets/characters/avif/avatar_ghost_samurai.avif";
import militantFarmerAvif from "@/assets/characters/avif/avatar_militant_farmer.avif";
import pyromancerDemonAvif from "@/assets/characters/avif/avatar_pyromancer_demon.avif";
import rangerNativeAvif from "@/assets/characters/avif/avatar_ranger_native.avif";
import rangerAvif from "@/assets/characters/avif/avatar_ranger.avif";
import vampireHunterAvif from "@/assets/characters/avif/avatar_vampire_hunter.avif";
import berserkerBraveheartWebp from "@/assets/characters/webp/avatar_berserker_braveheart.webp";
import berserkerKhanWebp from "@/assets/characters/webp/avatar_berserker_khan.webp";
import berserkerLeaderWebp from "@/assets/characters/webp/avatar_berserker_leader.webp";
import berserkerRedWebp from "@/assets/characters/webp/avatar_berserker_red.webp";
import berserkerTribalWebp from "@/assets/characters/webp/avatar_berserker_tribal.webp";
import berserkerWebp from "@/assets/characters/webp/avatar_berserker.webp";
import chefBikerWebp from "@/assets/characters/webp/avatar_chef_biker.webp";
import chefSushiWebp from "@/assets/characters/webp/avatar_chef_sushi.webp";
import chefWebp from "@/assets/characters/webp/avatar_chef.webp";
import ghostSamuraiRedWebp from "@/assets/characters/webp/avatar_ghost_samurai_red.webp";
import ghostSamuraiRoninWebp from "@/assets/characters/webp/avatar_ghost_samurai_ronin.webp";
import ghostSamuraiZombieWebp from "@/assets/characters/webp/avatar_ghost_samurai_zombie.webp";
import ghostSamuraiWebp from "@/assets/characters/webp/avatar_ghost_samurai.webp";
import militantFarmerWebp from "@/assets/characters/webp/avatar_militant_farmer.webp";
import pyromancerDemonWebp from "@/assets/characters/webp/avatar_pyromancer_demon.webp";
import rangerNativeWebp from "@/assets/characters/webp/avatar_ranger_native.webp";
import rangerWebp from "@/assets/characters/webp/avatar_ranger.webp";
import vampireHunterWebp from "@/assets/characters/webp/avatar_vampire_hunter.webp";

type charactersDataType = {
  [key: string]: {
    avif: string;
    webp: string;
    default: string;
  };
};

export const charatersData: charactersDataType = {
  berserker: {
    avif: berserkerAvif,
    webp: berserkerWebp,
    default: berserker
  },
  berserkerBraveheart: {
    avif: berserkerBraveheartAvif,
    webp: berserkerBraveheartWebp,
    default: berserkerBraveheart
  },
  berserkerKhan: {
    avif: berserkerKhanAvif,
    webp: berserkerKhanWebp,
    default: berserkerKhan
  },
  berserkerLeader: {
    avif: berserkerLeaderAvif,
    webp: berserkerLeaderWebp,
    default: berserkerLeader
  },
  berserkerRed: {
    avif: berserkerRedAvif,
    webp: berserkerRedWebp,
    default: berserkerRed
  },
  berserkerTribal: {
    avif: berserkerTribalAvif,
    webp: berserkerTribalWebp,
    default: berserkerTribal
  },
  chef: {
    avif: chefAvif,
    webp: chefWebp,
    default: chef
  },
  chefSushi: {
    avif: chefSushiAvif,
    webp: chefSushiWebp,
    default: chefSushi
  },
  chefBiker: {
    avif: chefBikerAvif,
    webp: chefBikerWebp,
    default: chefBiker
  },
  ghostSamurai: {
    avif: ghostSamuraiAvif,
    webp: ghostSamuraiWebp,
    default: ghostSamurai
  },
  gostSamuraiRed: {
    avif: ghostSamuraiRedAvif,
    webp: ghostSamuraiRedWebp,
    default: ghostSamuraiRed
  },
  ghostSamuraiRonin: {
    avif: ghostSamuraiRoninAvif,
    webp: ghostSamuraiRoninWebp,
    default: ghostSamuraiRonin
  },
  ghostSamuraiZombie: {
    avif: ghostSamuraiZombieAvif,
    webp: ghostSamuraiZombieWebp,
    default: ghostSamuraiZombie
  },
  militantFarmer: {
    avif: militantFarmerAvif,
    webp: militantFarmerWebp,
    default: militantFarmer
  },
  pyromancerDemon: {
    avif: pyromancerDemonAvif,
    webp: pyromancerDemonWebp,
    default: pyromancerDemon
  },
  ranger: {
    avif: rangerAvif,
    webp: rangerWebp,
    default: ranger
  },
  rangerNative: {
    avif: rangerNativeAvif,
    webp: rangerNativeWebp,
    default: rangerNative
  },
  vampireHunter: {
    avif: vampireHunterAvif,
    webp: vampireHunterWebp,
    default: vampireHunter
  }
};
