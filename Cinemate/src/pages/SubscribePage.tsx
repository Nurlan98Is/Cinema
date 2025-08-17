import { useState } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  Grid,
  Divider,
  Chip,
  ToggleButton,
  ToggleButtonGroup,
  styled
} from "@mui/material";
import {
  CheckCircle as CheckIcon,
  Star as StarIcon,
  LiveTv as LiveTvIcon,
  SportsEsports as SportsIcon,
  FamilyRestroom as FamilyIcon
} from "@mui/icons-material";

const PlanCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius * 2,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: theme.shadows[8]
  }
}));

const PopularBadge = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  fontWeight: 'bold'
}));

export const SubscribePage = () => {
  const [subscriptionType, setSubscriptionType] = useState<'basic' | 'bundle'>('basic');

  const handleChange = (
      event: React.MouseEvent<HTMLElement>,
      newType: 'basic' | 'bundle'
  ) => {
    if (newType !== null) {
      setSubscriptionType(newType);
    }
  };

  return (
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box textAlign="center" mb={6}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Выберите вариант подписки
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Сменить план подписки или отменить её можно в любое время
          </Typography>
        </Box>

        <Box display="flex" justifyContent="center" mb={6}>
          <ToggleButtonGroup
              value={subscriptionType}
              exclusive
              onChange={handleChange}
              aria-label="subscription type"
              sx={{
                '& .MuiToggleButton-root': {
                  px: 4,
                  py: 1.5,
                  textTransform: 'none',
                  fontSize: '1rem',
                  '&.Mui-selected': {
                    backgroundColor: 'primary.main',
                    color: 'common.white',
                    '&:hover': {
                      backgroundColor: 'primary.dark'
                    }
                  }
                }
              }}
          >
            <ToggleButton value="basic" aria-label="basic subscription">
              Базовая подписка
            </ToggleButton>
            <ToggleButton value="bundle" aria-label="bundle subscription">
              Пакет/Выгода
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>

        {subscriptionType === 'basic' ? (
            <BasicPlans />
        ) : (
            <BundlePlans />
        )}
      </Container>
  );
};

const BasicPlans = () => (
    <Grid container spacing={4}>
      {/* Без рекламы */}
      <Grid item xs={12} md={4}>
        <PlanCard elevation={3}>
          <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
            Cinemate без рекламы
          </Typography>
          <Box sx={{ my: 2 }}>
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
              690₽ <Typography component="span" color="text.secondary">/месяц</Typography>
            </Typography>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ mb: 3 }}>
            {[
              "Эксклюзивные сериалы без рекламы",
              "Популярные фильмы",
              "Оригинальные фильмы",
              "Детские шоу",
              "Доступ на 4 устройствах"
            ].map((item) => (
                <Box key={item} display="flex" alignItems="center" mb={1}>
                  <CheckIcon color="primary" sx={{ mr: 1 }} />
                  <Typography>{item}</Typography>
                </Box>
            ))}
          </Box>
          <Button
              variant="outlined"
              size="large"
              fullWidth
              sx={{ mt: 'auto', py: 1.5 }}
          >
            Выбрать
          </Button>
        </PlanCard>
      </Grid>

      {/* С рекламой (популярный) */}
      <Grid item xs={12} md={4}>
        <PlanCard elevation={3} sx={{ position: 'relative' }}>
          <PopularBadge label="Популярное" icon={<StarIcon />} />
          <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
            Cinemate с рекламой
          </Typography>
          <Box sx={{ my: 2 }}>
            <Typography color="text.secondary">Первый месяц бесплатно, затем</Typography>
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
              690₽ <Typography component="span" color="text.secondary">/месяц</Typography>
            </Typography>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ mb: 3 }}>
            {[
              "Эксклюзивные сериалы (с рекламой)",
              "Популярные фильмы",
              "Оригинальные фильмы",
              "Детские шоу",
              "Доступ на 2 устройствах"
            ].map((item) => (
                <Box key={item} display="flex" alignItems="center" mb={1}>
                  <CheckIcon color="primary" sx={{ mr: 1 }} />
                  <Typography>{item}</Typography>
                </Box>
            ))}
          </Box>
          <Button
              variant="contained"
              size="large"
              fullWidth
              sx={{ mt: 'auto', py: 1.5 }}
          >
            Выбрать
          </Button>
        </PlanCard>
      </Grid>

      {/* + Live TV */}
      <Grid item xs={12} md={4}>
        <PlanCard elevation={3}>
          <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
            Cinemate + Live TV
          </Typography>
          <Box sx={{ my: 2 }}>
            <Typography color="text.secondary">Первые 3 дня бесплатно, затем</Typography>
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
              690₽ <Typography component="span" color="text.secondary">/месяц</Typography>
            </Typography>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ mb: 3 }}>
            {[
              "95+ каналов с Live TV",
              "Безлимитный видеорегистратор",
              "Доступ к Disney+ (с рекламой)",
              "Спортивные трансляции ESPN+",
              "Доступ на 6 устройствах"
            ].map((item) => (
                <Box key={item} display="flex" alignItems="center" mb={1}>
                  <CheckIcon color="primary" sx={{ mr: 1 }} />
                  <Typography>{item}</Typography>
                </Box>
            ))}
          </Box>
          <Button
              variant="outlined"
              size="large"
              fullWidth
              sx={{ mt: 'auto', py: 1.5 }}
          >
            Выбрать
          </Button>
        </PlanCard>
      </Grid>
    </Grid>
);

const BundlePlans = () => (
    <Grid container spacing={4}>
      {/* Базовый пакет */}
      <Grid item xs={12} md={4}>
        <PlanCard elevation={3}>
          <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
            Базовый пакет
          </Typography>
          <Box sx={{ my: 2 }}>
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
              990₽ <Typography component="span" color="text.secondary">/месяц</Typography>
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1 }}>
              Экономия 15%
            </Typography>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ mb: 3 }}>
            {[
              "Cinemate без рекламы",
              "Доступ к 50+ каналам",
              "5 профилей",
              "Доступ на 4 устройствах",
              "Качество 4K"
            ].map((item) => (
                <Box key={item} display="flex" alignItems="center" mb={1}>
                  <CheckIcon color="primary" sx={{ mr: 1 }} />
                  <Typography>{item}</Typography>
                </Box>
            ))}
          </Box>
          <Button
              variant="outlined"
              size="large"
              fullWidth
              sx={{ mt: 'auto', py: 1.5 }}
          >
            Выбрать
          </Button>
        </PlanCard>
      </Grid>

      {/* Премиум пакет */}
      <Grid item xs={12} md={4}>
        <PlanCard elevation={3} sx={{ position: 'relative' }}>
          <PopularBadge label="Выгодно" icon={<StarIcon />} />
          <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
            Премиум пакет
          </Typography>
          <Box sx={{ my: 2 }}>
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
              1,490₽ <Typography component="span" color="text.secondary">/месяц</Typography>
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1 }}>
              Экономия 25%
            </Typography>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ mb: 3 }}>
            {[
              "Cinemate без рекламы + Live TV",
              "Доступ к 100+ каналам",
              "10 профилей",
              "Доступ на 6 устройствах",
              "Качество 4K HDR",
              "Детский профиль",
              "Оффлайн просмотр"
            ].map((item) => (
                <Box key={item} display="flex" alignItems="center" mb={1}>
                  <CheckIcon color="primary" sx={{ mr: 1 }} />
                  <Typography>{item}</Typography>
                </Box>
            ))}
          </Box>
          <Button
              variant="contained"
              size="large"
              fullWidth
              sx={{ mt: 'auto', py: 1.5 }}
          >
            Выбрать
          </Button>
        </PlanCard>
      </Grid>

      {/* Семейный пакет */}
      <Grid item xs={12} md={4}>
        <PlanCard elevation={3}>
          <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
            Семейный пакет
          </Typography>
          <Box sx={{ my: 2 }}>
            <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
              1,990₽ <Typography component="span" color="text.secondary">/месяц</Typography>
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1 }}>
              Экономия 30%
            </Typography>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box sx={{ mb: 3 }}>
            {[
              "Всё из Премиум пакета",
              "Доступ к 150+ каналам",
              "15 профилей",
              "Доступ на 10 устройствах",
              "Детские и спортивные каналы",
              "Оффлайн просмотр на 5 устройствах",
              "Персональные рекомендации"
            ].map((item) => (
                <Box key={item} display="flex" alignItems="center" mb={1}>
                  <CheckIcon color="primary" sx={{ mr: 1 }} />
                  <Typography>{item}</Typography>
                </Box>
            ))}
          </Box>
          <Button
              variant="outlined"
              size="large"
              fullWidth
              sx={{ mt: 'auto', py: 1.5 }}
          >
            Выбрать
          </Button>
        </PlanCard>
      </Grid>
    </Grid>
);
