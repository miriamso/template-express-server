export const getVideos = async function (req, res, next) {

  try {
  
    console.log(req.query);
 

    return res
      .status(200)
      .json({ success: true });
  } catch (error) {
    return next(error);
  }
};
