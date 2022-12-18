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

export function transformDate(dateToTransform:string) {
  const newDateOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour12: false
  }

  return new Date(dateToTransform).toLocaleString('es-ES', newDateOptions)
}

export function millisToMinutesAndSeconds(millis:number) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}
