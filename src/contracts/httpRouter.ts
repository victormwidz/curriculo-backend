import { Router } from 'express';

export interface HttpRouter {
    init(): Router
}