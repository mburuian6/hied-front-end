import React, {useEffect, useState} from 'react';
import JobItem from '../JobItem/JobItem';
import {Grid, Button, Fab} from '@mui/material';
import {API_JOBS_PATH} from '../paths-config';
import {defaultInstance as axios} from '../axiosConfig';
import toast from '../FlashNotification/FlashNotification';
import {Add} from "@mui/icons-material";

const JobList = () => {
  const [items, setItems] = useState([]);
  var response_items;

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = () => {
    axios.get(API_JOBS_PATH).then((response) => {
      response_items = response.data;
      setItems(response_items["_embedded"]["posts"]?.reverse());
    })
      .catch((error) => {
        toast.warning('Your device is offline')
      })
  }

  const retryJobs = () => {
    axios.get(API_JOBS_PATH)
      .then((response) => {
        response_items = response.data;
        setItems(response_items["_embedded"]["posts"]?.reverse());
      })
      .catch((error) => {
        console.log(error);
        if (error.toString().search('ERR_CONNECTION_REFUSED')) {
          toast.error("Error! Check your internet connection and retry.")
        } else {
          toast.error("Error! Contact Admin.")
        }
      })
  }


  return (
    <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>

      {items.map((item, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <JobItem
            job={item}
            jobIndex={index}
            jobLink={item['_links']['self']}
          />
        </Grid>
      ))}

      <Fab aria-label="add"
           size={'small'}
           href={`/jobform`}
           sx={{
             position: 'fixed',
             bottom: (theme) => theme.spacing(2),
             right: (theme) => theme.spacing(2),
           }}
           variant={"extended"}
           color={"primary"}
      >
        New Job<Add />
      </Fab>

    </Grid>
  )
}

export default JobList;


