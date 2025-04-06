import {app} from "./socket";
import {getAllPayment} from "./controller/payment-controller";
import {openBrowser} from "./controller/browser-controller";
import {searchBalance} from "./controller/balance-controller";

export interface BalanceRequest {
    startDate: string;
    endDate: string;
}


app.get('/get_all_payment', async (_, res): Promise<void> => {
    res.send(await getAllPayment());
});

app.get('/open_browser', async (_, res): Promise<void> => {
    await openBrowser()
    res.send('Login successfully');
});

app.get<{}, {}, {}, BalanceRequest>('/search_balance', async (req, res): Promise<void> => {
    res.send(await searchBalance(req.query));
});