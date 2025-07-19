import { Language, Public, Palette, Psychology, Book, Sports, School, Science, Work, CheckCircle as CheckIcon } from "@mui/icons-material";
import { Grow, Card, CardContent, Box, Typography } from "@mui/material";

// Mapeo de iconos y colores por área curricular
export const AREA_STYLES = {
  'Comunicación': { icon: Language, color: '#45B7D1' },
  'Castellano como Segunda Lengua': { icon: Public, color: '#F7DC6F' },
  'Inglés': { icon: Language, color: '#87CEEB' },
  'Arte y Cultura': { icon: Palette, color: '#FFB347' },
  'Personal Social': { icon: Psychology, color: '#FF6B6B' },
  'Desarrollo Personal, Ciudadanía y Cívica': { icon: Psychology, color: '#FF6B6B' },
  'Ciencias Sociales': { icon: Public, color: '#F39C12' },
  'Educación Religiosa': { icon: Book, color: '#DDA0DD' },
  'Educación Física': { icon: Sports, color: '#4ECDC4' },
  'Matemática': { icon: School, color: '#BB8FCE' },
  'Ciencia y Tecnología': { icon: Science, color: '#96CEB4' },
  'Educación para el Trabajo': { icon: Work, color: '#E67E22' },
  'Descubrimiento del Mundo': { icon: Science, color: '#96CEB4' },
  'Psicomotriz': { icon: Sports, color: '#4ECDC4' }
};

// Descripciones contextuales por área
export const AREA_DESCRIPTIONS = {
  'Comunicación': 'Competencias comunicativas orales y escritas',
  'Castellano como Segunda Lengua': 'Para estudiantes de lengua originaria',
  'Inglés': 'Lengua extranjera',
  'Arte y Cultura': 'Apreciación y creación artística',
  'Personal Social': 'Identidad, ciudadanía y convivencia',
  'Desarrollo Personal, Ciudadanía y Cívica': 'Desarrollo personal y ciudadano',
  'Ciencias Sociales': 'Historia, geografía y economía',
  'Educación Religiosa': 'Formación espiritual',
  'Educación Física': 'Vida activa y saludable',
  'Matemática': 'Resolución de problemas matemáticos',
  'Ciencia y Tecnología': 'Indagación científica y diseño',
  'Educación para el Trabajo': 'Competencias laborales y emprendimiento',
  'Descubrimiento del Mundo': 'Exploración del entorno natural y social',
  'Psicomotriz': 'Desarrollo motor y corporal'
};


interface AreaCardProps {
    area: string;
    selected: boolean;
    onClick: () => void;
    index: number;
}

export default function AreaCard({ area, selected, onClick, index }: AreaCardProps) {
    const style = AREA_STYLES[area as keyof typeof AREA_STYLES];
    const Icon = style?.icon || School;
    const color = style?.color || '#95A5A6';
    const description = AREA_DESCRIPTIONS[area as keyof typeof AREA_DESCRIPTIONS] || '';

     return (
    <Grow
      in={true}
      timeout={400}
      style={{ transformOrigin: 'center', transitionDelay: `${index * 100}ms` }}
    >
      <Card
        onClick={onClick}
        sx={{
          cursor: 'pointer',
          height: '100%',
          border: selected ? `3px solid ${color}` : '2px solid transparent',
          borderRadius: 3,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: selected ? 'scale(1.02)' : 'scale(1)',
          bgcolor: selected ? `${color}08` : 'background.paper',
          boxShadow: selected 
            ? `0 8px 25px ${color}30, 0 0 0 1px ${color}20`
            : '0 2px 8px rgba(0,0,0,0.08)',
          '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: `0 8px 25px ${color}40`,
            borderColor: color,
          },
        }}
      >
        <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box display="flex" alignItems="flex-start" gap={2}>
            <Box
              sx={{
                p: 1.5,
                borderRadius: 2,
                bgcolor: `${color}15`,
                color: color,
                minWidth: 48,
                height: 48,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Icon />
            </Box>
            <Box flex={1}>
              <Typography 
                variant="subtitle1" 
                fontWeight="600"
                color={selected ? color : 'text.primary'}
                sx={{ lineHeight: 1.3, mb: 1 }}
              >
                {area}
              </Typography>
              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{ fontSize: '0.875rem', lineHeight: 1.4 }}
              >
                {description}
              </Typography>
            </Box>
            {selected && (
              <CheckIcon 
                sx={{ 
                  color: color, 
                  fontSize: 24,
                  animation: 'bounceIn 0.3s ease'
                }} 
              />
            )}
          </Box>
        </CardContent>
      </Card>
    </Grow>
  );
}
