import React from "react";

export default function handler(req, res) {
  return res.status(200).json({ router: "get route" });
}
