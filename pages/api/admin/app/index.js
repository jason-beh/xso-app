/**
 * Route URL: /api/admin/app
 *
 * [GET] - Get all applications
 *
 */

import Application from "../../../../models/Application";
import dbConnect from "../../../../utils/mongodb";
import { isAuthenticated } from "../../../../utils/isAuthenticated";

export default async function handler(req, res) {
  // Check if user is admin
  let isCorrectUser = await isAuthenticated(req, "ADMIN");
  if (!isCorrectUser) {
    return res.status(401).send("not authenticated");
  }

  /**
   * [GET] - Get all applications
   *
   * @return {array} 200 - Array of applications
   * @return {string} 404 - "Error"
   */
  if (req.method === "GET") {
    await dbConnect();

    // Find all applications
    try {
      const options = {
        page: req.query.page || 1,
        limit: 10,
        lean: true,
        sort: 'createdAt',
        collation: {
          locale: 'en',
        },
      };

      let data = await Application.paginate({}, options);
      
      let paginationData = {...data};
      delete paginationData.docs;

      return res.status(200).send({
        data: data.docs,
        paginationData
      });
    } catch (err) {
      console.log(err);
      return res.status(400).send("Error");
    }
  } else {
    return res.status(404).send("Error");
  }
}
