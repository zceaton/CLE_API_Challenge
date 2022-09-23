import Express from "express";
import { router } from "./routes";

const app = Express();

app.use(Express.json());

// Route handlers
app.use(router);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
