import Login from './components/login/Login';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset,  } from '@material-ui/core/styles';
import {ThemeProvider } from '@material-ui/core/styles';
import customTheme from './assets/customTheme';
import './assets/webFonts/css/fontiran.css'

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <StylesProvider jss={jss}>
        <div >
          <Login />

        </div>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
