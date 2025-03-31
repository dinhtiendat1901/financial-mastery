import {app} from "./socket";
import {runProfile} from "./service/profile-service";


app.get('/run-profile', async (_, res): Promise<void> => {
    await runProfile();

    res.send('Run Profile Successfully!');
});