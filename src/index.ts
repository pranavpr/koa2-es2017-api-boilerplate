import * as dotenv from 'dotenv';
import app from './app';

dotenv.config();

const PORT: number = parseInt(<string>process.env['PORT'], 10) || 8099;

const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); // eslint-disable-line no-console

export default server;
