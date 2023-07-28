import React from "react";
import { posts } from "../../../data/post";

export default function handler(req, res) {
  return res.status(200).json(posts);
}
