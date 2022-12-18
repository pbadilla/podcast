export function filtered(arrayPodcasts, query) {
  return (
    arrayPodcasts
      .filter(podcast => {
        if (query === '') {
          return Object.keys(podcast);
        } else if (podcast.name.toLowerCase().includes(query.toLowerCase())) {
          return Object.keys(podcast);
        }
      })
      .length
    )
};
