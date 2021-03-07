import { createMuiTheme } from '@material-ui/core/styles';
import Typography from '@/layouts/partials/theme/partials/Typography';
import Palette from '@/layouts/partials/theme/partials/Palette';

const theme = createMuiTheme({
  typography: { ...Typography },
  spacing: (factor) => `${0.25 * factor}rem`,
  palette: { ...Palette },
});

export default theme;
