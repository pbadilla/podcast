import React, { useEffect, useState } from 'react';

import DataTable from 'react-data-table-component';

import { PodcastCardDetailTitle } from '../shared/PodcastCardDetailTitle';

import { columnsEpisodes } from '../../configs/config';
import { dataPodcast } from '../../mockups/constants';
import { IdataPodcast } from '../../typings/types';

import * as SC from './PodcastCardDetailList.styles';

export const PodcastCardDetailList = () => {
  const [listData, setListData] = useState<IdataPodcast | any>();

  useEffect(() => {
    setListData(dataPodcast)
  }, [dataPodcast])
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

