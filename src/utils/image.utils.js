import { BACKDROP_PLACEHOLDER_IMAGE } from "../constants";

export function getBackdropImage(backdropImage) {
  if (backdropImage && backdropImage.length > 0) {
    return `https://image.tmdb.org/t/p/w780/${backdropImage}`;
  } else {
    return BACKDROP_PLACEHOLDER_IMAGE;
  }
}

export function getPosterImage(poster) {
  if (poster) {
    return `https://image.tmdb.org/t/p/w92/${poster}`;
  } else {
    return `https://fakeimg.pl/92x138/282828/eae0d0/?retina=1&text=No%20poster`;
  }
}
