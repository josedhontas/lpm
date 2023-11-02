import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function CustomCardProject({ imageSrc, title, description, articleLink }) {
    console.log(imageSrc)
  const handleButtonClick = () => {
    // Abrir uma nova página quando o botão for clicado
    window.open(articleLink, '_blank');
  };

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageSrc} // Utiliza a imagem passada como propriedade
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleButtonClick}>
          Read Article
        </Button>
      </CardActions>
    </Card>
  );
}
