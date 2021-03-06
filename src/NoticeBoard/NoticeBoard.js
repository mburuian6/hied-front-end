import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import { API_ALL_NOTIFICATIONS_PATH } from "../paths-config";
import { defaultInstance as axios} from '../axiosConfig';
import toast from '../FlashNotification/FlashNotification';
import 'react-chat-elements/dist/main.css';
import {Fab, List} from "@mui/material";
import NoticeItem from "../NoticeItem/NoticeItem";
import {Refresh} from "@mui/icons-material";
import {useNavigate, Link} from "react-router-dom";

const NoticeBoard = (  ) => {

  const { username } = useParams();
  const [added, setAdded] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  useEffect (() => {
    getNotifications();
  }, [added])
  
  const getNotifications = () => {
    axios.get(API_ALL_NOTIFICATIONS_PATH,{
      params: {
        username: username.toString()
      }
    })
    .then((response) => {
      if(response.data._embedded != undefined) {
        setNotifications(response.data._embedded.notifications?.reverse());
      }
    })
    .catch((error) => {
      console.log(error);
      if(error.toString().search('ERR_CONNECTION_REFUSED')){
          toast.error("Error! Check your internet connection and retry.")
      }
      else{
        toast.error("Error! Contact Admin.")
      }
    })
  }

  return (
    <>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {notifications.map((notification,index) => (
          <NoticeItem key={index} notification={notification} />
        ))}
      </List>
      <Fab aria-label="refresh"
           size={'small'}
           href={`/notice-board/${username}`}
           sx={{
             position: 'fixed',
             bottom: (theme) => theme.spacing(2),
             right: (theme) => theme.spacing(2),
           }}
      >
        <Refresh />
      </Fab>
    </>
  )
}

export default NoticeBoard;
