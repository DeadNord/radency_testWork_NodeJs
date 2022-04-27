import {Request,Response, NextFunction} from "express";

const validationMiddleware = (schema: any )=> {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400).json({
        status: error.details,
        code: 400,
      });
    }
    next();
  };
};

module.exports = validationMiddleware;
