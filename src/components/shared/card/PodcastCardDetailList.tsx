import React, { useEffect, useState } from 'react';
import moment from "moment";

import { Link } from "react-router-dom";
import DataTable from 'react-data-table-component';

import { PodcastCardDetailTitle } from './PodcastCardDetailTitle';

import * as SC from './PodcastCardDetailList.styles';

export interface iEpisodePodcast {
  date: string;
  duration: number;
  name: string;
}

export const PodcastCardDetailList = (dataParam: [iEpisodePodcast]) => {
  const [listData, setListData] = useState<iEpisodePodcast | any>();

  let [date, time] = new Date().toLocaleString('en-US', {hour12: false})

  useEffect(() => {
    // moment(date).utc().format('YYYY-MM-DD');
    // time
    setListData([dataParam])
  }, [dataParam])

 const columnsEpisodes = [
    {
      name: 'Title',
      cell: () => <Link to="/podcast/1/episode/1">{dataParam.name}</Link>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      name: 'Date',
      selector: (row: { date: any; }) => row.date,
      sortable: true
    },
    {
      name: 'Duration',
      selector: (row: { duration: any; }) => row.duration,
      sortable: true
    }
  ]

    return (
        <div>
            <PodcastCardDetailTitle />
            <SC.Table>
              <DataTable
                  columns={columnsEpisodes}
                  data={listData}
                  expandableRows
                  highlightOnHover={true}
                  pagination
                  paginationPerPage={30}
                  paginationRowsPerPageOptions={[30, 50, 100]}
                  persistTableHead={true}
                  pointerOnHover={true}
                  selectableRows
                  striped={true}
                  title=""
              />
            </SC.Table>
        </div>
    )
}

