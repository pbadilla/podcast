import { createSlice } from '@reduxjs/toolkit';

export interface PodcastState {
  podcastsData: [];
  podcastsIdData: [];
  loading: string;
  error: string;
}

const initialState: PodcastState = {
  podcastsData: [],
  podcastsIdData: [],
  loading: "idle",
  error: ''
}

export interface iDataPodcast {
  artista: string;
  audio: string;
  descripcion: string;
  enlace: string;
  imagen: string;
  nombre: string;
}

function mapData (entriesParam) {
  let dataPodcast = [];
    if (entriesParam.length > 0) {
      entriesParam.map((item) => {
        const { title, summary, link, id } = item;
        const imagenItem = item["im:image"];
        const artistItem = item["im:artist"];
        dataPodcast.push({
          artist: artistItem.label,
          audio: id.label,
          description: summary.label,
          id: id.attributes["im:id"],
          image: imagenItem[0].label,
          link: link.attributes.href,
          name: title.label,
        })
      })
    };
    return dataPodcast;
}

function mapDataId (idDataParam) {
  let dataIdPodcast: { date: any; name: any; duration: any; }[] = [];
  dataIdPodcast.push({
    date: idDataParam.releaseDate,
    name: idDataParam.trackName,
    duration: idDataParam.trackTimeMillis
  })

  return dataIdPodcast;
}


export const podcastSlice = createSlice({
  name: 'podcast',
  initialState,
  reducers: {
    allPodcastsLoading: (state) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    },
    allPodcastsRecieved: (state, { payload }) => {
      state.loading = "idle";
      const { contents } = payload;
      const feeds = JSON.parse(contents);
      const entries = feeds.feed.entry;

      const extractedData = mapData(entries);
      state.podcastsData = extractedData;
    },
    idPodcastLoading: (state) => {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    },
    idPodcastRecieved: (state, { payload }) => {
      state.loading = "idle";
      const { contents } = payload;
      const idFeeds = JSON.parse(contents);
      const extractedData = mapDataId(idFeeds?.results[0]);
      state.podcastsIdData = extractedData;
    }
  },
  extraReducers: (builder) => {},
})

export const { allPodcastsLoading, allPodcastsRecieved, idPodcastLoading, idPodcastRecieved } = podcastSlice.actions;

export const getAllPodcasts = (state) => state.podcast.podcastsData;
export const getLoading = (state) => state.podcast.loading;
export const getByIdPodcastRecieved = (state) => state.podcast.podcastsIdData;

export default podcastSlice.reducer;
