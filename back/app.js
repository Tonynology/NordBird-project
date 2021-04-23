const express = require('express');
const cors = require('cors');
const session  = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const dotenv = require('dotenv');

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const db = require('./models');
const passportConfig = require('./passport');

dotenv.config();
const app = express();
db.sequelize.sync()
    .then(() => {
        console.log('db connect success');
    })
    .catch(console.error);

passportConfig();

app.use(cors({
    origin: '*',
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
}));
app.use(passport.initialize());
app.use(passport.session());

// app.get -> 가져오다
// app.post -> 생성하다
// app.put -> 전체수정 (통채로 덮어씌움)
// app.delete -> 제거
// app.patch -> 부분수정
// app.options -> 찔러보기 (요청 보내면 서버가 받아줌?)
// app.head -> 헤더만 가져오기 (헤더/바디 중에서 헤더만.)

app.get('/', (req, res) => {
    res.send('hello express');
});


app.get('/api/posts', (req, res) => {
    res.json([
        { id: 1, content: 'hello' },
        { id: 2, content: 'hello2' },
        { id: 3, content: 'hello3' },
    ]);
});

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use('/post', postRouter);
app.use('/user', userRouter);

// app.use((err, req, res, next) => {  //next(err) 는 에러처리 미들웨어로 보내버리는데, 그렇지않고 직접 만들고 싶다면 여기서 만든다.

// });

app.listen(3065, () => {
    console.log('server running');
});