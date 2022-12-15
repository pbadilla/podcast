import React from 'react';

import DataTable from 'react-data-table-component';

import { columnsEpisodes } from '../../configs/config';

export const PodcastCardDetailList = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <DataTable
                columns={columnsEpisodes}
                data={listName}
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
        </div>
    )
}

