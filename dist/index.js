"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const path_1 = __importDefault(require("path"));
const compression_1 = __importDefault(require("compression"));
const home_1 = __importDefault(require("./routes/home"));
const api_1 = __importDefault(require("./routes/api"));
const constants_1 = require("./util/constants");
const app = express_1.default();
app.use(compression_1.default());
const port = process.env.PORT || 8000;
const hbs = express_handlebars_1.default.create({
    extname: '.hbs',
    layoutsDir: './views/layouts',
    defaultLayout: 'main'
});
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
if (!constants_1.__prod__) {
    const morgan = require('morgan');
    app.use(morgan('dev'));
}
app.use(express_1.default.json());
app.use('/', home_1.default);
app.use('/api', api_1.default);
app.listen(port, () => console.log(`app started on port ${port} in ${process.env.NODE_ENV} mode`));
