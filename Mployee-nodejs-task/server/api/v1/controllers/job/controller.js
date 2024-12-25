import Joi from 'joi';
import * as express from 'express'
import apiError from '../../../../helper/apiError';
import response from '../../../../../assets/response';
import responseMessage from '../../../../../assets/responseMessage';


import { jobServices } from "../../services/job";
const {
    findJobWithPagination,

  } = jobServices;



export class adminController {

    /**
   * @swagger
   * /job/findJobList:
   *   get:
   *     summary: find job listing
   *     description: find job listing
   *     tags:
   *       - JOB
   *     parameters:
   *       - name: search
   *         in: query
   *         description: job title
   *         required: false
   *       - name: page
   *         in: query
   *         description: page number
   *         required: false
   *       - name: limit
   *         in: query
   *         description: limit of page
   *         required: false
   *     responses:
   *       '200':
   *         description: data found successfully.
   *       '400':
   *         description: Bad request
   *       '401':
   *         description: Unauthorized
   *       '500':
   *         description: Internal server error
   */

  async findJobList(req, res, next) {
    const validationSchema = Joi.object({
        
        search: Joi.string().optional(),
        page: Joi.string().optional(),
        limit: Joi.string().optional(),
    });
    try {
      const { error, value: validatedQuery} = validationSchema.validate(
        req.query
      );
      if (error) {
        return next(error);
      }

     
      let jobData = await findJobWithPagination(validatedQuery);

      return res.json(new response(jobData, responseMessage.DATA_FOUND));
    } catch (error) {
      console.log(error);
      return next(error);
    }
  }
    
}

export default new adminController();