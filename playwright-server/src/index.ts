import {app} from "./socket";
import {getAllPayment} from "./controller/payment-controller";
import {openBrowser} from "./controller/browser-controller";


app.get('/get_all_payment', async (_, res): Promise<void> => {
    res.send(await getAllPayment());
});

app.get('/open_browser', async (_, res): Promise<void> => {
    await openBrowser()
    res.send('Login successfully');
});