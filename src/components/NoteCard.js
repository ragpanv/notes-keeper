import { Avatar, Card, CardContent, CardHeader, IconButton, makeStyles, Typography } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import React from 'react';

const useStyles=makeStyles({
  avatar:{
    backgroundColor: (note)=>{
      if(note.category=='work'){
        return 'hsl(0deg,96%,55%)'
      }
      if (note.category == "money") {
        return "hsl(45deg,69%,48%)";
      }
      if (note.category == "todos") {
        return "hsl(30deg,39%,50%)";
      }
      return "hsl(60deg,46%,32%)";
    }
  }
})

export default function NoteCard({note, handleDelete}){
  const classes = useStyles(note)
    return (
      <div>
        <Card elevation={1}>
          <CardHeader
            avatar={
              <Avatar
                className={classes.avatar}
                style={{ fontStyle: "Quicksand" }}
              >
                {note.category[0].toUpperCase()}
              </Avatar>
            }
            title={note.title}
            subheader={note.category}
            action={
              <IconButton onClick={() => handleDelete(note.id)}>
                <DeleteOutlined />
              </IconButton>
            }
          />

          <CardContent>
            <Typography varient="body2" color="textSecondary">
              {note.details}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
}