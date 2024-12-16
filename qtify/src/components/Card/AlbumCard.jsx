import React from "react";
import Styles from "./AlbumCard.module.css";
import { Card, CardContent, CardMedia, Chip, Tooltip } from "@mui/material";

function AlbumCard({ album, type }) {
  return (
    <div>
      {type==="album" ? (
        <Tooltip title={`${album.songs?.length} songs`} placement="top" arrow>
        <div className={Styles.card}>
          <Card>
            <CardMedia
              component="img"
              height="170"
              alt="album"
              image={album.image}
            />
            <CardContent>
              <div className={Styles.banner}>
                <Chip
                  label={`${album.follows} Follows`}
                  size="small"
                  className={Styles.chip}
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className={Styles.bannerTitle}>
          <p>{album.title}</p>
        </div>
      </Tooltip>
      ):(
        <>
        <div className={Styles.card}>
          <Card>
            <CardMedia
              component="img"
              height="170"
              alt="album"
              image={album.image}
            />
            <CardContent>
              <div className={Styles.banner}>
                <Chip
                  label={`${album.likes} Likes`}
                  size="small"
                  className={Styles.chip}
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className={`${Styles.bannerTitle}`}>
          <p>{album.title}</p>
        </div>
        </>
      )}
    </div>
  );
}

export default AlbumCard;
