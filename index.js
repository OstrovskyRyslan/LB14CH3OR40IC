const express = require('express');
const userRouter = require('./user.routes');
const postRouter = require('./post.routes');

const app = express();
const port = 8080;

app.use(express.json());

// Виправлені маршрути
app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));
