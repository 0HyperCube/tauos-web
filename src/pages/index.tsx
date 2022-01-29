import { Button, Col, Grid, Row, Text } from '@nextui-org/react'
import type { NextPage } from 'next'
import { DownloadCard } from '../components/DownloadCard'
import { Hero } from '../components/Hero'
import { Layout } from '../components/Layout'

const Home: NextPage = () => {
    return (
        <Layout title={'Home'}>
            <Hero>
                <Row align="center">
                    <Col style={{ height: '100%' }}>
                        <Text h1 size="3rem" style={{ marginBottom: '1rem' }}>
                            Form,
                            <br />
                            Function,
                            <br />
                            Elegance
                        </Text>
                        <Text style={{ marginBottom: '2rem' }}>
                            THREE LINES OF BULLSHIT
                            <br />
                            THREE LINES OF BULLSHIT
                            <br />
                            THREE LINES OF BULLSHIT
                        </Text>
                        <Button rounded color="primary">
                            Learn More
                        </Button>
                    </Col>
                    <img src="/assets/images/hero.png" height="300rem" />
                </Row>
            </Hero>
            <Grid.Container
                gap={2}
                style={{
                    backgroundColor: '#1F2937',
                    padding: '0 0 0 1rem',
                    margin: 0,
                    width: '100%',
                }}
            >
                <Grid xs>
                    <DownloadCard title={'tauOS'} description={'wheeeeeee'} />
                </Grid>
                <Grid xs={3}>
                    <DownloadCard
                        title={'tauOS Enterprise'}
                        description={'wheeeeeee'}
                    />
                </Grid>
                <Grid xs={3}>
                    <DownloadCard
                        title={'tauOS Forward'}
                        description={'wheeeeeee'}
                    />
                </Grid>
            </Grid.Container>
        </Layout>
    )
}

export default Home
