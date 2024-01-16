import { Response } from "express"

export default class BaseController {

    healthcheck = async (_: any, res: Response) => {
        return res.status(200).send({
            uptime: `${process.uptime()}`,
            message: `Services is up and running`
        })
    }
}