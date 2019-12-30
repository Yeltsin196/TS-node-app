"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var booksController_1 = __importDefault(require("../controllers/booksController"));
var router = express_1.Router();
router.get('/', booksController_1.default.indexBook);
router.get('/add', booksController_1.default.renderBook);
router.post('/add', booksController_1.default.saveBook);
exports.default = router;
