
import { type Doc,type APISpaceXResponse } from '../types/api';

export const getLaunchBy = async ({id}: {id: string}) => {


/* llamadas a apis en js */ 
const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);

const launch = (await res.json()) as Doc;

return launch;

}

export const getLatestLaunches = async () => {

/* llamadas a apis en js */ 
const res = await fetch('https://api.spacexdata.com/v5/launches/query', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: {},
    options: {
      sort: { 
        date_unix: "asc" },
    },
    limit: 12,
  }),
});

const { docs: launches } = (await res.json()) as APISpaceXResponse;

return launches;

}


