import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { getStoreReview, getStoreMission } from "../services/storeGet.provider.js";

export const reviewPreview = async (req, res, next) => {
  console.log("가게 리뷰 조회를 요청하였습니다!");
  // console.log(req.params.store_id);

  return res.send(response(status.SUCCESS, await getStoreReview(req.params.store_id, req.query)));
};

export const missionPreview = async (req, res, next) => {
  console.log("가게 미션 조회를 요청하였습니다!");
  // console.log(req.params.store_id);

  return res.send(response(status.SUCCESS, await getStoreMission(req.params.store_id, req.query)));
};
