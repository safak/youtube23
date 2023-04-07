import User from "../models/user.model.js";
import createError from "../utils/createError.js";

export const updateUser = async(req, res, next) => {
    const user = await User.findById(req.params.id);
  
   if (req.userId !== user._id.toString()) {
    return next(createError(401, "You can update only your account!"));
  }
    
  if (req.body.password) {
        req.body.password = await bcryptjs.hash(req.body.password, 10);
    }
  try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });
        res.status(200).json(updatedUser);

    } catch (error) {
        next(error);
    }
}

export const deleteUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (req.userId !== user._id.toString()) {
    return next(createError(403, "You can delete only your account!"));
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("deleted.");
};
export const getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).send(user);
};
