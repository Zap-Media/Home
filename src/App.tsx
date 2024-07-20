import '@mantine/core/styles.css';
import { MantineProvider, Grid, Button, Switch, rem } from '@mantine/core';
import { useState, useEffect } from 'react';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>
type Theme = 'dark' | 'light'

function App() {
  const [mode, setMode] = useState<Theme>("dark");
  
  const handleChange = (e: ChangeEvent) => setMode(e.target.checked ? 'dark' : 'light')
  
  useEffect(() => {
      document.documentElement.setAttribute('data-mantine-color-scheme', mode);
  }, [mode]);

  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color='#ffffff'
    />
  );

  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color='#000000'
    />
  );

  return (
    <MantineProvider>
      <div className="center">
        <div className="container">
          <h1><span className="head">Zap</span> <br /><span className="sub">Media</span></h1>
          <span className='mini-sub'>Open Source digital media services solo developed by <a href="https://natya.is-a.dev">NatyaCodes</a></span>
          <Grid className='btn-grid'>
            <Grid.Col span={4}>
              <Button className='home-btn'>Zap Social</Button>
            </Grid.Col>
            <Grid.Col span={4}>
              <Button className='home-btn'>Zap Blogs</Button>
            </Grid.Col>
            <Grid.Col span={4}>
              <Button className='home-btn'>ZapFolio</Button>
            </Grid.Col>
          </Grid>
        </div>
        <Switch className='dark-switch' size="lg" onLabel={sunIcon} offLabel={moonIcon} onChange={handleChange} checked={mode === 'dark'} />
      </div>
    </MantineProvider>
  )
}

export default App
