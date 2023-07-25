import express from 'express';
import client from 'prom-client';

const app = express();
const PORT = 3000;

const startMetricsServer = () => {
    const collectDefaultMetrics = client.collectDefaultMetrics;
    collectDefaultMetrics();

    app.get('/metrics', async(req,res)=>{
        res.set("Content-Type", client.register.contentType);
        return res.send(await client.register.metrics());
    })
    app.listen(9100, () => {
        console.log('Metrics server started for auth at http://localhost:9100');
    })
}

app.get('/', (_req, res) => {
    res.send('Auth');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Listening on port ${PORT}`);
    startMetricsServer();
});
