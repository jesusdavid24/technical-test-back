"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUserHandler = exports.createUserHandler = void 0;
const user_service_1 = require("./user.service");
const errorHandler_1 = __importDefault(require("../../utils/errorHandler"));
function createUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const user = yield (0, user_service_1.createUser)(data);
            res.status(201).json(user);
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            res.status(400).send({ message });
        }
    });
}
exports.createUserHandler = createUserHandler;
function getAllUserHandler(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield (0, user_service_1.getAllUser)();
            return res.status(202).json({ message: 'users has been found successfully', users });
        }
        catch (exception) {
            const message = (0, errorHandler_1.default)(exception);
            res.status(400).send({ message });
        }
    });
}
exports.getAllUserHandler = getAllUserHandler;
