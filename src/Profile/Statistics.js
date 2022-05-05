import React, {useEffect, useState} from "react";
import {defaultInstance as axios} from "../axiosConfig";
import {API_GET_USER_PATH} from "../config";
import toast from "../FlashNotification/FlashNotification";
import {Tabs, Box, Tab, Skeleton, Stack, List} from "@mui/material";
import {TabPanel} from "@mui/lab";
import JobStat from "./Statistics/JobStat";
import AcceptedBidStat from "./Statistics/AcceptedBidStat";
import RejectedBidStat from "./Statistics/RejectedBidStat";


const Statistics = ({ username }) => {
  const [jobs, setJobs] = useState([]);
  const [acceptedBids, setAcceptedBids] = useState([]);
  const [rejectedBids, setRejectedBids] = useState([]);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(()=>{
    getStatistics();
  },[]);

  const getStatistics = () => {
    axios.get(API_GET_USER_PATH,{
      params: {
        username: username.toString()
      }
    }).then((response) => {
      if(response.data !== undefined) {
        setJobs(response.data.posts);
        setAcceptedBids(response.data.accepted_bids);
        setRejectedBids(response.data.rejectedBids)
      }
    }).catch((error)=>{
      console.log(error);
      toast.error('User profile unavailable.')
    })
  };

  const SkeletonStructure = () => {
    return (
      <Stack>
        <Skeleton />;
        <Skeleton />;
        <Skeleton />;
      </Stack>
    )
  }

  const JobStats = ({}) => {
    if (jobs) {
       return (<SkeletonStructure />);
    }
    return (jobs.map((job,index) => (
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <JobStat key={index} job={job} />
      </List>
    )))
  };

  const AcceptedBidStats = ({}) => {
    if (jobs) {
      return (<SkeletonStructure />);
    }
    return (acceptedBids.map((acceptedBid,index) => (
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <AcceptedBidStat key={index} acceptedBid={acceptedBid} />
      </List>
    )))
  };

  const RejectedBidStats = ({}) => {
    if (jobs) {
      return (<SkeletonStructure />);
    }
    return (rejectedBids.map((rejectedBid,index) => (
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <RejectedBidStat key={index} rejectedBid={rejectedBid} />
      </List>
    )))
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} >
          <Tab label="Posts"  />
          <Tab label="Accepted Bids" />
          <Tab label="Rejected Bids" />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <JobStats />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AcceptedBidStats />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <RejectedBidStats />
      </TabPanel>
    </Box>
  );

}

export default Statistics;