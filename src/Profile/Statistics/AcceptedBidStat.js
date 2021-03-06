import {Divider, ListItem, ListItemText, Typography} from "@mui/material";
import React from "react";
import {timeFormatWithTimeZone, timeFormatHuman} from "../../helpers";

const AcceptedBidStat = ({bid}) => {

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={`${bid.hash_id}`}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Created: {timeFormatHuman(bid.created_at)}
              </Typography>
              <Typography>
                Pay: {bid.pay}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  )
}

export default AcceptedBidStat;