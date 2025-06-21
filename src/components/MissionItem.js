import React, { useEffect, useRef, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

const MissionItem = ({ title, description, image, isSelected, onClick }) => {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!aboutRef.current) return;
      const top = aboutRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 100) {
        setIsVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`scroll-animate ${isVisible ? 'visible' : ''}`}
      ref={aboutRef}
    >
      <Card sx={{ maxWidth: 600, width: '100%', margin: 'auto', height: '100%' }}>
        <CardActionArea
          onClick={onClick}
          data-active={isSelected ? '' : undefined}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            textAlign: 'center',
            padding: 2,
            '&[data-active]': {
              backgroundColor: 'action.selected',
              '&:hover': {
                backgroundColor: 'action.selectedHover',
              },
            },
          }}
        >
          {image && (
            <CardMedia
              component="img"
              height="180"
              image={image}
              alt={title}
              sx={{
                objectFit: 'contain',
                borderRadius: 1,
                width: '100%',
                marginBottom: 2,
              }}
            />
          )}
          <CardContent>
            <Typography variant="h4" color="#ff914d" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body2" color="black">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default MissionItem;
