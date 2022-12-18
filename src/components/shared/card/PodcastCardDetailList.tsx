import React, { useEffect, useState } from 'react';
import moment from "moment";

import { Link } from "react-router-dom";
import DataTable from 'react-data-table-component';

import { PodcastCardDetailTitle } from './PodcastCardDetailTitle';

import * as SC from './PodcastCardDetailList.styles';
import { millisToMinutesAndSeconds, transformDate } from '../../../utils/utils';

export interface iEpisodePodcast {
  date: string;
  duration: number;
  name: string;
}

export const PodcastCardDetailList = (dataParam: [iEpisodePodcast]) => {
  const [listData, setListData] = useState<iEpisodePodcast | any>();

  useEffect(() => {
    const { date, duration, name } = dataParam;
    const dateTransformed = transformDate(date);
    const time = millisToMinutesAndSeconds(duration);

    setListData([{...dataParam, date:dateTransformed, duration: time }])
  }, [dataParam])

 const columnsEpisodes = [
    {
      name: 'Title',
      cell: () => <Link to="/podcast/1/episode/1">{dataParam.name}</Link>,
      ignoreRowClick: true,
      allowOverflow: true,
      width: "60%",
      button: true,
      headerStyle: {textAlign: 'left'}
    },
    {
      name: 'Date',
      selector: (row: { date: any; }) => row.date,
      sortable: true,
      width: "20%"
    },
    {
      name: 'Duration',
      selector: (row: { duration: any; }) => row.duration,
      sortable: true,
      width: "20%"
    }
  ]

    return (
        <div>
            <PodcastCardDetailTitle />
            <SC.Table>
              <DataTable
                  columns={columnsEpisodes}
                  data={listData}
                  highlightOnHover={true}
                  pagination
                  paginationPerPage={30}
                  paginationRowsPerPageOptions={[30, 50, 100]}
                  persistTableHead={true}
                  pointerOnHover={true}
                  striped={true}
                  title=""
              />
            </SC.Table>
        </div>
    )
}

