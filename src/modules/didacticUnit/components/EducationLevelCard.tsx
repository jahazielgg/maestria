import { Card, CardActionArea, CardContent, Typography, Box } from "@mui/material";

interface Props {
  title: string;
  description: string;
  imageUrl: string;
  selected: boolean;
  onClick: () => void;
}

export default function EducationLevelCard({
  title,
  description,
  imageUrl,
  selected,
  onClick,
}: Props) {
  return (
    <Card
      sx={{
        position: "relative",
        borderRadius: 5,
        boxShadow: selected ? 8 : 3,
        overflow: "hidden",
        border: selected ? "3px solid #1976d2" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <CardActionArea onClick={onClick}>
        <Box
          sx={{
            height: 200,
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: selected ? "brightness(0.9)" : "brightness(0.6)",
          }}
        />
        <CardContent>
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
