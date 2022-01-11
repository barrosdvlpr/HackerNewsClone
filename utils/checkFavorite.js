export default function checkFavorite(favorites, story) {
    return favorites.some(favorite => favorite.id === story.id); 
  }


// https://scrimba.com/learn/javascript/hacker-news-toggling-stories-in-and-out-of-favorites-cEKkZ9A2