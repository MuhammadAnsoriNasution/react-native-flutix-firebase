import * as images from '../assets/images';
export function getImageFromGenre(genre: string) {
  let icon = images.ic_drama;
  switch (genre) {
    case 'Horor':
      icon = images.ic_horror;
      break;
    case 'Music':
      icon = images.ic_music;
      break;
    case 'Action':
      icon = images.ic_action;
      break;
    case 'Drama':
      icon = images.ic_drama;
      break;
    case 'War':
      icon = images.ic_war;
      break;
    case 'Crime':
      icon = images.ic_crime;
      break;
    default:
      icon = images.ic_drama;
      break;
  }
  return icon;
}
