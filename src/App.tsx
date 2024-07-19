import '@mantine/core/styles.css';
import { MantineProvider, Grid, Button, Switch } from '@mantine/core';

const mode = () => {
  console.log("yes")
}

function App() {
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
        <Switch className='dark-switch' size="lg" onLabel="Dark" offLabel="Light" onClick={mode} />
      </div>
    </MantineProvider>
  )
}

export default App
