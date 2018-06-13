
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const baseRouter = require('./routes/base.router');
const finaleRouter = require('./routes/finale.router');
const powersRouter = require('./routes/powers.router');
const skillsRouter = require('./routes/skills.router');
const traitsRouter = require('./routes/traits.router');
const userRouter = require('./routes/user.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/base', baseRouter);
app.use('/api/finale', finaleRouter);
app.use('/api/powers', powersRouter);
app.use('/api/skills', skillsRouter);
app.use('/api/traits', traitsRouter);
app.use('/api/user', userRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
