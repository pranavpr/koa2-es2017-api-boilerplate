import Koa from "koa";
import cors from "kcors";
import logger from "koa-morgan";
import bodyParser from "koa-bodyparser";
import errorHandler from "koa-better-error-handler";
import router from "./routes";

const app = new Koa();

// Set middlewares
app.use(
    bodyParser({
        enableTypes: ["json", "form"],
        formLimit: "10mb",
        jsonLimit: "10mb"
    })
);

// Logger
app.use(
    logger("dev", {
        skip: () => app.env === "test"
    })
);

// Enable CORS
app.use(cors());

// Better error handler
app.context.onerror = errorHandler;
app.context.api = true;

// Routes
app.use(router.routes());

// Default error handler middleware
app.use(async (ctx, next) => {
    try {
        await next();
        if (ctx.status === 404) {
            ctx.throw(404);
        }
    } catch (err) {
        ctx.throw(err);
        ctx.app.emit("error", err, ctx);
    }
});

export default app;
